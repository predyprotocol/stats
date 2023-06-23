import { DEFAULT_CHAIN, NETWORK_PARAMS } from '../constants'

export async function switchNetwork() {
  const ethereum = (window as any).ethereum
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + DEFAULT_CHAIN.toString(16) }]
    })
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [NETWORK_PARAMS[DEFAULT_CHAIN]]
        })
      } catch (addError) {
        // handle "add" error
        console.warn(addError)
      }
    } else {
      console.warn(switchError)
    }
  }
}
