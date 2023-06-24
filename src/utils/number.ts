import { BigNumber } from 'ethers'
import { ZERO } from '../constants'
import { toUnscaled } from './bn'

export function toFixedNumber(value: number) {
  return Number(value.toFixed(2))
}

export function toGreeksString(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4
  })
}

export function toPriceString(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })
}

export function toSupplyAmountString(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

export function usdcAmountToString(amount: BigNumber | undefined) {
  return toPriceString(toUnscaled(amount || ZERO, 6))
}

export function toFundingRateString(value: number) {
  return (value * 100).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  })
}

export function toAPYString(value: number) {
  return (value * 100).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })
}

export function toAmountString(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function toIndexPriceString(value: number) {
  return Math.floor(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

export function roundDigit(data: number, digit: number) {
  return parseFloat(data.toFixed(digit))
}
