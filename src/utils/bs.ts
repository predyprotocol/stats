/**
 * Calculates Implied Volatility(annual)
 * @param fundingRate
 * @returns
 */
export function getIV(fundingRate: number) {
  return Math.sqrt(fundingRate * 365)
}

export const getDelta = (
  tradeAmount: number,
  tradeAmountSqrt: number,
  sqrtPrice: number
) => {
  if (sqrtPrice <= 0) {
    return 0
  }
  return tradeAmount + tradeAmountSqrt / sqrtPrice
}

export const getGamma = (tradeAmountSqrt: number, sqrtPrice: number) => {
  if (sqrtPrice <= 0) {
    return 0
  }

  return -tradeAmountSqrt / (2 * sqrtPrice * sqrtPrice * sqrtPrice)
}
