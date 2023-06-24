import { BigNumber } from 'ethers'
import { ZERO } from '../constants'

export type IRMParams = {
  baseRate: BigNumber
  kinkRate: BigNumber
  slope1: BigNumber
  slope2: BigNumber
}

const ONE = BigNumber.from('1000000000000000000')

export function calculateInterestRate(params: IRMParams, ur: BigNumber) {
  if (ur.lt(0)) {
    throw new Error('utilization ratio must be positive value.')
  }

  let ir = params.baseRate

  if (ur.lte(params.kinkRate)) {
    ir = ir.add(ur.mul(params.slope1).div(ONE))
  } else {
    ir = ir.add(params.kinkRate.mul(params.slope1).div(ONE))
    ir = ir.add(params.slope2.mul(ur.sub(params.kinkRate)).div(ONE))
  }

  return ir
}

const SQRT_KINK_UR = BigNumber.from(10).pow(16)

export function calculatePremiumCurve(_utilization: BigNumber) {
  if (_utilization.lte(SQRT_KINK_UR)) {
    return ZERO
  }

  const b = _utilization.sub(SQRT_KINK_UR)

  return b.mul(b).mul(1600).div(ONE).div(ONE)
}
