import React from 'react'
import { BasePopup } from './common/BasePopup'
import { PairBadge } from './common/PairBadge'
import InfoTooltip from './common/InfoTooltip'
import { ASSET_INFOS, MARGIN_INFOS } from '../constants/assets'
import { AiFillCaretDown } from 'react-icons/ai'

export const PairSelector = ({
  chainId,
  pairId,
  pairGroupId,
  onSelectPairId
}: {
  chainId: number
  pairId: number
  pairGroupId: number
  onSelectPairId: (pairId: number) => void
}) => {
  const pairGroup = MARGIN_INFOS[chainId][pairGroupId]

  const pairInfos = pairGroup.pairs.map(pairId => ASSET_INFOS[chainId][pairId])
  const assetInfo = ASSET_INFOS[chainId][pairId]

  return (
    <BasePopup
      titleContent={
        <PairBadge
          chainId={chainId}
          assetInfo={assetInfo}
          className="cursor-pointer"
        >
          <AiFillCaretDown />
        </PairBadge>
      }
    >
      <div className="w-[200px] py-4 flex flex-col space-y-1">
        {pairInfos.map(pairInfo => {
          return (
            <div
              key={pairInfo.id}
              className="px-4 py-1 flex justify-between cursor-pointer hover:bg-white5"
              onClick={() => {
                onSelectPairId(pairInfo.id)
              }}
            >
              <div className="flex justify-between">
                <div>
                  {pairInfo.name}/{pairGroup.name}
                  {pairInfo.exTooltip ? '.ex' : ''}
                </div>
                {pairInfo.exTooltip ? (
                  <InfoTooltip>
                    <p className="text-center">
                      This Perpetual contract is linked with a Lending Pool that
                      has a higher Borrow Rate set. It is an experimental
                      attempt to measure the supply elasticity of lending in
                      relation to the Borrow Rate.
                    </p>
                  </InfoTooltip>
                ) : (
                  <></>
                )}
              </div>
              <div>{pairInfo.fee}%</div>
            </div>
          )
        })}
      </div>
    </BasePopup>
  )
}
