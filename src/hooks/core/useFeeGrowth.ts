import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import {
  UniFeeGrowthHoulies,
  UNI_FEE_GROWTH_HOURLY_QUERY
} from '../../queries/interestQuery'
import { feeArbitrum } from '../../utils/apollo-client'

export function useUniFeeGrowthHourly(contractAddress: string) {
  const { data, loading } = useQuery<UniFeeGrowthHoulies>(
    UNI_FEE_GROWTH_HOURLY_QUERY,
    {
      fetchPolicy: 'cache-first',
      variables: {
        contractAddress
      },
      pollInterval: 15000,
      client: feeArbitrum
    }
  )

  const uniFeeGrowth = useMemo(() => {
    if (data) {
      return data.uniFeeGrowthHourlies
        .map(item => ({
          address: item.address,
          feeGrowthGlobal0X128: BigNumber.from(item.feeGrowthGlobal0X128),
          feeGrowthGlobal1X128: BigNumber.from(item.feeGrowthGlobal1X128),
          timestamp: Number(item.updatedAt)
        }))
        .filter(data => data.address === contractAddress.toLowerCase())
    }
    return null
  }, [data, contractAddress])

  if (loading || uniFeeGrowth === null) {
    return null
  }

  return [...uniFeeGrowth].reverse()
}
