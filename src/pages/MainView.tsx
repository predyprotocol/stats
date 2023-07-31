import React, { useState } from 'react'
import StatsChart from '../components/StatsChart'
import { PairSelector } from '../components/PairSelector'

const MainView = () => {
  const [pairId, setPairId] = useState(1)


  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[1360px]">
          <div className='mr-6 flex justify-end'>
            <PairSelector pairId={pairId} pairGroupId={1} onSelectPairId={setPairId} />
          </div>
          <StatsChart pairId={pairId} />
        </div>
      </div>
    </>
  )
}

export default MainView
