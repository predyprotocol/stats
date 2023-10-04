import { BigNumber, ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { useQuery } from 'react-query'
import { useIsSupportedChain } from '../network'
import { useAddresses } from './useAddress'
import { Controller__factory } from '../../typechain'
import { STALE_TIME, ZERO } from '../../constants'
import { PairScalers } from '../../utils/helpers/scaler'
import { Position } from '../../utils/helpers/position'
import { ASSET_INFOS } from '../../constants/assets'

interface PerpStatus {
  amount: BigNumber
  entryValue: BigNumber
  entryPrice: BigNumber
}

export interface PositionStatusResult {
  assetId: number
  sqrtStatus: PerpStatus
  perpStatus: PerpStatus
  stableAmount: BigNumber
  underlyingAmount: BigNumber
  position: Position
  delta: BigNumber
  fee: BigNumber
  lossThreshold: BigNumber
  liqPrice1: BigNumber
  liqPrice2: BigNumber
}

export interface VaultStatusResult {
  id: number
  isMainVault: boolean
  vaultValue: BigNumber
  margin: BigNumber
  available: BigNumber
  withdrawable: BigNumber
  minDeposit: BigNumber
  positionValue: BigNumber
  openPositionStatusResults: PositionStatusResult[]
}

export interface VaultStatusResults {
  mainVault: VaultStatusResult
  isolatedVaults: VaultStatusResult[]
}

export const decodeVaultStatus: (
  vaultStatus: any,
  isMainVault: boolean,
  chainId: number
) => VaultStatusResult = (
  vaultStatus: any,
  isMainVault: boolean,
  chainId: number
) => {
  const margin = vaultStatus[2]
  const available = vaultStatus[1].sub(vaultStatus[4])
  const withdrawable = available.lt(margin) ? available : margin

  return {
    id: vaultStatus[0].toNumber(),
    isMainVault,
    vaultValue: vaultStatus[1],
    margin,
    available,
    withdrawable,
    minDeposit: vaultStatus[4],
    positionValue: vaultStatus[3],
    openPositionStatusResults: vaultStatus[5].map((openPositionStatus: any) => {
      const assetId = openPositionStatus[0].toNumber()
      const scalers = new PairScalers(assetId, chainId)

      const perpAmount = openPositionStatus[1][4][0]
      const perpEntryValue = openPositionStatus[1][4][1]
      const perpEntryPrice = perpAmount.eq(0)
        ? ZERO
        : perpEntryValue.mul(scalers.underlyingScaler).div(perpAmount).abs()
      const sqrtAmount = openPositionStatus[1][5][0]
      const sqrtEntryValue = openPositionStatus[1][5][1]
      const sqrtEntryPrice = sqrtAmount.eq(0)
        ? ZERO
        : sqrtEntryValue.mul(scalers.squartScaler).div(sqrtAmount).div(2).abs()

      const stableAmount = openPositionStatus[1][6][0]
      const underlyingAmount = openPositionStatus[1][7][0]

      const position = new Position(
        perpEntryValue.add(sqrtEntryValue),
        sqrtAmount,
        perpAmount,
        scalers,
        BigNumber.from(ASSET_INFOS[chainId][assetId].riskRatio)
      )

      const delta = openPositionStatus[2]

      return {
        assetId,
        perpStatus: {
          amount: perpAmount,
          entryValue: perpEntryValue,
          entryPrice: perpEntryPrice
        },
        sqrtStatus: {
          amount: sqrtAmount,
          entryValue: sqrtEntryValue,
          entryPrice: sqrtEntryPrice
        },
        stableAmount,
        underlyingAmount,
        delta,
        position,
        fee: openPositionStatus[3],
        lossThreshold: position.calculateLossThreshold(margin),
        liqPrice1: position.calculateLiquidationPrice1(margin),
        liqPrice2: position.calculateLiquidationPrice2(margin)
      }
    })
  }
}

export function useUnrealizedFee(chainId: number, vaultId: number) {
  const { provider, account } = useWeb3React<ethers.providers.Web3Provider>()
  const supportedChain = useIsSupportedChain()
  const addresses = useAddresses(chainId)

  const unrealizedFeeQuery = useQuery(
    ['unrealized_fee', chainId, vaultId],

    async () => {
      if (!account) throw new Error('Account not set')
      if (!provider) throw new Error('provider not set')
      if (!addresses) throw new Error('addresses not set')

      const controller = Controller__factory.connect(
        addresses.Controller,
        provider
      )

      const result = await controller.callStatic.getVaultStatus(vaultId, {
        from: account
      })

      return result[5].map(openPositionStatus => ({
        assetId: openPositionStatus[0].toNumber(),
        unrealizedFee: openPositionStatus[3]
      }))
    },

    {
      enabled: !!account && supportedChain && !!provider && !!addresses,
      staleTime: STALE_TIME,
      refetchInterval: 15000
    }
  )

  return unrealizedFeeQuery
}
