import { BigNumber } from 'ethers'
import { ONE, Q96, ZERO } from '../../constants'
import { PairScalers } from './scaler'
import { sqrt, toUnscaled } from '../bn'
import { toUnscaledSqrtPrice } from '../price'
import { getGamma } from '../bs'

export const ONE_1E8 = BigNumber.from('100000000')
export const RISK_RATIO = BigNumber.from('109544511')
export const DEBT_RISK_RATIO = BigNumber.from('200000')
const RATIO10 = BigNumber.from('102469507')

export type EstLoss = {
  lossThreshold: BigNumber
  low: {
    price: BigNumber
    estLoss: BigNumber
  }
  high: {
    price: BigNumber
    estLoss: BigNumber
  }
}

export type EstProfit = {
  low: {
    price: BigNumber
    estProfit: BigNumber
  }
  high: {
    price: BigNumber
    estProfit: BigNumber
  }
}

export class Position {
  stable: BigNumber
  squart: BigNumber
  underlying: BigNumber
  scalers: PairScalers
  riskRatio: BigNumber

  constructor(
    stable: BigNumber,
    squart: BigNumber,
    underlying: BigNumber,
    scalers: PairScalers,
    riskRatio: BigNumber = RISK_RATIO
  ) {
    this.stable = stable
    this.squart = squart
    this.underlying = underlying
    this.scalers = scalers
    this.riskRatio = riskRatio
  }

  // estLoss
  calculateEstLoss(margin: BigNumber): EstLoss | null {
    if (this.squart.lte(0) || this.underlying.gt(0)) {
      return null
    }

    const a = this.calculateLiquidationSqrtPrice1(margin)
    const b = this.calculateLiquidationSqrtPrice2(margin)

    const minDepositA = this.calculateMinDeposit(
      a.mul(Q96).div(ONE_1E8).div('1000000')
    )
    const minDepositB = this.calculateMinDeposit(
      b.mul(Q96).div(ONE_1E8).div('1000000')
    )

    const lossThreshold = minDepositA.lt(minDepositB)
      ? minDepositA
      : minDepositB

    return {
      lossThreshold: margin.sub(lossThreshold),
      low: {
        price: computePrice(
          a.mul(Q96).div(ONE_1E8).div('1000000'),
          this.scalers
        )
          .mul('1000000')
          .div(Q96),
        estLoss: margin.sub(minDepositA)
      },
      high: {
        price: computePrice(
          b.mul(Q96).div(ONE_1E8).div('1000000'),
          this.scalers
        )
          .mul('1000000')
          .div(Q96),
        estLoss: margin.sub(minDepositB)
      }
    }
  }

  // estProfit
  calculateEstematedProfit(currentSqrtPrice: BigNumber): EstProfit {
    const lowSqrtPrice = currentSqrtPrice.mul(ONE_1E8).div(RATIO10)
    const highSqrtPrice = currentSqrtPrice.mul(RATIO10).div(ONE_1E8)

    const value = this.calculateValue(currentSqrtPrice)
    const valuePriceHigh = this.calculateValue(highSqrtPrice)
    const valuePriceLow = this.calculateValue(lowSqrtPrice)

    return {
      low: {
        price: computePrice(lowSqrtPrice, this.scalers).mul('1000000').div(Q96),
        estProfit: valuePriceLow.sub(value)
      },
      high: {
        price: computePrice(highSqrtPrice, this.scalers)
          .mul('1000000')
          .div(Q96),
        estProfit: valuePriceHigh.sub(value)
      }
    }
  }

  // calculates liquidation price
  calculateLossThreshold(margin: BigNumber) {
    if (this.squart.lt(0) || this.underlying.gt(0)) {
      return ZERO
    }

    const a = this.calculateLiquidationSqrtPrice1(margin)
    const b = this.calculateLiquidationSqrtPrice2(margin)

    const minDepositA = this.calculateMinDeposit(
      a.mul(Q96).div(ONE_1E8).div('1000000')
    )
    const minDepositB = this.calculateMinDeposit(
      b.mul(Q96).div(ONE_1E8).div('1000000')
    )

    const lossThreshold = minDepositA.lt(minDepositB)
      ? minDepositA
      : minDepositB

    return margin.sub(lossThreshold)
  }

  calculateLiquidationPrice1(margin: BigNumber) {
    return computePrice(
      this.calculateLiquidationSqrtPrice1(margin)
        .mul(Q96)
        .div(ONE_1E8)
        .mul(this.scalers.marginScaler)
        .div(this.scalers.squartScaler),
      this.scalers
    ).div(Q96)
  }

  calculateLiquidationPrice2(margin: BigNumber) {
    return computePrice(
      this.calculateLiquidationSqrtPrice2(margin)
        .mul(Q96)
        .div(ONE_1E8)
        .mul(this.scalers.marginScaler)
        .div(this.scalers.squartScaler),
      this.scalers
    ).div(Q96)
  }

