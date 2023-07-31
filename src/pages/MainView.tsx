import React, { useState } from 'react'
import StatsChart from '../components/StatsChart'
import { PairSelector } from '../components/PairSelector'
import defiLlamaIcon from '../assets/defillama-dark.svg'
import duneIcon from '../assets/dune.svg'

const MainView = () => {
  const [pairId, setPairId] = useState(1)

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[1360px]">
          <div className="flex justify-end items-center space-x-0">
            <PairSelector
              pairId={pairId}
              pairGroupId={1}
              onSelectPairId={setPairId}
            />
            <div className="flex justify-between items-center space-x-8">
              <a
                href="https://dune.com/predy/predy-v5"
                target="_blank"
                rel="noreferrer"
              >
                <img src={duneIcon} width="90" />
              </a>
              <a
                href="https://defillama.com/protocol/predy-finance"
                target="_blank"
                rel="noreferrer"
              >
                <img src={defiLlamaIcon} width="90" />
              </a>
            </div>
          </div>
          <StatsChart pairId={pairId} />
        </div>
      </div>
    </>
  )
}

export default MainView
