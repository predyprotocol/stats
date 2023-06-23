import { gql } from '@apollo/client'

export const MAINVAULT_HISTORY_ITEM_QUERY = gql`
  query ($vaultId: String, $first: Int, $skip: Int) {
    tradeHistoryItems(
      first: $first
      skip: $skip
      where: { vault_: { vaultId: $vaultId } }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      vault {
        vaultId
      }
      pair {
        pairId
      }
      action
      product
      size
      entryValue
      payoff
      txHash
      createdAt
    }
  }
`

export const ISOLATEDVAULT_HISTORY_ITEM_QUERY = gql`
  query ($owner: String, $first: Int, $skip: Int) {
    tradeHistoryItems(
      first: $first
      skip: $skip
      where: { vault_: { owner: $owner, isMainVault: false } }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      vault {
        vaultId
      }
      pair {
        pairId
      }
      action
      product
      size
      entryValue
      payoff
      txHash
      createdAt
    }
  }
`
export type TradeHistoryItem = {
  id: string
  vault: {
    vaultId: string
  }
  pair: {
    pairId: string
  } | null
  action: string
  product: string
  size: string
  entryValue: string
  payoff: string
  txHash: string
  createdAt: string
}

export type TradeHistoryItems = {
  tradeHistoryItems: TradeHistoryItem[]
}
