import ethIcon from '../assets/assets/eth.svg'
import arbIcon from '../assets/assets/arb.png'
import wbtcIcon from '../assets/assets/wbtc.svg'
import usdcIcon from '../assets/assets/usdc.svg'
import gyenIcon from '../assets/assets/gyen.png'
import lusdIcon from '../assets/assets/lusd.png'
import linkIcon from '../assets/assets/link.png'

export type ASSET_INFO = {
  id: number
  pairGroupId: number
  name: string
  icon: string
  decimals: number
  fractionDigits: number
  fee: number
  maxLeverage: number
  poolAddress: string
  isIsolated: boolean
  riskRatio: string
  lendingMinSize: number
  exTooltip?: boolean
}

export type MARGIN_INFO = {
  name: string
  tag: string
  icon: string
  decimals: number
  rounder: number
  pairs: number[]
  strategies: number[]
  tokenAddress: string
  lendingMinSize: number
  fractionDigits: number
  sizeToSquart: number
  minDepositAmountDecimals: number
}

type StrategyInfo = {
  id: number
  pairId: number
  name: string
  icon: string
  strategyTokenAddress: string
  squartPerSt: number
  isGammaShort: boolean
}

const ASSET_INFOS_ARBITRUM = {
  0: {
    id: 0,
    pairGroupId: 0,
    name: 'USDC',
    icon: usdcIcon,
    decimals: 6,
    fractionDigits: 2,
    fee: 0,
    maxLeverage: 6,
    poolAddress: '0xc31e54c7a869b9fcbecc14363cf510d1c41fa443',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 100
  },
  1: {
    id: 1,
    pairGroupId: 1,
    name: 'ETH',
    icon: ethIcon,
    decimals: 18,
    fractionDigits: 2,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0xc31e54c7a869b9fcbecc14363cf510d1c41fa443',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 1
  },
  2: {
    id: 2,
    pairGroupId: 1,
    name: 'ARB',
    icon: arbIcon,
    decimals: 18,
    fractionDigits: 3,
    fee: 0.3,
    maxLeverage: 6,
    poolAddress: '0x81c48d31365e6b526f6bbadc5c9aafd822134863',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 100
  },
  3: {
    id: 3,
    pairGroupId: 1,
    name: 'WBTC',
    icon: wbtcIcon,
    decimals: 8,
    fractionDigits: 1,
    fee: 0.3,
    maxLeverage: 6,
    poolAddress: '0xa62ad78825e3a55a77823f00fe0050f567c1e4ee',
    riskRatio: '109544511',
    isIsolated: true,
    lendingMinSize: 0.01
  },
  4: {
    id: 4,
    pairGroupId: 1,
    name: 'GYEN',
    icon: gyenIcon,
    decimals: 6,
    fractionDigits: 4,
    fee: 0.05,
    maxLeverage: 11,
    poolAddress: '0x54b7fe035ac57892d68cba53dbb5156ce79058d6',
    riskRatio: '104880884',
    isIsolated: true,
    lendingMinSize: 10000
  },
  5: {
    id: 5,
    pairGroupId: 1,
    name: 'LUSD',
    icon: lusdIcon,
    decimals: 18,
    fractionDigits: 3,
    fee: 0.05,
    maxLeverage: 11,
    poolAddress: '0x1557fdfda61f135baf1a1682eebaa086a0fcab6e',
    riskRatio: '104880884',
    isIsolated: true,
    lendingMinSize: 100
  },
  6: {
    id: 6,
    pairGroupId: 1,
    name: 'ETH',
    icon: ethIcon,
    decimals: 18,
    fractionDigits: 2,
    fee: 0.05,
    maxLeverage: 11,
    poolAddress: '0xc31e54c7a869b9fcbecc14363cf510d1c41fa443',
    riskRatio: '104880884',
    isIsolated: true,
    lendingMinSize: 1,
    exTooltip: true
  },
  7: {
    id: 7,
    pairGroupId: 2,
    name: 'ETH',
    icon: ethIcon,
    decimals: 18,
    fractionDigits: 2,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0xc6962004f452be9203591991d15f6b388e09e8d0',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 1
  },
  8: {
    id: 8,
    pairGroupId: 2,
    name: 'ARB',
    icon: arbIcon,
    decimals: 18,
    fractionDigits: 3,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0xb0f6ca40411360c03d41c5ffc5f179b8403cdcf8',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 100
  },
  9: {
    id: 9,
    pairGroupId: 2,
    name: 'LUSD',
    icon: lusdIcon,
    decimals: 18,
    fractionDigits: 3,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0x3d18c836be1674e8ecc6906224c3e871a1b3a13f',
    riskRatio: '104880884',
    isIsolated: true,
    lendingMinSize: 100
  },
  10: {
    id: 10,
    pairGroupId: 3,
    name: 'WBTC',
    icon: wbtcIcon,
    decimals: 8,
    fractionDigits: 3,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0x2f5e87c9312fa29aed5c179e456625d79015299c',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 0.01
  },
  11: {
    id: 11,
    pairGroupId: 3,
    name: 'ARB',
    icon: arbIcon,
    decimals: 18,
    fractionDigits: 6,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0xc6f780497a95e246eb9449f5e4770916dcd6396a',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 100
  },
  12: {
    id: 12,
    pairGroupId: 3,
    name: 'USDT',
    icon: arbIcon,
    decimals: 6,
    fractionDigits: 6,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0x641c00a822e8b671738d32a431a4fb6074e5c79d',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 100
  },
  13: {
    id: 13,
    pairGroupId: 3,
    name: 'LINK',
    icon: linkIcon,
    decimals: 18,
    fractionDigits: 5,
    fee: 0.3,
    maxLeverage: 6,
    poolAddress: '0x468b88941e7cc0b88c1869d68ab6b570bcef62ff',
    riskRatio: '109544511',
    isIsolated: true,
    lendingMinSize: 10
  },
  14: {
    id: 14,
    pairGroupId: 3,
    name: 'wstETH',
    icon: linkIcon,
    decimals: 18,
    fractionDigits: 5,
    fee: 0.01,
    maxLeverage: 6,
    poolAddress: '0x35218a1cbac5bbc3e57fd9bd38219d37571b3537',
    riskRatio: '109544511',
    isIsolated: true,
    lendingMinSize: 10
  }
}

