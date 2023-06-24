export type Addresses = {
  Controller: string
  Reader: string
  GammaShortStrategy: string
  StrategyQuoter: string
  assets: {
    UnderlyingToken: string
    UniswapV3Pool: string
  }[]
  Multicall2: string
  QuoteToken: string
}

export const arbitrum = {
  Controller: '0x68a154fB3e8ff6e4DA10ECd54DEF25D9149DDBDE',
  Reader: '0xa3E95bA9f01B23b157a5B14113b454fA7cF67465',
  GammaShortStrategy: '0x01d6889A3aB743d9e2d6A10cB3aCf8757874cc5E',
  StrategyQuoter: '0xb8549302625839E9Cf8ACF8829BC9D4B8bbf0F7B',
  assets: [
    {
      UnderlyingToken: '0x0000000000000000000000000000000000000000',
      UniswapV3Pool: '0x0000000000000000000000000000000000000000'
    },
    {
      UnderlyingToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      UniswapV3Pool: '0x0000000000000000000000000000000000000000'
    },
    {
      UnderlyingToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      UniswapV3Pool: '0xC31E54c7a869B9FcBEcc14363CF510d1c41fa443'
    }
  ],
  Multicall2: '0x842eC2c7D803033Edf55E478F461FC547Bc54EB2',
  QuoteToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
}

export const goerliArbitrum = {
  Controller: '0xb99E91587E42C482AC08d5d4E0600706297C39b1',
  Reader: '0x126eAFC8033FD81A07145f70e41a7c1C4AdBC362',
  GammaShortStrategy: '0xeF5969DA9df608B6B7589Af00F0EF51B8Ee9ACEb',
  StrategyQuoter: '0x2eA651f8926c7C4B5240680Ed2d1330F9e5e93b8',
  assets: [
    {
      UnderlyingToken: '0x0000000000000000000000000000000000000000',
      UniswapV3Pool: '0x0000000000000000000000000000000000000000'
    },
    {
      UnderlyingToken: '0x163691b2153F4e18F3c3F556426b7f5C74a99FA4',
      UniswapV3Pool: '0xe506cCa8C784bF0911D6dF2A3A871B766a6D816E'
    },
    {
      UnderlyingToken: '0x603eFB95394c6cf5b6b29B1c813bd1Ee42A07714',
      UniswapV3Pool: '0x790795655ef5C836B86B30CDbf6279db66660aa8'
    }
  ],
  Multicall2: '0x108B25170319f38DbED14cA9716C54E5D1FF4623',
  QuoteToken: '0xE060e715B6D20b899A654687c445ed8BC35f9dFF'
}

export const NETWORKS: { [key: number]: Addresses } = {
  [421613]: goerliArbitrum,
  [42161]: arbitrum
}

export const UNI_ETH_USDC_POOL_ADDRESS = [
  '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8',
  '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640'
]
