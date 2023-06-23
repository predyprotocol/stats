export function getHighAndLow(prices: number[], step = 100) {
  let low = 1000000000
  let high = 0

  prices.forEach(price => {
    if (price < low) {
      low = price
    }
    if (price > high) {
      high = price
    }
  })

  const highOffset = step - (high % step)
  const offset = low % step

  const start = prices[prices.length - 1]
  const end = prices[0]

  const change = end / start - 1

  return {
    low,
    high,
    change,
    domainLow: low - offset,
    domainHigh: high + highOffset
  }
}
