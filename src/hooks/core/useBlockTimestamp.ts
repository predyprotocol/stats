import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useBlockNumber } from './blockNumber'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

export function useBlockTimestamp() {
  const { provider } = useWeb3React<ethers.providers.Web3Provider>()
  const blockNumber = useBlockNumber()
  const [timestamp, setTimestamp] = useState(0)

  const timestampQuery = useQuery(
    ['timestamp', blockNumber],
    async () => {
      if (!provider) throw new Error('provider not set')

      const block = await provider.getBlock('latest')

      return block.timestamp
    },
    {
      enabled: !!provider
    }
  )

  useEffect(() => {
    if (timestampQuery.isSuccess) {
      setTimestamp(timestampQuery.data)
    }
  }, [timestampQuery])

  return timestamp
}

export function useDeadline() {
  const blocktime = useBlockTimestamp()

  return useQuery(
    ['deadline', blocktime],
    async () => {
      return blocktime + 20 * 60 * 60
    },
    {
      enabled: blocktime > 0
    }
  )
}