const ASSET_INFOS_BASE = {
  1: {
    id: 1,
    pairGroupId: 1,
    name: 'ETH',
    icon: ethIcon,
    decimals: 18,
    fractionDigits: 2,
    fee: 0.05,
    maxLeverage: 6,
    poolAddress: '0x4c36388be6f416a29c8d8eee81c771ce6be14b18',
    riskRatio: '109544511',
    isIsolated: false,
    lendingMinSize: 1
  }
}

const MARGIN_INFO_ARBITRUM = {
  1: {
    name: 'USDCe',
    tag: 'usdce',
    icon: usdcIcon,
    decimals: 6,
    fractionDigits: 2,
    rounder: 4,
    pairs: [1, 6, 2, 4, 5],
    strategies: [1, 4, 2, 3, 11, 13],
    tokenAddress: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    lendingMinSize: 100,
    sizeToSquart: 100,
    minDepositAmountDecimals: 7
  },
  2: {
    name: 'USDC',
    tag: 'usdc',
    icon: usdcIcon,
    decimals: 6,
    fractionDigits: 2,
    rounder: 4,
    pairs: [7, 8, 9],
    strategies: [5, 6, 7],
    tokenAddress: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    lendingMinSize: 100,
    sizeToSquart: 100,
    minDepositAmountDecimals: 7
  },
  3: {
    name: 'ETH',
    tag: 'eth',
    icon: ethIcon,
    decimals: 18,
    fractionDigits: 5,
    rounder: 13,
    pairs: [10, 11, 12, 13],
    strategies: [8, 9],
    tokenAddress: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    lendingMinSize: 1,
    sizeToSquart: 1,
    minDepositAmountDecimals: 16
  }
}

const MARGIN_INFO_BASE = {
  1: {
    name: 'USDbC',
    tag: 'usdbc',
    icon: usdcIcon,
    decimals: 6,
    fractionDigits: 2,
    rounder: 4,
    pairs: [1],
    strategies: [1, 2],
    tokenAddress: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    lendingMinSize: 100,
    sizeToSquart: 100,
    minDepositAmountDecimals: 7
  }
}

export const ASSET_INFOS: {
  [key: number]: { [key: number]: ASSET_INFO }
} = {
  42161: ASSET_INFOS_ARBITRUM,
  8453: ASSET_INFOS_BASE
}

export const MARGIN_INFOS: { [key: number]: { [key: number]: MARGIN_INFO } } = {
  42161: MARGIN_INFO_ARBITRUM,
  8453: MARGIN_INFO_BASE
}

export const MARGIN_INFO_COUNTS: { [key: number]: number[] } = {
  42161: [1, 2, 3],
  8453: [1]
}

