import { BigNumber } from 'ethers'
import { useQuery } from 'react-query'
import { useIsSupportedChain } from '../network'
import { useAddresses } from '../core/useAddress'
import {
  Controller__factory,
  GammaShortStrategy__factory
} from '../../typechain'
import { STALE_TIME, ZERO } from '../../constants'
import { VaultStatusResult, decodeVaultStatus } from '../core/useVaultStatus'
import { useProvider } from '../core/useProvider'

export interface StrategyVaultStatusResult {
  id: number
  totalSupply: BigNumber
  vaultValue: BigNumber
  minDeposit: BigNumber
  price: BigNumber
  status: VaultStatusResult
}

export function useStrategyVaultStatus(chainId: number, strategyId: number) {
  const provider = useProvider(chainId)
  const supportedChain = useIsSupportedChain()
  const addresses = useAddresses(chainId)

  const vaultStatusQuery = useQuery<StrategyVaultStatusResult>(
    ['st_vault_status', chainId, strategyId],

    async () => {
      if (!provider) throw new Error('provider not set')
      if (!addresses) throw new Error('addresses not set')

      const strategy = GammaShortStrategy__factory.connect(
        addresses.GammaShortStrategy,
        provider
      )

      const controller = Controller__factory.connect(
        addresses.Controller,
        provider
      )

      const strategyStatus = await strategy.strategies(strategyId)
      const vaultId = strategyStatus[3]

      const totalSupply = await strategy.getTotalSupply(strategyId)

      const vaultStatus = await controller.callStatic.getVaultStatus(vaultId, {
        from: addresses.GammaShortStrategy
      })

      const vaultValue = vaultStatus[1]

      return {
        id: vaultId.toNumber(),
        totalSupply,
        vaultValue,
        minDeposit: vaultStatus[4],
        price: totalSupply.eq(0)
          ? ZERO
          : vaultValue.mul('1000000').div(totalSupply),
        status: decodeVaultStatus(vaultStatus, false, chainId)
      }
    },

    {
      enabled: supportedChain && !!provider && !!addresses,
      staleTime: STALE_TIME,
      refetchInterval: 15000
    }
  )

  return vaultStatusQuery
}
