/*
import { InjectedConnector } from '@web3-react/injected-connector'
import { SUPPORTED_CHAIN_IDS } from './constants'

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS
})
*/

import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'

export const [metaMask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }))