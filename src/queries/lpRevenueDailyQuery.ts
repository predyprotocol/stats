import { gql } from '@apollo/client'

export const LP_REVENUE_DAILY_QUERY = gql`
  query ($start: Int) {
    lprevenueDailies(
      first: 30
      where: { updatedAt_gt: $start }
      orderBy: updatedAt
      orderDirection: desc
    ) {
      id
      fee0
      fee1
      premiumSupply
      premiumBorrow
      supplyInterest0
      supplyInterest1
      createdAt
      updatedAt
    }
  }
`

export type LpRevenueDailies = {
  lprevenueDailies: {
    id: string
    fee0: string
    fee1: string
    premiumSupply: string
    premiumBorrow: string
    supplyInterest0: string
    supplyInterest1: string
    createdAt: string
    updatedAt: string
  }[]
}
