import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { debounce } from '@wagmi/core/internal'

export function useBlockNumber() {
  const { provider } = useWeb3React<ethers.providers.Web3Provider>()
  const [blockNumber, setBlockNumber] = useState(0)

  useEffect(() => {
    const update = debounce((bn: number) => {
      setBlockNumber(bn)
    }, 1)

    if (provider) {
      provider.on('block', update)

      return () => {
        provider.off('block', update)
      }
    }
  }, [provider, setBlockNumber])

  return blockNumber
}
