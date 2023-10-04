import { gql } from '@apollo/client'

export const STRATEGY_POSITION_QUERY = gql`
  query ($id: String) {
    strategyUserPosition(id: $id) {
      id
      strategyId
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
    strategyId: string
    account: string
    entryValue: string
    strategyAmount: string
    createdAt: string
    updatedAt: string
  }
}
