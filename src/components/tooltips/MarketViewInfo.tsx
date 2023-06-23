import React from 'react'
import InfoTooltip from '../common/InfoTooltip'

const MarketViewInfo = () => {
  return (
    <InfoTooltip placement="top-end">
      <p className="text-center">
        Predy finance creates positions to maximize profit at the following
        price changes:
        <br />
        Down: -2.5
        <br />
        Stable: 0%
        <br />
        Up: +2.5
      </p>
    </InfoTooltip>
  )
}

export default MarketViewInfo
