import { NETWORKS } from '../../constants/addresses'

export function useAddresses(chainId: number) {
  return NETWORKS[chainId]
}
