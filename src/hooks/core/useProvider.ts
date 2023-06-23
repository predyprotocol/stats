import { ethers } from "ethers";

export function useProvider() {
  const provider = new ethers.providers.JsonRpcProvider('https://arb1.arbitrum.io/rpc	')

  return provider
}
