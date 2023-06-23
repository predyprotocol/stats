import { gql } from '@apollo/client'

export const LENDING_HISTORY_ITEM_QUERY = gql`
  query (
    $owner: String
    $address: String
    $assetId: Int
    $first: Int
    $skip: Int
  ) {
    lendingUserHistoryItems(
      first: $first
      skip: $skip
      where: { account: $owner, address: $address, assetId: $assetId }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      address
      assetId
      action
      account
      assetAmount
      txHash
      createdAt
    }
  }
`

export type LendingUserHistoryItems = {
  lendingUserHistoryItems: {
    id: string
    address: string
    assetId: string
    action: string
    account: string
    assetAmount: string
    txHash: string
    createdAt: string
  }[]
}
