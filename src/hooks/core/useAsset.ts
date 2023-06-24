import { BigNumber, ethers } from 'ethers'
import { useQuery } from 'react-query'
import { Controller, Controller__factory } from '../../typechain'
import { ONE, ZERO } from '../../constants'
import { IRMParams } from '../../utils/irm'
import { useProvider } from './useProvider'

export type SqrtPerpAssetStatus = {
  uniswapPool: string
  tickLower: number
  tickUpper: number
  totalAmount: BigNumber
  borrowedAmount: BigNumber
  supplyPremiumGrowth: BigNumber
  borrowPremiumGrowth: BigNumber
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
  totalCompoundBorrowed: BigNumber
  totalNormalDeposited: BigNumber
  totalNormalBorrowed: BigNumber
  assetScaler: BigNumber
  debtScaler: BigNumber
  assetGrowth: BigNumber
  debtGrowth: BigNumber
}

export type AssetRiskParams = {
  riskRatio: BigNumber
  rangeSize: number
  rebalanceThreshold: number
}

export type Asset = {
  id: BigNumber
  token: string
  supplyTokenAddress: string
  riskParams: AssetRiskParams
  tokenStatus: ScaledAssetStatus
  sqrtAssetStatus: SqrtPerpAssetStatus
  isMarginZero: boolean
  irmParams: IRMParams
  premiumParams: IRMParams
  lastUpdateTimestamp: BigNumber
  accumulatedProtocolRevenue: BigNumber
}

export function useAsset(assetId: number) {
  const provider = useProvider()

  return useQuery<Asset>(
    ['asset', assetId],

    async () => {
      if (!provider) throw new Error('provider not set')

      const contract = Controller__factory.connect(
        '0x68a154fB3e8ff6e4DA10ECd54DEF25D9149DDBDE',
        provider
      )

      return queryAssetStatus(contract, assetId, ethers.constants.AddressZero)
    },

    {
      enabled: !!provider,
      refetchInterval: 15000
    }
  )
}

async function queryAssetStatus(
  contract: Controller,
  assetId: number,
  account: string
) {
  const asset = await contract.callStatic.getLatestAssetStatus(assetId, {
    from: account
  })

  return {
    id: asset[0],
    token: asset[1],
    supplyTokenAddress: asset[2],
    riskParams: {
      riskRatio: asset[3][0],
      rangeSize: asset[3][1],
      rebalanceThreshold: asset[3][2]
    },
    tokenStatus: {
      totalCompoundDeposited: asset[4][0],
      totalCompoundBorrowed: asset[4][1],
      totalNormalDeposited: asset[4][2],
      totalNormalBorrowed: asset[4][3],
      assetScaler: asset[4][4],
      debtScaler: asset[4][5],
      assetGrowth: asset[4][6],
      debtGrowth: asset[4][7]
    },
    sqrtAssetStatus: {
      uniswapPool: asset[5][0],
      tickLower: asset[5][1],
      tickUpper: asset[5][2],
      totalAmount: asset[5][3],
      borrowedAmount: asset[5][4],
      supplyPremiumGrowth: asset[5][5],
      borrowPremiumGrowth: asset[5][6],
      fee0Growth: asset[5][7],
      fee1Growth: asset[5][8],
      rebalancePositionUnderlying: {
        positionAmount: asset[5][9][0],
        lastFeeGrowth: asset[5][9][1]
      },
      rebalancePositionStable: {
        positionAmount: asset[5][10][0],
        lastFeeGrowth: asset[5][10][1]
      },
      rebalanceFeeGrowthUnderlying: asset[5][11],
      rebalanceFeeGrowthStable: asset[5][12]
    },
    isMarginZero: asset[6],
    irmParams: {
      baseRate: asset[7][0],
      kinkRate: asset[7][1],
      slope1: asset[7][2],
      slope2: asset[7][3]
    },
    premiumParams: {
      baseRate: asset[8][0],
      kinkRate: asset[8][1],
      slope1: asset[8][2],
      slope2: asset[8][3]
    },
    lastUpdateTimestamp: asset[9],
    accumulatedProtocolRevenue: asset[10]
  }
}

export type AssetUtilizations = {
  supply: BigNumber
  borrow: BigNumber
  utilization: BigNumber
  sqrt: {
    supply: BigNumber
    borrow: BigNumber
    utilization: BigNumber
  }
}

export function useUtilizationRatio(assetId: number) {
  const asset = useAsset(assetId)

  return useQuery<AssetUtilizations>(
    ['ur', assetId],

    async () => {
      if (!asset.isSuccess) throw new Error('asset not set')

      const tokenStatus = asset.data.tokenStatus

      const supply = tokenStatus.totalCompoundDeposited
        .mul(tokenStatus.assetScaler)
        .div(ONE)
        .add(tokenStatus.totalNormalDeposited)
      const borrow = tokenStatus.totalCompoundBorrowed
        .mul(tokenStatus.debtScaler)
        .div(ONE)
        .add(tokenStatus.totalNormalBorrowed)

      const sqrtAssetStatus = asset.data.sqrtAssetStatus

      return {
        supply,
        borrow,
        utilization: supply.eq(0) ? ZERO : borrow.mul(ONE).div(supply),
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
      enabled: asset.isSuccess
    }
  )
}
