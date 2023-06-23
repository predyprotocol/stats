import { gql } from '@apollo/client'

export enum AggregationInterval {
  Hourly = 'HOURLY',
  Daily = 'DAILY'
}

export const AGGREGATED_UNISWAP_PRICE_QUERY = gql`
  query ($address: String, $interval: String) {
    aggregatedUniswapPriceEntities(
      first: 168
      where: { address: $address, interval: $interval }
      orderBy: openTimestamp
      orderDirection: desc
    ) {
      id
      address
      interval
      openPrice
      closePrice
      openTimestamp
      closeTimestamp
    }
  }
`

export type AggregatedUniswapPriceEntities = {
  aggregatedUniswapPriceEntities: {
    id: string
    address: string
    interval: string
    openPrice: string
    closePrice: string
    openTimestamp: string
    closeTimestamp: string
  }[]
}
