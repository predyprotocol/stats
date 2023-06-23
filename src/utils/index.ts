import { BigNumber } from 'ethers'
import {
  SLIPPAGE_TOLERANCE_LOWER_MAP,
  SLIPPAGE_TOLERANCE_NETWORK_MAP,
  SLIPPAGE_TOLERANCE_UPPER_MAP
} from '../constants'
import { TradeType } from '../constants/enum'
import { toUnscaled } from './bn'
import { MARGIN_INFOS } from '../constants/assets'

export function tradeTypeToString(tradeType: TradeType) {
  if (tradeType === TradeType.LONG_CALL) return 'Long Call'
  else if (tradeType === TradeType.LONG_PUT) return 'Long Put'
  else if (tradeType === TradeType.SHORT_CALL) return 'Short Call'
  else if (tradeType === TradeType.SHORT_PUT) return 'Short Put'
  else if (tradeType === TradeType.LONG_STRANGLE) return 'Long Strangle'
  else if (tradeType === TradeType.SHORT_STRANGLE) return 'Short Strangle'
  else if (tradeType === TradeType.BULL_CALL_SPREAD) return 'Bull Call Spread'
  else if (tradeType === TradeType.BEAR_CALL_SPREAD) return 'Bear Call Spread'
  else if (tradeType === TradeType.LENDING) return 'Lending'
  else if (tradeType === TradeType.HEDGE) return 'Hedge'
  return 'Undefined'
}

export function calculateGasMargin(estimatedGas: BigNumber) {
  return estimatedGas.mul(140).div(100)
}

export function calculateMargin(estimatedMargin: BigNumber) {
  return estimatedMargin.mul(105).div(100)
}

// slippage tolerance is 0.2%
export function computeLowerSqrtPrice(sqrtPrice: BigNumber, chainId: number) {
  // 0.2%
  // sqrtPrice * sqrt(1000/1002)
  //return sqrtPrice.mul(999001).div(1000000)
  const index = SLIPPAGE_TOLERANCE_NETWORK_MAP[chainId].index
  return sqrtPrice.mul(SLIPPAGE_TOLERANCE_LOWER_MAP[index]).div(1000000)
}

export function computeUpperSqrtPrice(sqrtPrice: BigNumber, chainId: number) {
  // 0.2%
  // sqrtPrice * sqrt(1002/1000)
  // return sqrtPrice.mul(1001000).div(1000000)
  const index = SLIPPAGE_TOLERANCE_NETWORK_MAP[chainId].index
  return sqrtPrice.mul(SLIPPAGE_TOLERANCE_UPPER_MAP[index]).div(1000000)
}

export function roundContractSize(tradeAmount: BigNumber) {
  return Math.round(toUnscaled(tradeAmount.mul(1000), 18, 3)) / 1000
}

export function roundToMinutes(currentTimestamp: number) {
  return Math.floor(currentTimestamp / 60)
}

export function convertNotionalToString(value: number) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + 'm'
  } else if (value >= 1000) {
    return (value / 1000).toFixed(2) + 'k'
  } else {
    return value.toFixed(2)
  }
}

export function roundMargin(pairGroupId: number, amount: BigNumber) {
  const rounderScaler = BigNumber.from(10).pow(
    MARGIN_INFOS[pairGroupId].rounder
  )

  return amount.div(rounderScaler).mul(rounderScaler)
}
