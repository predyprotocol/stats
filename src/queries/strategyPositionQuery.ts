import { gql } from '@apollo/client'

export const STRATEGY_POSITION_QUERY = gql`
  query ($id: String) {
    strategyUserPosition(id: $id) {
      id
      address
      account
      entryValue
      strategyAmount
      createdAt
      updatedAt
    }
  }
`

export type StrategyPositionEntity = {
  strategyUserPosition: {
    id: string
    address: string
    account: string
    entryValue: string
    strategyAmount: string
    createdAt: string
    updatedAt: string
  }
}