export const STRATEGY_INFO_ARBITRUM = {
  1: {
    id: 1,
    pairId: 1,
    name: 'ETH',
    icon: ethIcon,
    strategyTokenAddress: '0x5037Df4301489C96F17E3E2eBE55bFF909098043',
    squartPerSt: 1.8,
    isGammaShort: true
  },
  2: {
    id: 2,
    pairId: 2,
    name: 'ARB',
    icon: arbIcon,
    strategyTokenAddress: '0xBd0a8a71283c92123A3cAE4E7Cb71D410973A9e1',
    squartPerSt: 52,
    isGammaShort: true
  },
  3: {
    id: 3,
    pairId: 5,
    name: 'LUSD',
    icon: lusdIcon,
    strategyTokenAddress: '0xaA25788310eEf9E78e7D601EF727f19BE0944463',
    squartPerSt: 260,
    isGammaShort: true
  },
  4: {
    id: 4,
    pairId: 6,
    name: 'ETH',
    icon: ethIcon,
    strategyTokenAddress: '0xde2781A9eA08E75149EF5EdC9CF97d44F1c05a0c',
    squartPerSt: 2.0,
    isGammaShort: true
  },
  5: {
    id: 5,
    pairId: 7,
    name: 'ETH',
    icon: ethIcon,
    strategyTokenAddress: '0x7AaB67DAb3C313E9389810351603dBAF6cEeBdD9',
    squartPerSt: 1.8,
    isGammaShort: true
  },
  6: {
    id: 6,
    pairId: 8,
    name: 'ARB',
    icon: arbIcon,
    strategyTokenAddress: '0xE721B56a8145Dcf41c9E1D6b800235aAC10e1e4F',
    squartPerSt: 56,
    isGammaShort: true
  },
  7: {
    id: 7,
    pairId: 9,
    name: 'LUSD',
    icon: lusdIcon,
    strategyTokenAddress: '0xaaB46e008d84fB56E538547b6544aDC1353f3a8C',
    squartPerSt: 280,
    isGammaShort: true
  },
  8: {
    id: 8,
    pairId: 10,
    name: 'WBTC',
    icon: wbtcIcon,
    strategyTokenAddress: '0xCFe94f880be44186f44a5f5FE689B52766E5b81a',
    squartPerSt: 2.6,
    isGammaShort: true
  },
  9: {
    id: 9,
    pairId: 11,
    name: 'ARB',
    icon: arbIcon,
    strategyTokenAddress: '0xcBD056d29d9F56aeC06fa64A55405F7F848cC6e4',
    squartPerSt: 3000,
    isGammaShort: true
  },
  10: {
    id: 10,
    pairId: 2,
    name: 'ARB',
    icon: arbIcon,
    strategyTokenAddress: '0xCBf29259Cb640984f450E8dd2c178D80b01f77F3',
    squartPerSt: 65,
    isGammaShort: true
  },
  11: {
    id: 11,
    pairId: 1,
    name: 'ETH(Long)',
    icon: ethIcon,
    strategyTokenAddress: '0xaB921C57139E95c2B686c11E4d62838f593f061E',
    squartPerSt: 2,
    isGammaShort: false
  },
  12: {
    id: 12,
    pairId: 2,
    name: 'ARB(Long)',
    icon: arbIcon,
    strategyTokenAddress: '0xb836B2324d4a7569061e6d6A758AB4428f36aB92',
    squartPerSt: 62,
    isGammaShort: false
  },
  13: {
    id: 13,
    pairId: 6,
    name: 'ETH(Long)',
    icon: ethIcon,
    strategyTokenAddress: '0x090f0Ff8A2b1b0ce1a163179218f2E1C117E26D4',
    squartPerSt: 2,
    isGammaShort: false
  }
}

export const STRATEGY_INFO_BASE = {
  1: {
    id: 1,
    pairId: 1,
    name: 'ETH',
    icon: ethIcon,
    strategyTokenAddress: '0xceB3A12Af3A92d153c54516b6b4fB538Eb165E31',
    squartPerSt: 1.8,
    isGammaShort: true
  },
  2: {
    id: 2,
    pairId: 1,
    name: 'ETH',
    icon: ethIcon,
    strategyTokenAddress: '0x02685320a2C2d0F8f916c2B5aDdbd16e43831BBd',
    squartPerSt: 2,
    isGammaShort: false
  }
}

export const STRATEGY_INFOS: {
  [key: number]: { [key: number]: StrategyInfo }
} = {
  42161: STRATEGY_INFO_ARBITRUM,
  8453: STRATEGY_INFO_BASE
}
