import { BigNumber } from 'ethers'
import { Q96, SQUART_ONE, ZERO } from '../../constants'
import { sqrt } from '../bn'

export type Position = {
  stable: BigNumber
  squart: BigNumber
  underlying: BigNumber
}

export const ONE_1E8 = BigNumber.from('100000000')
export const RISK_RATIO = BigNumber.from('109544511')
export const DEBT_RISK_RATIO = BigNumber.from('500000')

export function calculateLossThreshold(position: Position, margin: BigNumber) {
  if (position.squart.lt(0) || position.underlying.gt(0)) {
    return ZERO
  }

  const a = calculateLiquidationSqrtPrice1(position, margin)
  const b = calculateLiquidationSqrtPrice2(position, margin)

  const minDepositA = calculateMinDeposit(
    position,
    a.mul(Q96).div(ONE_1E8).div('1000000')
  )
  const minDepositB = calculateMinDeposit(
    position,
    b.mul(Q96).div(ONE_1E8).div('1000000')
  )

  const lossThreshold = minDepositA.lt(minDepositB) ? minDepositA : minDepositB

  return margin.sub(lossThreshold)
}

export function calculateLiquidationPrice1(
  position: Position,
  margin: BigNumber
) {
  return computePrice(
    calculateLiquidationSqrtPrice1(position, margin)
      .mul(Q96)
      .div(ONE_1E8)
      .div('1000000')
  )
    .mul(1000000)
    .div(Q96)
}

export function calculateLiquidationPrice2(
  position: Position,
  margin: BigNumber
) {
  return computePrice(
    calculateLiquidationSqrtPrice2(position, margin)
      .mul(Q96)
      .div(ONE_1E8)
      .div('1000000')
  )
    .mul(1000000)
    .div(Q96)
}

export function calculateLiquidationSqrtPrice1(
  position: Position,
  margin: BigNumber
) {
  const liqSqrtPrice = calculateLiquidationSqrtPrice(position, margin, true)

  return liqSqrtPrice.mul(RISK_RATIO).div(ONE_1E8)
}

export function calculateLiquidationSqrtPrice2(
  position: Position,
  margin: BigNumber
) {
  const liqSqrtPrice = calculateLiquidationSqrtPrice(position, margin, false)

  return liqSqrtPrice.mul(ONE_1E8).div(RISK_RATIO)
}

function calculateLiquidationSqrtPrice(
  position: Position,
  margin: BigNumber,
  sign: boolean
) {
  if (position.underlying.eq(0) || position.squart.lt(0)) {
    return ZERO
  }

  // scaled by 1e16
  const numerator1 = position.squart.mul(-1).mul(10000)
  // scaled by 1e32
  const numerator21 = position.squart.mul(position.squart).mul(ONE_1E8)
  // scaled by 1e32
  const numerator22 = position.stable
    .add(margin)
    .mul(position.underlying)
    .mul(ONE_1E8)
  // scaled by 1e16
  if (numerator21.lt(numerator22)) {
    return ZERO
  }
  const numerator2 = sqrt(numerator21.sub(numerator22)).mul(sign ? 1 : -1)

  // scaled by 1e16
  const denominator = position.underlying.div(100)

  return numerator1.add(numerator2).mul(ONE_1E8).div(denominator)
}

export function computePrice(sqrtPrice: BigNumber) {
  return sqrtPrice.mul(sqrtPrice).div(Q96).mul('1000000000000')
}

export function calculateValue(position: Position, sqrtPrice: BigNumber) {
  const price = computePrice(sqrtPrice)

  return position.stable
    .add(position.squart.mul(2).mul(sqrtPrice).div(Q96))
    .add(position.underlying.mul(price).div('1000000000000').div(Q96))
}

export function calculateDelta(position: Position, sqrtPrice: BigNumber) {
  return position.underlying.add(position.squart.mul(Q96).div(sqrtPrice))
}

export function calculateGamma(position: Position, sqrtPrice: BigNumber) {
  return position.squart
    .mul(Q96)
    .div(sqrtPrice.mul(sqrtPrice).div(Q96).mul(sqrtPrice).mul(2).div(Q96))
    .mul(-1)
    .div(SQUART_ONE)
}

export function calculateSquartDebt(position: Position, sqrtPrice: BigNumber) {
  const debtSquart = position.squart.lt(0) ? position.squart.abs() : ZERO

  return debtSquart.mul(2).mul(sqrtPrice).div(Q96)
}

export function calculateMinDeposit(position: Position, sqrtPrice: BigNumber) {
  const minValue = calculateMinValue(position, sqrtPrice)
  const positionValue = calculateValue(position, sqrtPrice)
  const minMinDeposit = calculateSquartDebt(position, sqrtPrice)
    .mul(DEBT_RISK_RATIO)
    .div(ONE_1E8)

  return positionValue.sub(minValue).add(minMinDeposit)
}

function calculateMinValue(position: Position, sqrtPrice: BigNumber) {
  if (position.underlying.eq(0)) {
    return ZERO
  }

  const lowerPrice = sqrtPrice.mul(ONE_1E8).div(RISK_RATIO)
  const upperPrice = sqrtPrice.mul(RISK_RATIO).div(ONE_1E8)
  const minPrice = position.squart.mul(Q96).div(position.underlying).abs()

  const valueLower = calculateValue(position, lowerPrice)
  const valueUpper = calculateValue(position, upperPrice)
  const valueMin = calculateValue(position, minPrice)

  const min = valueLower.lt(valueUpper) ? valueLower : valueUpper

  if (position.squart.lt(0) && position.underlying.gt(0)) {
    return valueMin.lt(min) ? valueMin : min
  }

  return min
}
