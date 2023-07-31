import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from '@apollo/client'

export const goerliArbitrum = {
  Predy: {
    http: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/predy-dev/predy-v5-arbitrum-goerli'
    })
  },
  Uniswap: {
    http: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/predy-dev/predy-v5-uni-arbitrum-goerli'
    })
  }
}

export const arbitrum = {
  Predy: {
    http: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/predy-dev/predy-v4-arbitrum'
    })
  },
  Uniswap: {
    http: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/predy-dev/predy-fee-arbitrum'
    })
  }
}

const predyArbitrumGoerli = new ApolloClient({
  link: goerliArbitrum.Predy.http,
  cache: new InMemoryCache()
})

export const predyArbitrum = new ApolloClient({
  link: arbitrum.Predy.http,
  cache: new InMemoryCache()
})

export const feeArbitrumGoerli = new ApolloClient({
  link: goerliArbitrum.Uniswap.http,
  cache: new InMemoryCache()
})

export const feeArbitrum = new ApolloClient({
  link: arbitrum.Uniswap.http,
  cache: new InMemoryCache()
})

export const uniswapArbitrum = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-minimal'
  }),
  cache: new InMemoryCache()
})

export const PredyClient: {
  [key: number]: ApolloClient<NormalizedCacheObject>
} = {
  42161: predyArbitrum,
  421613: predyArbitrumGoerli
}

export const UniswapClient: {
  [key: number]: ApolloClient<NormalizedCacheObject>
} = {
  42161: feeArbitrum,
  421613: feeArbitrumGoerli
}
