import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { predyArbitrum } from '../../utils/apollo-client'
import {
  LP_REVENUE_DAILY_QUERY,
  LpRevenueDailies
} from '../../queries/lpRevenueDailyQuery'

export function useLpRevenueDaily(start: number) {
  const { data, loading } = useQuery<LpRevenueDailies>(LP_REVENUE_DAILY_QUERY, {
    fetchPolicy: 'cache-first',
    variables: {
      start
    },
    pollInterval: 15000,
    client: predyArbitrum
  })

  const lpRevenueDailies = useMemo(() => {
    if (data) {
      return data.lprevenueDailies.map(item => ({
        id: item.id,
        fee0: BigNumber.from(item.fee0),
        fee1: BigNumber.from(item.fee1),
        premiumSupply: BigNumber.from(item.premiumSupply),
        premiumBorrow: BigNumber.from(item.premiumBorrow),
        supplyInterest0: BigNumber.from(item.supplyInterest0),
        supplyInterest1: BigNumber.from(item.supplyInterest1),
        createdAt: Number(item.createdAt),
        updatedAt: Number(item.updatedAt)
      }))
    }
    return null
  }, [data])

  if (loading || lpRevenueDailies === null) {
    return null
  }

  return [...lpRevenueDailies].reverse()
}
