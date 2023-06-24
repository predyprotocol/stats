import { BigNumber } from 'ethers'
import { ZERO } from '../../constants'

const UNISWAP_SUBGRAPH_ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-minimal'

export async function queryPoolDayData(
  poolAddress: string,
  block: number | undefined
) {
  const body = {
    operationName: 'pools',
    query: `query pools($address: Bytes!) {
        pools(
          where: {id: $address}
          ${block ? `block: {number: ${block}} ,` : ''}
          subgraphError: allow
        ) {
          feeTier
          feesUSD
          volumeUSD
          liquidity
          sqrtPrice
          tick
          totalValueLockedUSD
          volumeToken0
          volumeToken1
          totalValueLockedToken0
          totalValueLockedToken1
          token0 {
            decimals
            derivedETH
          }
          token1 {
            decimals
            derivedETH
          }
          totalValueLockedUSD
      }
    }`,
    variables: { address: poolAddress.toLowerCase() }
  }

  const res = await fetch(UNISWAP_SUBGRAPH_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(body)
  })

  const resBody = await res.json()

  if (resBody.data.pools.length === 0) {
    return {
      tick: 0,
      feeTier: 0,
      tvlUSD: 0,
      volumeUSD: 0,
      feesUSD: 0,
      liquidity: ZERO,
      sqrtPrice: ZERO,
      totalValueLockedUSD: 0,
      volumeToken0: 0,
      volumeToken1: 0,
      totalValueLockedToken0: 0,
      totalValueLockedToken1: 0,
      token0: {
        decimals: 0,
        derivedETH: 0
      },
      token1: {
        decimals: 0,
        derivedETH: 0
      }
    }
  }

  const poolDayData = resBody.data.pools[0]

  return {
    tick: Number(poolDayData.tick),
    feeTier: Number(poolDayData.feeTier),
    tvlUSD: Number(poolDayData.totalValueLockedUSD),
    volumeUSD: Number(poolDayData.volumeUSD),
    feesUSD: Number(poolDayData.feesUSD),
    liquidity: BigNumber.from(poolDayData.liquidity),
    sqrtPrice: BigNumber.from(poolDayData.sqrtPrice),
    totalValueLockedUSD: Number(poolDayData.totalValueLockedUSD),
    volumeToken0: Number(poolDayData.volumeToken0),
    volumeToken1: Number(poolDayData.volumeToken1),
    totalValueLockedToken0: Number(poolDayData.totalValueLockedToken0),
    totalValueLockedToken1: Number(poolDayData.totalValueLockedToken1),
    token0: {
      decimals: Number(poolDayData.token0.decimals),
      derivedETH: Number(poolDayData.token0.derivedETH)
    },
    token1: {
      decimals: Number(poolDayData.token0.decimals),
      derivedETH: Number(poolDayData.token1.derivedETH)
    }
  }
}
