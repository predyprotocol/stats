const AssetPairs: { [key: string]: string } = {
  eth: 'ETH/USD'
}

export function getAssetPair(asset: string) {
  return AssetPairs[asset.toLowerCase()]
}
