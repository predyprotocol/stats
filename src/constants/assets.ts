type ASSET_INFO = {
  name: string
  decimals: number
  fee: number
}

export const ASSET_INFOS: { [key: number]: ASSET_INFO } = {
  0: {
    name: 'USDC',
    decimals: 6,
    fee: 0
  },
  1: {
    name: 'ETH',
    decimals: 18,
    fee: 0.05
  },
  2: {
    name: 'ARB',
    decimals: 18,
    fee: 0.3
  }
}

type MARGIN_INFO = {
  name: string
  decimals: number
  rounder: number
}

export const MARGIN_INFOS: { [key: number]: MARGIN_INFO } = {
  1: {
    name: 'USDC',
    decimals: 6,
    rounder: 4
  },
  2: {
    name: 'ETH',
    decimals: 18,
    rounder: 13
  }
}
