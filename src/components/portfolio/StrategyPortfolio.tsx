import React from 'react'
import { PairBadge } from '../common/PairBadge'
import { useStrategyPosition } from '../../hooks/strategy/useStrategyPosition'
import {
  ASSET_INFOS,
  MARGIN_INFOS,
  STRATEGY_INFOS
} from '../../constants/assets'

export const StrategyPortfolio = ({
  chainId,
  strategyId,
  account
}: {
  chainId: number
  strategyId: number
  account: string
}) => {
  const strategyInfo = STRATEGY_INFOS[chainId][strategyId]
  const pairId = strategyInfo.pairId

  const strategyPosition = useStrategyPosition(chainId, strategyId, account)
  const pairInfo = ASSET_INFOS[chainId][pairId]
  const marginInfo = MARGIN_INFOS[chainId][pairInfo.pairGroupId]

  if (
    strategyPosition.isSuccess &&
    strategyPosition.data.strategyInWallet > 0
  ) {
    return (
      <div className="flex justify-between justify-items-start items-center text-left">
        <div className="w-[240px] flex justify-start">
          <PairBadge chainId={chainId} assetInfo={pairInfo} />
        </div>
        <div className="w-40">{strategyPosition.data.strategyInWallet}</div>
        <div className="w-40">
          {strategyPosition.data.currentValue} {marginInfo.name}
        </div>
        <div className="w-40">
          {strategyPosition.data.profitUnrealized} {marginInfo.name}
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
