import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { getNow, useDeltaTimestamps } from '../../utils/time'
import { MARGIN, ONE, Q96, UNDERLYING_ONE, ZERO } from '../../constants'
import { useCachedPrice } from './usePrice'
import { toUnscaled } from '../../utils/bn'
import { useAsset } from './useAsset'
import { useInterestGrowthTxs } from './useInterestGrowthTxes'

export function useFee24h(assetId: number) {
  const [, yesterday, ,] = useDeltaTimestamps()
  const feesBetweenTxes = useFeesBetweenTxes(assetId)
  const price = useCachedPrice(assetId)

  const items24h = useMemo(() => {
    if (feesBetweenTxes) {
      return sliceLatest24HFee(feesBetweenTxes, yesterday)
    } else {
      return []
    }
  }, [yesterday, feesBetweenTxes])

  const accItems24h = items24h.reduce(
    (acc, item) => {
      return {
        fee0: acc.fee0.add(item.fee0),
        fee1: acc.fee1.add(item.fee1)
      }
    },
    {
      fee0: ZERO,
      fee1: ZERO
    }
  )

  const feesUSDC = accItems24h.fee1
    .add(accItems24h.fee0.mul(price.price).div(UNDERLYING_ONE))
    .div(ONE)

  return toUnscaled(feesUSDC, MARGIN.DECIMALS)
}

export function sliceLatest24HFee(
  feesBetweenTxes: {
    fee0: BigNumber
    fee1: BigNumber
    createdAt: number
  }[],
  yesterday: number
) {
  const items24h = []

  for (const item of feesBetweenTxes) {
    if (item.createdAt < yesterday) {
      const lastItem = items24h[items24h.length - 1]
      const ratio =
        lastItem.createdAt > item.createdAt
          ? Math.floor(
              (1000 * (lastItem.createdAt - yesterday)) /
                (lastItem.createdAt - item.createdAt)
            )
          : 1000

      items24h[items24h.length - 1] = {
        fee0: lastItem.fee0.mul(ratio).div(1000),
        fee1: lastItem.fee1.mul(ratio).div(1000),
        createdAt: lastItem.createdAt
      }
      break
    } else {
      items24h.push(item)
    }
  }
  return items24h
}

export function useIV(assetId: number) {
  const feesUSD = useFee24h(assetId)
  const asset = useAsset(assetId)
  const price = useCachedPrice(assetId)

  if (asset.isSuccess) {
    const sqrtValue = toUnscaled(
      asset.data.sqrtAssetStatus.totalAmount
        .mul(price.sqrtPrice)
        .mul(2)
        .div(Q96),
      6
    )

    if (sqrtValue <= 0) {
      return 0
    }

    return Math.sqrt((8 * feesUSD * 365) / sqrtValue)
  }

  return 0
}

function useFeesBetweenTxes(assetId: number) {
  const interestGrowthTxs = useInterestGrowthTxs(assetId)
  const asset = useAsset(assetId)

  if (interestGrowthTxs && asset.isSuccess) {
    const sqrtAssetStatus = asset.data.sqrtAssetStatus

    const fee0 = sqrtAssetStatus.fee0Growth
      .sub(interestGrowthTxs[0].supplySqrtFee0)
      .mul(sqrtAssetStatus.totalAmount)
    const fee1 = sqrtAssetStatus.fee1Growth
      .sub(interestGrowthTxs[0].supplySqrtFee1)
      .mul(sqrtAssetStatus.totalAmount)
    const latest = {
      fee0,
      fee1,
      createdAt: getNow()
    }
    const feeTxsHistory = convertToBetweenFee(interestGrowthTxs)

    return [latest].concat(feeTxsHistory)
  }

  return null
}

function convertToBetweenFee(
  accumulatedDataSet: {
    supplySqrtFee0: BigNumber
    supplySqrtFee1: BigNumber
    createdAt: number
  }[]
) {
  return accumulatedDataSet.map((accDataSet, i) => {
    if (i === accumulatedDataSet.length - 1) {
      return {
        fee0: ZERO,
        fee1: ZERO,
        createdAt: 0
      }
    }
    return {
      fee0: accDataSet.supplySqrtFee0.sub(
        accumulatedDataSet[i + 1].supplySqrtFee0
      ),
      fee1: accDataSet.supplySqrtFee1.sub(
        accumulatedDataSet[i + 1].supplySqrtFee1
      ),
      createdAt: accDataSet.createdAt
    }
  })
}
