import { useWeb3React } from '@web3-react/core'
import type { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { SUPPORTED_CHAIN_IDS } from '../constants'

export function useChainId() {
  const { chainId } = useWeb3React<ethers.providers.Web3Provider>()

  return chainId
}

export function useIsSupportedChain() {
  const [supported, setSupported] = useState(true)
  const chainId = useChainId()

  useEffect(() => {
    if (chainId) {
      setSupported(SUPPORTED_CHAIN_IDS.includes(chainId))
    }
  }, [chainId])

  return supported
}
