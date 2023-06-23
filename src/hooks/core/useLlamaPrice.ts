import { useQuery } from 'react-query'

const PRICE_ENDPOINT = 'https://coins.llama.fi/prices/current/coingecko:usd-coin,coingecko:ethereum'

export function usePrice() {
  return useQuery(
    ['price'],
    async () => {

      const priceResponce = await fetch(
        PRICE_ENDPOINT,
        { method: "GET" }
      )
      const prices = await priceResponce.json()
      const ethPrice = prices.coins['coingecko:ethereum']
      const usdcPrice = prices.coins['coingecko:usd-coin']

      return {
        ethPrice: ethPrice.price,
        usdcPrice: usdcPrice.price
      }
    },
    {
      enabled: true,
      refetchInterval: 30000,
      staleTime: 5000
    }
  )
}
