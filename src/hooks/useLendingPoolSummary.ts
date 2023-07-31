import { useQuery } from 'react-query'
import { ONE, ZERO } from '../constants'
import { ScaledAssetStatus, useAsset } from './core/useAsset'
import { IRMParams, calculateInterestRate } from '../utils/irm'
import { toUnscaled } from '../utils/bn'

function getLendingSummary(scaledAssetStatus: ScaledAssetStatus, irmParams: IRMParams) {
  const supply = scaledAssetStatus.totalCompoundDeposited
    .mul(scaledAssetStatus.assetScaler)
    .div(ONE)
    .add(scaledAssetStatus.totalNormalDeposited)
  const borrow = scaledAssetStatus.totalNormalBorrowed
  const ur = borrow.mul(ONE).div(supply)

  const borrowInterest = calculateInterestRate(irmParams, ur)
  const supplyInterest = supply.eq(0)
    ? ZERO
    : borrowInterest
      .mul(borrow)
      .div(supply)

  return {
    supply,
    supplyInterest: toUnscaled(supplyInterest, 16, 2),
    utilization: toUnscaled(ur, 16, 2)
  }

}

export function useLendingPoolSummary(pairId: number) {
  const asset = useAsset(pairId)

  return useQuery(
    ['lending-pool-summary', pairId],
    async () => {
      if (!asset.isSuccess) throw new Error('asset not set')

      return {
        stable: getLendingSummary(asset.data.stablePool.tokenStatus, asset.data.stablePool.irmParams),
        underlying: getLendingSummary(asset.data.underlyingPool.tokenStatus, asset.data.underlyingPool.irmParams)
      }
    },
    {
      enabled: asset.isSuccess,
      refetchInterval: 15000,
      staleTime: 5000
    }
  )
}
