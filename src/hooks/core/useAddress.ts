import { DEFAULT_CHAIN } from '../../constants'
import { NETWORKS } from '../../constants/addresses'
import { useChainId } from '../network'

export function useAddresses() {
  const chainId = useChainId()

  if (chainId) {
    return NETWORKS[chainId]
  }

  return undefined
}

export function useAddressesAnyway() {
  return useAddresses() || NETWORKS[DEFAULT_CHAIN]
}
