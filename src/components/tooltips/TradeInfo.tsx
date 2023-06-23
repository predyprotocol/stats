import React from 'react'
import InfoTooltip from '../common/InfoTooltip'

const TradeInfo = ({ isTradeFirstTime }: { isTradeFirstTime: boolean }) => {
  return (
    <InfoTooltip placement="bottom-end">
      {isTradeFirstTime ? (
        <p>
          Predy Finance will create Long or Short Strangle from √ETH and ETH
          Perpetual Futures. More information is available at Summery.
        </p>
      ) : (
        <p>
          To Update Position, enter the position you want to take.
          <br />
          <span className="text-red">
            Note that the number you enter here indicates the state after Trade.
          </span>
        </p>
      )}
    </InfoTooltip>
  )
}

export default TradeInfo
