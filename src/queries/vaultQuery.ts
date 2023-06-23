import { gql } from '@apollo/client'

export const VAULTS_QUERY = gql`
  query ($owner: String) {
    vaultEntities(where: { owner: $owner, isClosed: false }, orderBy: vaultId) {
      id
      vaultId
      owner
      margin
      isMainVault
      openPositions {
        id
        pair {
          pairId
        }
        perpUpdatedAt
        squartUpdatedAt
        createdAt
        updatedAt
      }
    }
  }
`

export type VaultEntities = {
  vaultEntities: {
    id: string
    vaultId: string
    owner: string
    margin: string
    isMainVault: boolean
    openPositions: {
      id: string
      pair: {
        pairId: string
      }
      perpUpdatedAt: string
      squartUpdatedAt: string
      createdAt: string
      updatedAt: string
    }[]
  }[]
}
