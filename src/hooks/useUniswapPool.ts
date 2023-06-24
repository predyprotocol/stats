import { useQuery } from 'react-query'
import { useDeltaTimestamps } from '../utils/time'
import { useBlocksFromTimestamps } from './core/useBlockFromTimestamp'
import { usePrice } from './core/usePrice'
import { queryPoolDayData } from './core/pool'
import { toUnscaled } from '../utils/bn'
import { Q96 } from '../constants'

export function useUniswapPool(assetId: number) {
  const deltaTimestamps = useDeltaTimestamps()
  const blocks = useBlocksFromTimestamps(deltaTimestamps)
  const price = usePrice(assetId)

  return useQuery(
    ['uniswap_pool', assetId],
    async () => {
      if (!blocks.isSuccess) throw new Error('blocks not loaded')
      if (!price.isSuccess) throw new Error('price not loaded')

      const poolAddress = '0xC31E54c7a869B9FcBEcc14363CF510d1c41fa443'

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

      const liquidity = poolDayData.liquidity

      const tickLiquidityUSD =
        liquidity.mul(poolDayData.sqrtPrice).mul(2).div(Q96).toNumber() /
        1000000

      const iv = 2 * Math.sqrt((feesUSD * 365) / tickLiquidityUSD)

      return {
        tvlUSD,
        volumeUSD,
        feesUSD,
        iv,
        diffTvlUSD,
        diffVolumeUSD
      }
    },
    {
      enabled: blocks.isSuccess && price.isSuccess
    }
  )
}
