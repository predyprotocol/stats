import { useQuery as useReactQuery } from 'react-query'
import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import {
  STRATEGY_POSITION_QUERY,
  StrategyPositionEntity
} from '../../queries/strategyPositionQuery'
import { ONE, STALE_TIME, ZERO } from '../../constants'
import { useERC20BalanceQuery } from '../balance'
import {
  ASSET_INFOS,
  MARGIN_INFOS,
  STRATEGY_INFOS
} from '../../constants/assets'
import { useStrategyVaultStatus } from './useStrategyVaultStatus'
import { toUnscaled } from '../../utils/bn'
import { PredyClient } from '../../utils/apollo-client'

type StrategyPosition = {
  entryValue: BigNumber
  strategyAmount: BigNumber
  entryPrice: BigNumber
}

function useStrategyPositionData(
  chainId: number,
  strategyId: number,
  account: string
) {
  const { data } = useQuery<StrategyPositionEntity>(STRATEGY_POSITION_QUERY, {
    fetchPolicy: 'cache-first',
    variables: {
      id: `${strategyId.toString()}-${account.toLowerCase()}`
    },
    pollInterval: 30000,
    client: PredyClient[chainId]
  })

  const strategyPosition: StrategyPosition | undefined = useMemo(() => {
    if (
      data &&
      data.strategyUserPosition &&
      Number(data.strategyUserPosition.strategyId) === strategyId
    ) {
      const position = data.strategyUserPosition
      const entryValue = BigNumber.from(position.entryValue)
      const strategyAmount = BigNumber.from(position.strategyAmount)

      return {
        entryValue,
        strategyAmount,
        entryPrice: strategyAmount.eq(0)
          ? ZERO
          : entryValue.mul(ONE).div(strategyAmount)
      }
    }
  }, [data, strategyId])

  return strategyPosition
}

export function useStrategyPosition(
  chainId: number,
  strategyId: number,
  account: string
) {
  const strategyPositionData = useStrategyPositionData(
    chainId,
    strategyId,
    account
  )
  const balance = useERC20BalanceQuery(
    chainId,
    account,
    STRATEGY_INFOS[chainId][strategyId].strategyTokenAddress
  )
  const strategyStatus = useStrategyVaultStatus(chainId, strategyId)

  return useReactQuery(
    ['st_position', chainId, strategyId, account],

    async () => {
      if (!balance.isSuccess) throw new Error('balance not set')
      if (!strategyPositionData) throw new Error('strategyPositionData not set')
      if (!strategyStatus.isSuccess) throw new Error('strategyStatus not set')

      const marginInfo =
        MARGIN_INFOS[chainId][
          ASSET_INFOS[chainId][STRATEGY_INFOS[chainId][strategyId].pairId]
            .pairGroupId
        ]

      const currentValue = !strategyStatus.data.totalSupply.eq(0)
        ? balance.data
            .mul(strategyStatus.data.vaultValue)
            .div(strategyStatus.data.totalSupply)
        : ZERO

      return {
        strategyInWallet: toUnscaled(balance.data, marginInfo.decimals),
        currentValue: toUnscaled(
          currentValue,
          marginInfo.decimals,
          marginInfo.fractionDigits
        ),
        entryValue: strategyPositionData.entryValue,
        strategyAmount: strategyPositionData.strategyAmount,
        price: toUnscaled(strategyPositionData.entryPrice, 18, 6),
        profitUnrealized: currentValue.gt(0)
          ? toUnscaled(
              currentValue.sub(strategyPositionData.entryValue),
              marginInfo.decimals,
              marginInfo.fractionDigits
            )
          : 0
      }
    },

    {
      enabled:
        balance.isSuccess && !!strategyPositionData && strategyStatus.isSuccess,
      staleTime: STALE_TIME,
      refetchInterval: 15000
    }
  )
}
