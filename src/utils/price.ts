import { BigNumber } from 'ethers'
import { Q96, UNDERLYING_ONE } from '../constants'

export const toUnscaledSqrtPrice = (sqrtPrice: BigNumber) =>
  sqrtPrice.mul('1000000000').div(Q96).toNumber() / 1000

export const priceMul = (price: BigNumber, amount: BigNumber) =>
  price.mul(amount).div(UNDERLYING_ONE)

export const sqrtPriceMul = (sqrtPrice: BigNumber, amount: BigNumber) =>
  sqrtPrice.mul(amount).div(Q96)
