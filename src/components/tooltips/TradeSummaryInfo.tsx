import React from 'react'
import InfoTooltip from '../common/InfoTooltip'

const TradeSummaryInfo = () => {
  return (
    <InfoTooltip placement="top-end">
      <p className="text-center">
        What is displayed below is the quantity of ETH and √ETH Future contracts
        that will actually be acquired from now on to move to the position
        selected above.
      </p>
    </InfoTooltip>
  )
}

export default TradeSummaryInfo
