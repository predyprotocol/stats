import React from 'react'
import { PairBadge } from '../common/PairBadge'
import { useStrategyPosition } from '../../hooks/strategy/useStrategyPosition'
import {
  ASSET_INFOS,
  MARGIN_INFOS,
  STRATEGY_INFOS
} from '../../constants/assets'

export const StrategyPortfolioLite = ({
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
  const pairInfo = ASSET_INFOS[chainId][pairId]

  const strategyPosition = useStrategyPosition(chainId, strategyId, account)
  const marginInfo = MARGIN_INFOS[chainId][pairInfo.pairGroupId]

  if (
    strategyPosition.isSuccess &&
    strategyPosition.data.strategyInWallet > 0
  ) {
    return (
      <div className="text-right space-y-1">
        <div className="w-[240px] flex justify-start">
          <PairBadge chainId={chainId} assetInfo={pairInfo} />
        </div>

        <div className="flex justify-between items-center">
          <div>Quantity</div>
          <div className="w-36">
            <div className="w-40">{strategyPosition.data.strategyInWallet}</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>Current Value</div>
          <div className="w-36">
            {strategyPosition.data.currentValue} {marginInfo.name}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>Unrealized Profit</div>
          <div className="w-36">
            {strategyPosition.data.profitUnrealized} {marginInfo.name}
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
