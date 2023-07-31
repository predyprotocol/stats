import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { FEE_DAILY_QUERY, FeeDailies } from '../../queries/feeDailyQuery'

export function useFeeDaily(pairId: number, start: number) {
  const { data, loading } = useQuery<FeeDailies>(FEE_DAILY_QUERY, {
    fetchPolicy: 'cache-first',
    variables: {
      pairId: pairId.toString(),
      start
    },
    pollInterval: 30000
  })

  const feeDailies = useMemo(() => {
    if (data) {
      return data.feeDailies
        .map(item => ({
          pairId: Number(item.pair.id),
          supplyStableFee: BigNumber.from(item.supplyStableFee),
          supplyUnderlyingFee: BigNumber.from(item.supplyUnderlyingFee),
          supplySqrtFee0: BigNumber.from(item.supplySqrtFee0),
          supplySqrtFee1: BigNumber.from(item.supplySqrtFee1),
          borrowStableFee: BigNumber.from(item.borrowStableFee),
          borrowUnderlyingFee: BigNumber.from(item.borrowUnderlyingFee),
          borrowSqrtFee0: BigNumber.from(item.borrowSqrtFee0),
          borrowSqrtFee1: BigNumber.from(item.borrowSqrtFee1),
          createdAt: Number(item.createdAt),
          updatedAt: Number(item.updatedAt)
        }))
        .filter(data => data.pairId === pairId)
    }
    return null
  }, [data, pairId])

  if (loading || feeDailies === null) {
    return null
  }

  return [...feeDailies]
}
