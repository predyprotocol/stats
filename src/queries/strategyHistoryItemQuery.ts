import { gql } from '@apollo/client'

export const STRATEGY_HISTORY_ITEM_QUERY = gql`
  query ($owner: String, $address: String, $first: Int, $skip: Int) {
    strategyUserHistoryItems(
      first: $first
      skip: $skip
      where: { account: $owner, address: $address }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      address
      action
      account
      strategyAmount
      marginAmount
      payoff
      createdAt
    }
  }
`

export type StrategyHistoryItems = {
  strategyUserHistoryItems: {
    id: string
    address: string
    action: string
    account: string
    strategyAmount: string
    marginAmount: string
    payoff: string
    createdAt: string
  }[]
}
