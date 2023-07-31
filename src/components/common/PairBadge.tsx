import React, { ReactNode } from 'react'
import { ASSET_INFO, MARGIN_INFOS } from '../../constants/assets'

export const PairBadge = ({
  assetInfo,
  children,
  className
}: {
  assetInfo: ASSET_INFO
  children?: ReactNode
  className?: string
}) => {
  const pairGroup = MARGIN_INFOS[assetInfo.pairGroupId]

  return (
    <div
      className={
        'flex justify-center items-center space-x-1 ' + (className || '')
      }
    >
      <div className="flex justify-center items-center space-x-0">
        <img src={assetInfo.icon} width={24} className="rounded-full" />
        <img src={pairGroup.icon} width={24} />
      </div>
      <span className="text-base text-black">
        {assetInfo.name}/{pairGroup.name} {assetInfo.exTooltip ? '.ex' : ''}
      </span>
      <div className="rounded-lg bg-white3 text-sm p-1">{assetInfo.fee}%</div>
      {children}
    </div>
  )
}
