import { BigNumber, ethers } from 'ethers'
import { useQuery } from 'react-query'
import { Controller, Controller__factory } from '../../typechain'
import { useChainId } from '../network'
import { ONE, ZERO } from '../../constants'
import { IRMParams } from '../../utils/irm'
import { useProvider } from './useProvider'

export type SqrtPerpAssetStatus = {
  uniswapPool: string
  tickLower: number
  tickUpper: number
  numRebalance: BigNumber
  totalAmount: BigNumber
  borrowedAmount: BigNumber
  lastRebalanceTotalSquartAmount: BigNumber
  lastFee0Growth: BigNumber
  lastFee1Growth: BigNumber
  borrowPremium0Growth: BigNumber
  borrowPremium1Growth: BigNumber
  fee0Growth: BigNumber
  fee1Growth: BigNumber
  rebalancePositionUnderlying: ScaledAssetUserStatus
  rebalancePositionStable: ScaledAssetUserStatus
  rebalanceFeeGrowthUnderlying: BigNumber
  rebalanceFeeGrowthStable: BigNumber
}

export type ScaledAssetUserStatus = {
  positionAmount: BigNumber
  lastFeeGrowth: BigNumber
}

export type ScaledAssetStatus = {
  totalCompoundDeposited: BigNumber
  totalNormalDeposited: BigNumber
  totalNormalBorrowed: BigNumber
  assetScaler: BigNumber
  assetGrowth: BigNumber
  debtGrowth: BigNumber
}

export type AssetRiskParams = {
  riskRatio: BigNumber
  rangeSize: number
  rebalanceThreshold: number
}

export type AssetPool = {
  token: string
  supplyTokenAddress: string
  tokenStatus: ScaledAssetStatus
  irmParams: IRMParams
}

export type PairStatus = {
  id: BigNumber
  pairGroupId: number
  stablePool: AssetPool
  underlyingPool: AssetPool
  riskParams: AssetRiskParams
  sqrtAssetStatus: SqrtPerpAssetStatus
  isMarginZero: boolean
  isIsolatedMode: boolean
  lastUpdateTimestamp: BigNumber
}
export type Asset = PairStatus

export function useAsset(assetId: number) {
  const provider = useProvider()
  const chainId = useChainId()

  return useQuery<Asset>(
    ['asset', chainId, assetId],

    async () => {
      if (!provider) throw new Error('provider not set')

      const contract = Controller__factory.connect(
        '0x06a61E55d4d4659b1A23C0F20AEdfc013C489829',
        provider
      )

      return await queryAssetStatus(contract, assetId)
    },

    {
      enabled: !!provider,
      refetchInterval: 15000
    }
  )
}

