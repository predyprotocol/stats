import React from 'react'
import { useRoute } from 'wouter'
import { DEFAULT_CHAIN } from '../constants'
import { ethers } from 'ethers'
import { StrategyPortfolio } from '../components/portfolio/StrategyPortfolio'
import { StrategyPortfolioLite } from '../components/portfolio/StrategyPortfolioLite'

const AccountView = () => {
  const route = useRoute('/v5/account/:chain/:account')
  const account = route[1] ? route[1].account : ethers.constants.AddressZero

  const strategyIds = [1, 4, 3]

  return (
    <>
      <div className="m-auto max-w-7xl mt-20 text-black p-6 space-y-2">
        <div className="flex justify-between items-center space-x-4">
          <div>Address</div>
          <div>{account}</div>
        </div>

        <hr />

        <div className="hidden md:block w-[880px] space-y-2 my-6">
          <div className="text-base">Strategy</div>
          <div className="flex justify-between justify-items-start items-center text-left">
            <div className="w-[240px]">Symbol</div>
            <div className="w-40">Quantity</div>
            <div className="w-40">Current Value</div>
            <div className="w-40">Unrealized Profit</div>
          </div>
          {strategyIds.map(strategyId => (
            <StrategyPortfolio
              key={strategyId}
              chainId={DEFAULT_CHAIN}
              strategyId={strategyId}
              account={account}
            />
          ))}
        </div>

        <div className="block md:hidden w-full space-y-2 my-6">
          <div className="text-base">Strategy</div>

          {strategyIds.map(strategyId => {
            return (
              <StrategyPortfolioLite
                key={strategyId}
                chainId={DEFAULT_CHAIN}
                strategyId={strategyId}
                account={account}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AccountView
