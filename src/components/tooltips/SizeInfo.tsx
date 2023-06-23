import React from 'react'
import InfoTooltip from '../common/InfoTooltip'

const SizeInfo = () => {
  return (
    <InfoTooltip placement="top-end">
      <p className="text-center">
        Size represents the number of Squart (√ETH) where 1 represents 100
        Squart (√ETH).
        <br />
        <br />
        <span className="text-red">
          Note that Size indicates the number of states after Trade.
        </span>
      </p>
    </InfoTooltip>
  )
}

export default SizeInfo
