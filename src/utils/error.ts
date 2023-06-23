import { ERRORS } from '../constants/messages'

const ErrorCodeMap: { [key: string]: string } = {
  P5: ERRORS.PAUSED,
  T1: ERRORS.TX_TOO_OLD,
  T2: ERRORS.TOO_MUCH_SLIPPAGE,
  S0: ERRORS.INSUFFICIENT_TOKEN,
  P1: ERRORS.INSUFFICIENT_LIQUIDITY,
  TLU: ERRORS.INSUFFICIENT_LIQUIDITY,
  ST: ERRORS.INSUFFICIENT_TOKEN,
  NS: ERRORS.LESS_MARGIN,
  V1: ERRORS.VAULT_NOT_FOUND,
  'Exceeds max num of LPTs': ERRORS.REACH_LPT_NUMBER_LIMIT,
  'user rejected transaction': ERRORS.USER_REJECTED,
  '429': ERRORS.TOO_MANY_REQUESTS,
  'not loaded': ''
}

export function reasonToErrorMessage(reason: string) {
  const errorCode = Object.keys(ErrorCodeMap).find(
    errorCode => reason.indexOf(errorCode) >= 0
  )

  if (errorCode === undefined) {
    return ERRORS.UNEXPECTED_ERROR
  }

  return ErrorCodeMap[errorCode]
}
