import { BigNumber } from 'ethers'
import { Q96 } from '../../constants'
import { calculateValue, computePrice, ONE_1E8, Position } from './minDeposit'

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

const RATIO10 = BigNumber.from('102469507')

export function calculateEstematedProfit(
  position: Position,
  currentSqrtPrice: BigNumber
): EstProfit {
  const lowSqrtPrice = currentSqrtPrice.mul(ONE_1E8).div(RATIO10)
  const highSqrtPrice = currentSqrtPrice.mul(RATIO10).div(ONE_1E8)

  const value = calculateValue(position, currentSqrtPrice)
  const valuePriceHigh = calculateValue(position, highSqrtPrice)
  const valuePriceLow = calculateValue(position, lowSqrtPrice)

  return {
    low: {
      price: computePrice(lowSqrtPrice).mul('1000000').div(Q96),
      estProfit: valuePriceLow.sub(value)
    },
    high: {
      price: computePrice(highSqrtPrice).mul('1000000').div(Q96),
      estProfit: valuePriceHigh.sub(value)
    }
  }
}
