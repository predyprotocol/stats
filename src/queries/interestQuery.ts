import { gql } from '@apollo/client'

export const UNI_FEE_GROWTH_HOURLY_QUERY = gql`
  query ($contractAddress: String) {
    uniFeeGrowthHourlies(
      first: 120
      where: { address: $contractAddress }
      orderBy: updatedAt
      orderDirection: desc
    ) {
      id
      address
      feeGrowthGlobal0X128
      feeGrowthGlobal1X128
      updatedAt
    }
  }
`

export type UniFeeGrowthHoulies = {
  uniFeeGrowthHourlies: {
    id: string
    address: string
    feeGrowthGlobal0X128: string
    feeGrowthGlobal1X128: string
    updatedAt: string
  }[]
}

export const FEE_ENTITY_QUERY = gql`
  query ($pairId: String) {
    feeEntities(
      first: 120
      where: { pair: $pairId }
      orderBy: createdAt
      orderDirection: desc
    ) {
      id
      pair {
        id
        pairId
      }
      supplyStableFee
      supplyUnderlyingFee
      supplySqrtFee0
      supplySqrtFee1
      borrowStableFee
      borrowUnderlyingFee
      borrowSqrtFee0
      borrowSqrtFee1
      supplyStableInterest
      supplyUnderlyingInterest
      supplySqrtInterest0
      supplySqrtInterest1
      borrowStableInterest
      borrowUnderlyingInterest
      borrowSqrtInterest0
      borrowSqrtInterest1
      supplyStableInterestGrowth
      supplyUnderlyingInterestGrowth
      supplySqrtInterest0Growth
      supplySqrtInterest1Growth
      borrowStableInterestGrowth
      borrowUnderlyingInterestGrowth
      borrowSqrtInterest0Growth
      borrowSqrtInterest1Growth
      createdAt
    }
  }
`

export type FeeEntities = {
  feeEntities: {
    id: string
    pair: {
      id: string
      pairId: string
    }
    supplyStableFee: string
    supplyUnderlyingFee: string
    supplySqrtFee0: string
    supplySqrtFee1: string
    borrowStableFee: string
    borrowUnderlyingFee: string
    borrowSqrtFee0: string
    borrowSqrtFee1: string
    supplyStableInterest: string
    supplyUnderlyingInterest: string
    supplySqrtInterest0: string
    supplySqrtInterest1: string
    borrowStableInterest: string
    borrowUnderlyingInterest: string
    borrowSqrtInterest0: string
    borrowSqrtInterest1: string
    supplyStableInterestGrowth: string
    supplyUnderlyingInterestGrowth: string
    supplySqrtInterest0Growth: string
    supplySqrtInterest1Growth: string
    borrowStableInterestGrowth: string
    borrowUnderlyingInterestGrowth: string
    borrowSqrtInterest0Growth: string
    borrowSqrtInterest1Growth: string
    createdAt: string
  }[]
}
