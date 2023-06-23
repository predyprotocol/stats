export const ERRORS = {
  INSUFFICIENT_BALANCE: `Insufficient balance in your vault`,
  INSUFFICIENT_TOKEN: `Insufficient token supply in pool`,
  INSUFFICIENT_LIQUIDITY: `Insufficient liquidity supply in pool`,
  PAUSED: `Contract paused`,
  TX_TOO_OLD: `Tx too old`,
  TOO_MUCH_SLIPPAGE: `Too much slippage`,
  UNEXPECTED_ERROR: `Unexpected error`,
  USER_REJECTED: `User rejected transaction`,
  TOO_MANY_REQUESTS: `RPC endpoint received too many requests`,
  LESS_MARGIN: `Vault value should be greater than Min. Value`,
  SOFT_LIMIT: `Positions in the vault will exceed vault soft limit`,
  CONNECT_NETWORK: `Please connect wallet`,
  SUBVAULTS_ARE_LOADING_NOW: `Positions are being loaded now`,
  RANGE_MUST_BE_SELECTED: `Ranges must be selected`,
  VAULT_NOT_FOUND: `Please deposit margin`,
  REACH_LPT_NUMBER_LIMIT: `Reach the LPT number limit`
} as const
