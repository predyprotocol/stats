import { BigNumber } from 'ethers'
import { Q96, ZERO } from '../../constants'
import { DEBT_RISK_RATIO, ONE_1E8, RISK_RATIO } from './minDeposit'

export const SQRT_RISK_RATIO = BigNumber.from('120000000')

export function calculateMaxSquartAmountForLong(
  margin: BigNumber,
  sqrtPrice: BigNumber
) {
  if (sqrtPrice.eq(0)) {
    return ZERO
  }

  const max1 = margin
    .mul(2)
    .mul(Q96)
    .div(sqrtPrice)
    .mul(ONE_1E8)
    .div(SQRT_RISK_RATIO.sub(RISK_RATIO.mul(2)).add(ONE_1E8))
  const max2 = margin
    .mul(2)
    .mul(Q96)
    .div(sqrtPrice)
    .mul(RISK_RATIO)
    .div(SQRT_RISK_RATIO.sub(RISK_RATIO.mul(2)).add(ONE_1E8))

  return max1.gt(max2) ? max1 : max2
}

export function calculateMaxSquartAmountForShort(
  margin: BigNumber,
  sqrtPrice: BigNumber
) {
  if (sqrtPrice.eq(0)) {
    return ZERO
  }

  return margin.mul(Q96).div(sqrtPrice).mul(ONE_1E8).div(DEBT_RISK_RATIO)
}

export function calculateMaxPerpAmount(
  squartAmount: BigNumber,
  sqrtPrice: BigNumber
) {
  if (sqrtPrice.eq(0)) {
    return ZERO
  }

  return squartAmount.mul(Q96).div(sqrtPrice)
}
