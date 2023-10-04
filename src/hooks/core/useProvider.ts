import { ethers } from 'ethers'

export function useProvider(chainId: number) {
  // TODO: support chainId
  const provider = new ethers.providers.JsonRpcProvider(
    'https://arb1.arbitrum.io/rpc	'
  )

  return provider
}
