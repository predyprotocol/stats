import { useQuery } from 'react-query'
import { useDeltaTimestamps } from '../utils/time'
import { useBlocksFromTimestamps } from './core/useBlockFromTimestamp'
import { usePrice } from './core/usePrice'
import { queryPoolDayData } from './core/pool'
import { toUnscaled } from '../utils/bn'
import { useAsset } from './core/useAsset'
import { useIV } from './core/useIV'

export function useUniswapPool(chainId: number, assetId: number) {
  const deltaTimestamps = useDeltaTimestamps()
  const blocks = useBlocksFromTimestamps(deltaTimestamps)
  const asset = useAsset(chainId, assetId)
  const price = usePrice(chainId, 1)
  const iv = useIV(chainId, assetId)

  return useQuery(
    ['uniswap_pool', assetId],
    async () => {
      if (!blocks.isSuccess) throw new Error('blocks not loaded')
      if (!asset.isSuccess) throw new Error('asset not loaded')
      if (!price.isSuccess) throw new Error('price not loaded')
      if (!iv.isSuccess) throw new Error('iv not loaded')

      const poolAddress = asset.data.sqrtAssetStatus.uniswapPool

      const poolDayData = await queryPoolDayData(poolAddress, undefined)
      const poolDayData24 = await queryPoolDayData(
        poolAddress,
        blocks.data[0].number
      )
      const poolDayData48 = await queryPoolDayData(
        poolAddress,
        blocks.data[1].number
      )

      const yesterdayTvlUSD = poolDayData24.tvlUSD

      const volumeUSD = poolDayData.volumeUSD - poolDayData24.volumeUSD
      const yesterdayVolumeUSD =
        poolDayData24.volumeUSD - poolDayData48.volumeUSD

      const feesUSD = poolDayData.feesUSD - poolDayData24.feesUSD

      const tvlAdjust0 =
        (poolDayData.volumeToken0 * poolDayData.feeTier) / 1000000 / 2
      const tvlAdjust1 =
        (poolDayData.volumeToken1 * poolDayData.feeTier) / 1000000 / 2

      const tvlToken0 = poolDayData.totalValueLockedToken0 - tvlAdjust0
      const tvlToken1 = poolDayData.totalValueLockedToken1 - tvlAdjust1

      const ethPrice = toUnscaled(price.data.price, 6)

      const tvlUSD =
        (tvlToken0 * poolDayData.token0.derivedETH +
          tvlToken1 * poolDayData.token1.derivedETH) *
        ethPrice

      const diffTvlUSD =
        (poolDayData.tvlUSD - yesterdayTvlUSD) / yesterdayTvlUSD
      const diffVolumeUSD =
        (volumeUSD - yesterdayVolumeUSD) / yesterdayVolumeUSD

      return {
        tvlUSD,
        volumeUSD,
        feesUSD,
        iv: iv.data,
        diffTvlUSD,
        diffVolumeUSD
      }
    },
    {
      enabled:
        blocks.isSuccess && asset.isSuccess && price.isSuccess && iv.isSuccess
    }
  )
}
