import { gql } from '@apollo/client'

export const FEE_DAILY_QUERY = gql`
  query ($pairId: String, $start: Int) {
    feeDailies(
      first: 90
      where: { pair: $pairId, createdAt_gt: $start }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      pair {
        id
      }
      supplyStableFee
      supplyUnderlyingFee
      borrowStableFee
      borrowUnderlyingFee
      supplySqrtFee0
      supplySqrtFee1
      borrowSqrtFee0
      borrowSqrtFee1
      supplyStableInterestGrowth
      supplyUnderlyingInterestGrowth
      borrowStableInterestGrowth
      borrowUnderlyingInterestGrowth
      createdAt
      updatedAt
    }
  }
`

export type FeeDailies = {
  feeDailies: {
    id: string
    pair: {
      id: string
    }
    supplyStableFee: string
    supplyUnderlyingFee: string
    borrowStableFee: string
    borrowUnderlyingFee: string
    supplySqrtFee0: string
    supplySqrtFee1: string
    borrowSqrtFee0: string
    borrowSqrtFee1: string
    supplyStableInterestGrowth: string
    supplyUnderlyingInterestGrowth: string
    borrowStableInterestGrowth: string
    borrowUnderlyingInterestGrowth: string
    createdAt: string
    updatedAt: string
  }[]
}
