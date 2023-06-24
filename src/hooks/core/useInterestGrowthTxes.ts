import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { FEE_ENTITY_QUERY, FeeEntities } from '../../queries/interestQuery'

export function useInterestGrowthTxs(pairId: number) {
  const { data, loading } = useQuery<FeeEntities>(FEE_ENTITY_QUERY, {
    fetchPolicy: 'cache-first',
    variables: {
      pairId
    },
    pollInterval: 30000
  })

  const interestGrowthTxs = useMemo(() => {
    if (data) {
      return data.feeEntities
        .map(item => ({
          pairId: Number(item.pair.pairId),
          supplyStableFee: BigNumber.from(item.supplyStableFee),
          supplyUnderlyingFee: BigNumber.from(item.supplyUnderlyingFee),
          supplySqrtFee0: BigNumber.from(item.supplySqrtFee0),
          supplySqrtFee1: BigNumber.from(item.supplySqrtFee1),
          borrowStableFee: BigNumber.from(item.borrowStableFee),
          borrowUnderlyingFee: BigNumber.from(item.borrowUnderlyingFee),
          borrowSqrtFee0: BigNumber.from(item.borrowSqrtFee0),
          borrowSqrtFee1: BigNumber.from(item.borrowSqrtFee1),
          supplyStableInterestGrowth: BigNumber.from(
            item.supplyStableInterestGrowth
          ),
          supplyUnderlyingInterestGrowth: BigNumber.from(
            item.supplyUnderlyingInterestGrowth
          ),
          supplySqrtInterest0Growth: BigNumber.from(
            item.supplySqrtInterest0Growth
          ),
          supplySqrtInterest1Growth: BigNumber.from(
            item.supplySqrtInterest1Growth
          ),
          borrowStableInterestGrowth: BigNumber.from(
            item.borrowStableInterestGrowth
          ),
          borrowUnderlyingInterestGrowth: BigNumber.from(
            item.borrowUnderlyingInterestGrowth
          ),
          borrowSqrtInterest0Growth: BigNumber.from(
            item.borrowSqrtInterest0Growth
          ),
          borrowSqrtInterest1Growth: BigNumber.from(
            item.borrowSqrtInterest1Growth
          ),
          createdAt: Number(item.createdAt)
        }))
        .filter(data => data.pairId === pairId)
    }
    return null
  }, [data, pairId])

  if (loading || interestGrowthTxs === null) {
    return null
  }

  return [...interestGrowthTxs]
}
