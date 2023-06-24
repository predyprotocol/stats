import { BigNumber } from 'ethers'

export const SUPPORTED_CHAIN_IDS = [42161, 421613]
export const DEFAULT_CHAIN = SUPPORTED_CHAIN_IDS[0]

export const NETWORK_PARAMS: { [key: number]: any } = {
  5: {
    chainId: 5,
    chainName: 'Goerli',
    nativeCurrency: {
      name: 'Goerli ETH',
      symbol: 'GoerliETH',
      decimals: 18
    },
    rpcUrls: ['https://goerli.infura.io/v3/'],
    blockExplorerUrls: ['https://goerli.etherscan.io']
  },
  42161: {
    chainId: 42161,
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'AETH',
      symbol: 'AETH',
      decimals: 18
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io']
  },
  421613: {
    chainId: 421613,
    chainName: 'Arbitrum Goerli',
    nativeCurrency: {
      name: 'AETH',
      symbol: 'AETH',
      decimals: 18
    },
    rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://testnet.arbiscan.io']
  }
}

export const SLIPPAGE_TOLERANCE_LOWER_MAP = [
  999500, // 0.1
  999001, // 0.2
  998503, // 0.3
  998005, // 0.4
  997509, // 0.5
  995037 // 1.0
]

export const SLIPPAGE_TOLERANCE_UPPER_MAP = [
  1000499, // 0.1
  1000999, // 0.2
  1001499, // 0.3
  1001998, // 0.4
  1002496, // 0.5
  1004987 // 1.0
]

export const SLIPPAGE_TOLERANCE_NETWORK_MAP: {
  [key: number]: { index: number; value: number }
} = {
  42161: {
    index: 2,
    value: 0.3
  },
  421613: {
    index: 5,
    value: 1
  }
}

export const ASSET_NAMES: { [key: number]: string } = {
  0: 'USDC',
  1: 'ETH',
  2: 'BTC'
}

export const ASSET_DECIMALS: { [key: number]: number } = {
  0: 6,
  1: 18,
  2: 18,
  3: 18
}

export const MARGIN = {
  DECIMALS: 6,
  SIGNIFICANT: 2
}

export const TOKEN_RESERVE_FACTOR = 8 // 8%
export const LPT_RESERVE_FACTOR = 4 // 4%

// slippage torelance is 5.0%
export const SLIPPAGE_TORELANCE = 500

// 12 * 240 = 2880 seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 4

export const UNDERLYING_ONE = BigNumber.from('1000000000000000000')
export const SQUART_ONE = BigNumber.from('1000000000000')

export const MARGIN_ONE = BigNumber.from('1000000')
export const ONE = BigNumber.from('1000000000000000000')
export const ZERO = BigNumber.from(0)

export const STALE_TIME = 5000
export const REFETCH_INTERVAL = 15000

export const Q96 = BigNumber.from(2).pow(96)
export const Q128 = BigNumber.from(2).pow(128)
