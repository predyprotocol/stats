import { gql } from '@apollo/client'

export const REBALANCE_HISTORY_ITEM_QUERY = gql`
  query ($pairId: String, $first: Int, $skip: Int) {
    rebalanceHistoryItems(
      first: $first
      skip: $skip
      where: { pair: $pairId }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      pair {
        pairId
      }
      tickLower
      tickUpper
      profit
      createdAt
    }
  }
`

export type RebalanceHistoryItem = {
  id: string
  pair: {
    pairId: string
  }
  tickLower: string
  tickUpper: string
  profit: string
  createdAt: string
}

export type RebalanceHistoryItems = {
  rebalanceHistoryItems: RebalanceHistoryItem[]
}
