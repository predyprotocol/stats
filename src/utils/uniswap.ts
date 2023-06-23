import { TickMath } from '@uniswap/v3-sdk'
import { BigNumber } from 'ethers'
import { Q96, UNDERLYING_ONE } from '../constants'
import { sqrt } from './bn'

export function calculateAmount0Offset(tick: number, liquidity: BigNumber) {
  const sqrtPriceJSBI = TickMath.getSqrtRatioAtTick(tick)
  const sqrtPrice = BigNumber.from(sqrtPriceJSBI.toString())

  return liquidity.mul(Q96).div(sqrtPrice)
}

export function calculateAmount1Offset(tick: number, liquidity: BigNumber) {
  const sqrtPriceJSBI = TickMath.getSqrtRatioAtTick(tick)
  const sqrtPrice = BigNumber.from(sqrtPriceJSBI.toString())

  return liquidity.mul(sqrtPrice).div(Q96)
}

export function getAmount0ForLiquidity(
  sqrtPriceA: BigNumber,
  sqrtPriceB: BigNumber,
  liquidity: BigNumber
) {
  if (sqrtPriceA.gt(sqrtPriceB)) {
    const t = sqrtPriceA
    sqrtPriceA = sqrtPriceB
    sqrtPriceB = t
  }

  return liquidity
    .mul(Q96)
    .mul(sqrtPriceB.sub(sqrtPriceA))
    .div(sqrtPriceB)
    .div(sqrtPriceA)
}

export function getAmount1ForLiquidity(
  sqrtPriceA: BigNumber,
  sqrtPriceB: BigNumber,
  liquidity: BigNumber
) {
  if (sqrtPriceA.gt(sqrtPriceB)) {
    const t = sqrtPriceA
    sqrtPriceA = sqrtPriceB
    sqrtPriceB = t
  }

  return liquidity.mul(sqrtPriceB.sub(sqrtPriceA)).div(Q96)
}

export function getAmountsForLiquidityWithTicks(
  sqrtPrice: BigNumber,
  tickA: number,
  tickB: number,
  liquidity: BigNumber
) {
  const sqrtPriceAJSBI = TickMath.getSqrtRatioAtTick(tickA)
  const sqrtPriceA = BigNumber.from(sqrtPriceAJSBI.toString())

  const sqrtPriceBJSBI = TickMath.getSqrtRatioAtTick(tickB)
  const sqrtPriceB = BigNumber.from(sqrtPriceBJSBI.toString())

  return getAmountsForLiquidity(sqrtPrice, sqrtPriceA, sqrtPriceB, liquidity)
}

export function getAmountsForLiquidity(
  sqrtPrice: BigNumber,
  sqrtPriceA: BigNumber,
  sqrtPriceB: BigNumber,
  liquidity: BigNumber
) {
  let amount0 = BigNumber.from(0)
  let amount1 = BigNumber.from(0)

  if (sqrtPriceA.gt(sqrtPriceB)) {
    const t = sqrtPriceA
    sqrtPriceA = sqrtPriceB
    sqrtPriceB = t
  }

  if (sqrtPrice.lte(sqrtPriceA)) {
    amount0 = getAmount0ForLiquidity(sqrtPriceA, sqrtPriceB, liquidity)
  } else if (sqrtPrice.lt(sqrtPriceB)) {
    amount0 = getAmount0ForLiquidity(sqrtPrice, sqrtPriceB, liquidity)
    amount1 = getAmount1ForLiquidity(sqrtPriceA, sqrtPrice, liquidity)
  } else {
    amount1 = getAmount1ForLiquidity(sqrtPriceA, sqrtPriceB, liquidity)
  }

  return [amount0, amount1]
}

export function priceToSqrtPrice(price: BigNumber) {
  const sqrtPrice = sqrt(price.mul(Q96).div(UNDERLYING_ONE).mul(Q96))

  return sqrtPrice
}
