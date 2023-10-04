import { BigNumber } from 'ethers'
import { Q96, UNDERLYING_ONE } from '../constants'
import { PairScalers } from './helpers/scaler'
import { toUnscaled } from './bn'

export const toUnscaledSqrtPrice = (
  sqrtPrice: BigNumber,
  scalers: PairScalers
) =>
  toUnscaled(
    sqrtPrice.mul(scalers.squartScaler).div(Q96),
    scalers.marginDecimals
  )

export const priceMul = (price: BigNumber, amount: BigNumber) =>
  price.mul(amount).div(UNDERLYING_ONE)

export const sqrtPriceMul = (sqrtPrice: BigNumber, amount: BigNumber) =>
  sqrtPrice.mul(amount).div(Q96)
