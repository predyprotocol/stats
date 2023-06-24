import React from 'react'
import { useChainId } from '../hooks/network'

const NETWORK_NAMES: { [key: number]: string } = {
  1: 'Ethereum Mainnet',
  56: 'Binance Smart Chain Mainnet',
  137: 'Polygon Mainnet'
}
const UnsupportedNetwork = () => {
  const chainId = useChainId()

  return (
    <div className="h-[840px] flex justify-center items-center">
      {chainId && NETWORK_NAMES[chainId] ? (
        <div className="text-base">
          {NETWORK_NAMES[chainId]} is unsupported. Please use Arbitrum One or
          Arbitrum Goerli.
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default UnsupportedNetwork
