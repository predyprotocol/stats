import React from 'react'
import { useRoute } from 'wouter'
import { useStrategyPosition } from '../hooks/strategy/useStrategyPosition'
import { DEFAULT_CHAIN } from '../constants'
import { ethers } from 'ethers'
import { toUnscaled } from '../utils/bn'

const ProfitText = ({ profit }: { profit: number }) => {
  return (
    <>
      {profit >= 0 ? (
        <span className="text-green">+{profit}</span>
      ) : (
        <span className="text-red">{profit}</span>
      )}
    </>
  )
}

const AccountView = () => {
  const route = useRoute('/v5/account/:chain/:account')
  const account = route[1] ? route[1].account : ethers.constants.AddressZero

  const position = useStrategyPosition(DEFAULT_CHAIN, 1, account)

  return (
    <>
      <div className="m-auto w-[640px] mt-20 text-black space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <div>Address</div>
          <div>{account}</div>
        </div>
        {position.isSuccess ? (
          <>
            <div className="flex justify-between items-center space-x-4">
              <div>Price</div>
              <div>{position.data.price} USDC.e</div>
            </div>

            <div className="flex justify-between items-center space-x-4">
              <div>Current Value</div>
              <div>{position.data.currentValue} USDC.e</div>
            </div>

            <div className="flex justify-between items-center space-x-4">
              <div>Entry Value</div>
              <div>{toUnscaled(position.data.entryValue, 6)} USDC.e</div>
            </div>

            <div className="flex justify-between items-center space-x-4">
              <div>Unrealized PnL</div>
              <div>
                <ProfitText profit={position.data.profitUnrealized} /> USDC.e
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default AccountView
