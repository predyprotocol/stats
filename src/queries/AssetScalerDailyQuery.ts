import { gql } from '@apollo/client'

export const DAILY_ASSET_GROWTH_QUERY = gql`
  query ($assetId: Int) {
    interestDailies(
      first: 168
      where: { assetId: $assetId }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      assetId
      assetGrowth
      debtGrowth
      createdAt
      updatedAt
    }
  }
`

export type InterestDailyEntities = {
  interestDailies: {
    id: string
    assetId: string
    assetGrowth: string
    debtGrowth: string
    createdAt: string
    updatedAt: string
  }[]
}
