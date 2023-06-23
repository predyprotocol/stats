import { useQuery } from "react-query"
import { ONE, TOKEN_RESERVE_FACTOR, ZERO } from "../constants"
import { useAsset } from "./core/useAsset"
import { calculateInterestRate } from "../utils/irm"
import { BigNumber } from "ethers"
import { toUnscaled } from "../utils/bn"

export function useLendingPoolSummary(assetId: number) {
  const asset = useAsset(assetId)

  return useQuery(
    ['lending-pool-summary', assetId],
    async () => {
      if (!asset.isSuccess) throw new Error('asset not set')

      const tokenStatus = asset.data.tokenStatus

      const supply = tokenStatus.totalCompoundDeposited.mul(
        tokenStatus.assetScaler
      ).div(ONE).add(
        tokenStatus.totalNormalDeposited
      )
      const borrow = tokenStatus.totalNormalBorrowed
      const ur = borrow.mul(ONE).div(supply)

      const borrowInterest = calculateInterestRate(asset.data.irmParams, ur)
      const supplyInterest = supply.eq(0)
        ? ZERO
        : borrowInterest
          .mul(borrow)
          .div(supply)
          .mul(BigNumber.from(100).sub(TOKEN_RESERVE_FACTOR))
          .div(100)

      return {
        supply,
        supplyInterest: toUnscaled(supplyInterest, 16, 2),
        utilization: toUnscaled(ur, 16, 2)
      }
    },
    {
      enabled: asset.isSuccess,
      refetchInterval: 15000,
      staleTime: 5000
    }
  )
}