async function queryAssetStatus(
  contract: Controller,
  assetId: number
) {
  const asset = await contract.callStatic.getLatestAssetStatus(assetId, {
    from: ethers.constants.AddressZero
  })

  return {
    id: asset[0],
    pairGroupId: asset[1].toNumber(),
    stablePool: {
      token: asset[2][0],
      supplyTokenAddress: asset[2][1],
      tokenStatus: {
        totalCompoundDeposited: asset[2][2][0],
        totalNormalDeposited: asset[2][2][1],
        totalNormalBorrowed: asset[2][2][2],
        assetScaler: asset[2][2][3],
        assetGrowth: asset[2][2][4],
        debtGrowth: asset[2][2][5]
      },
      irmParams: {
        baseRate: asset[2][3][0],
        kinkRate: asset[2][3][1],
        slope1: asset[2][3][2],
        slope2: asset[2][3][3]
      }
    },
    underlyingPool: {
      token: asset[3][0],
      supplyTokenAddress: asset[3][1],
      tokenStatus: {
        totalCompoundDeposited: asset[3][2][0],
        totalNormalDeposited: asset[3][2][1],
        totalNormalBorrowed: asset[3][2][2],
        assetScaler: asset[3][2][3],
        assetGrowth: asset[3][2][4],
        debtGrowth: asset[3][2][5]
      },
      irmParams: {
        baseRate: asset[3][3][0],
        kinkRate: asset[3][3][1],
        slope1: asset[3][3][2],
        slope2: asset[3][3][3]
      }
    },
    riskParams: {
      riskRatio: asset[4][0],
      rangeSize: asset[4][1],
      rebalanceThreshold: asset[4][2]
    },
    sqrtAssetStatus: {
      uniswapPool: asset[5][0],
      tickLower: asset[5][1],
      tickUpper: asset[5][2],
      numRebalance: asset[5][3],
      totalAmount: asset[5][4],
      borrowedAmount: asset[5][5],
      lastRebalanceTotalSquartAmount: asset[5][6],
      lastFee0Growth: asset[5][7],
      lastFee1Growth: asset[5][8],
      borrowPremium0Growth: asset[5][9],
      borrowPremium1Growth: asset[5][10],
      fee0Growth: asset[5][11],
      fee1Growth: asset[5][12],
      rebalancePositionUnderlying: {
        positionAmount: asset[5][13][0],
        lastFeeGrowth: asset[5][13][1]
      },
      rebalancePositionStable: {
        positionAmount: asset[5][14][0],
        lastFeeGrowth: asset[5][14][1]
      },
      rebalanceFeeGrowthUnderlying: asset[5][15],
      rebalanceFeeGrowthStable: asset[5][16]
    },
    isMarginZero: asset[6],
    isIsolatedMode: asset[7],
    lastUpdateTimestamp: asset[8]
  }
}

export type AssetUtilizations = {
  stable: {
    supply: BigNumber
    borrow: BigNumber
    utilization: BigNumber
  }
  underlying: {
    supply: BigNumber
    borrow: BigNumber
    utilization: BigNumber
  }
  sqrt: {
    supply: BigNumber
    borrow: BigNumber
    utilization: BigNumber
  }
}

export function useUtilizationRatio(pairId: number) {
  const pair = useAsset(pairId)
  const chainId = useChainId()

  return useQuery<AssetUtilizations>(
    ['ur', chainId, pairId],

    async () => {
      if (!pair.isSuccess) throw new Error('asset not set')

      const stableTokenStatus = pair.data.stablePool.tokenStatus
      const underlyingTokenStatus = pair.data.underlyingPool.tokenStatus

      const stableSupply = stableTokenStatus.totalCompoundDeposited
        .mul(stableTokenStatus.assetScaler)
        .div(ONE)
        .add(stableTokenStatus.totalNormalDeposited)
      const stableBorrow = stableTokenStatus.totalNormalBorrowed

      const underlyingSupply = underlyingTokenStatus.totalCompoundDeposited
        .mul(underlyingTokenStatus.assetScaler)
        .div(ONE)
        .add(underlyingTokenStatus.totalNormalDeposited)
      const underlyingBorrow = underlyingTokenStatus.totalNormalBorrowed

      const sqrtAssetStatus = pair.data.sqrtAssetStatus

      return {
        stable: {
          supply: stableSupply,
          borrow: stableBorrow,
          utilization: stableSupply.eq(0)
            ? ZERO
            : stableBorrow.mul(ONE).div(stableSupply)
        },
        underlying: {
          supply: underlyingSupply,
          borrow: underlyingBorrow,
          utilization: underlyingSupply.eq(0)
            ? ZERO
            : underlyingBorrow.mul(ONE).div(underlyingSupply)
        },
        sqrt: {
          supply: sqrtAssetStatus.totalAmount,
          borrow: sqrtAssetStatus.borrowedAmount,
          utilization: sqrtAssetStatus.totalAmount.eq(0)
            ? ZERO
            : sqrtAssetStatus.borrowedAmount
              .mul(ONE)
              .div(sqrtAssetStatus.totalAmount)
        }
      }
    },

    {
      enabled: pair.isSuccess && !!chainId
    }
  )
}