  calculateLiquidationSqrtPrice1(margin: BigNumber) {
    const liqSqrtPrice = this.calculateLiquidationSqrtPrice(margin, true)

    return liqSqrtPrice.mul(this.riskRatio).div(ONE_1E8)
  }

  calculateLiquidationSqrtPrice2(margin: BigNumber) {
    const liqSqrtPrice = this.calculateLiquidationSqrtPrice(margin, false)

    return liqSqrtPrice.mul(ONE_1E8).div(this.riskRatio)
  }

  private calculateLiquidationSqrtPrice(margin: BigNumber, sign: boolean) {
    if (this.underlying.eq(0) || this.squart.lt(0)) {
      return ZERO
    }

    // scaled by 1e16
    const numerator1 = this.squart
      .mul(-1)
      .mul('10000000000000000')
      .div(this.scalers.squartScaler)
    // scaled by 1e32
    const numerator21 = this.squart
      .mul(this.squart)
      .mul(ONE_1E8)
      .mul(1000000)
      .div(this.scalers.squartScaler)
      .mul(ONE)
      .div(this.scalers.squartScaler)
    // scaled by 1e32
    const numerator22 = this.stable
      .add(margin)
      .mul(this.underlying)
      .mul(ONE_1E8)
      .mul(ONE_1E8)
      .div(this.scalers.marginScaler)
      .mul(ONE_1E8)
      .mul(ONE_1E8)
      .div(this.scalers.underlyingScaler)

    if (numerator21.lt(numerator22)) {
      return ZERO
    }
    // scaled by 1e16
    const numerator2 = sqrt(numerator21.sub(numerator22)).mul(sign ? 1 : -1)

    // scaled by 1e16
    const denominator = this.underlying
      .mul(ONE)
      .div(100)
      .div(this.scalers.underlyingScaler)

    return numerator1.add(numerator2).mul(ONE_1E8).div(denominator)
  }

  /**
   * Calculates minDeposit
   * @param sqrtPrice
   * @param scalers
   * @returns
   */
  calculateMinDeposit(sqrtPrice: BigNumber) {
    const minValue = this.calculateMinValue(sqrtPrice)
    const positionValue = this.calculateValue(sqrtPrice)
    const minMinDeposit = this.calculateSquartDebt(sqrtPrice)
      .mul(DEBT_RISK_RATIO)
      .div(ONE_1E8)

    return positionValue.sub(minValue).add(minMinDeposit)
  }

  private calculateMinValue(sqrtPrice: BigNumber) {
    if (this.underlying.eq(0)) {
      return ZERO
    }

    const lowerPrice = sqrtPrice.mul(ONE_1E8).div(this.riskRatio)
    const upperPrice = sqrtPrice.mul(this.riskRatio).div(ONE_1E8)
    const minPrice = this.squart.mul(Q96).div(this.underlying).abs()

    const valueLower = this.calculateValue(lowerPrice)
    const valueUpper = this.calculateValue(upperPrice)
    const valueMin = this.calculateValue(minPrice)

    const min = valueLower.lt(valueUpper) ? valueLower : valueUpper

    if (this.squart.lt(0) && this.underlying.gt(0)) {
      return valueMin.lt(min) ? valueMin : min
    }

    return min
  }

  calculateSquartDebt(sqrtPrice: BigNumber) {
    const debtSquart = this.squart.lt(0) ? this.squart.abs() : ZERO

    return debtSquart.mul(2).mul(sqrtPrice).div(Q96)
  }
  /**
   * Calculates position value
   * @param position
   * @param sqrtPrice
   * @param scalers
   * @returns position value scaled by margin decimals
   */
  calculateValue(sqrtPrice: BigNumber) {
    const price = computePrice(sqrtPrice, this.scalers)

    return this.stable
      .add(this.squart.mul(2).mul(sqrtPrice).div(Q96))
      .add(
        this.underlying.mul(price).div(this.scalers.underlyingScaler).div(Q96)
      )
  }

  calculateDelta(sqrtPrice: BigNumber) {
    return this.underlying.add(this.squart.mul(Q96).div(sqrtPrice))
  }

  calculateGamma(sqrtPriceBn: BigNumber) {
    const sqrtPrice = toUnscaledSqrtPrice(sqrtPriceBn, this.scalers)
    return getGamma(
      toUnscaled(this.squart, this.scalers.squartDecimals),
      sqrtPrice
    )
  }
}

/**
 * Computes price
 * @param sqrtPrice
 * @param scalers
 * @returns price scaled by margin decimals
 */
export function computePrice(sqrtPrice: BigNumber, scalers: PairScalers) {
  return sqrtPrice
    .mul(sqrtPrice)
    .mul(scalers.squartScaler)
    .div(Q96)
    .mul(scalers.squartScaler)
    .div(scalers.marginScaler)
}

export function priceToSqrtPrice(price: BigNumber, scalers: PairScalers) {
  const sqrtPrice = sqrt(
    price
      .mul(Q96)
      .mul(scalers.marginScaler)
      .div(scalers.squartScaler)
      .div(scalers.squartScaler)
  )

  return sqrtPrice
}
