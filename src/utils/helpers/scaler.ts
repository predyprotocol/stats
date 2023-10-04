import { BigNumber } from 'ethers'
import { ASSET_INFOS, MARGIN_INFOS } from '../../constants/assets'
import { toUnscaled } from '../bn'
import { ZERO } from '../../constants'
import { toPriceString } from '../number'

type ToStringOption = {
  showFull: boolean
  symbolRequired: boolean
}

export class PairScalers {
  marginDecimals: number
  squartDecimals: number
  underlyingDecimals: number

  marginScaler: BigNumber
  squartScaler: BigNumber
  underlyingScaler: BigNumber

  marginFractionDecimals: number
  squartFractionDecimals: number
  underlyingFractionDecimals: number

  pairId: number
  pairGroupId: number

  chainId: number

  constructor(pairId: number, chainId: number) {
    this.pairId = pairId
    this.pairGroupId = ASSET_INFOS[chainId][pairId].pairGroupId
    this.chainId = chainId

    this.marginDecimals = MARGIN_INFOS[chainId][this.pairGroupId].decimals
    this.underlyingDecimals = ASSET_INFOS[chainId][pairId].decimals
    this.squartDecimals = (this.marginDecimals + this.underlyingDecimals) / 2
    this.marginScaler = BigNumber.from(10).pow(this.marginDecimals)
    this.squartScaler = BigNumber.from(10).pow(this.squartDecimals)
    this.underlyingScaler = BigNumber.from(10).pow(this.underlyingDecimals)

    this.marginFractionDecimals =
      MARGIN_INFOS[chainId][this.pairGroupId].fractionDigits
    this.underlyingFractionDecimals =
      ASSET_INFOS[chainId][pairId].fractionDigits
    this.squartFractionDecimals = this.marginFractionDecimals
  }

  toAmountString(
    amount: BigNumber,
    decimals: number,
    symbol: string,
    options?: ToStringOption
  ) {
    return (
      toUnscaled(amount, decimals).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits:
          options && options.showFull ? decimals : this.marginFractionDecimals
      }) + (options && options.symbolRequired ? ' ' + symbol : '')
    )
  }

  toMarginString(amount: BigNumber | undefined, options?: ToStringOption) {
    return this.toAmountString(
      amount || ZERO,
      this.marginDecimals,
      MARGIN_INFOS[this.chainId][this.pairGroupId].name,
      options
    )
  }

  toPriceString(amount: BigNumber | undefined) {
    return amount
      ? toPriceString(
          toUnscaled(amount, this.marginDecimals),
          ASSET_INFOS[this.chainId][this.pairId].fractionDigits
        )
      : '-'
  }

  toSquartString(amount: BigNumber | undefined, options?: ToStringOption) {
    return this.toAmountString(
      amount || ZERO,
      this.squartDecimals,
      '√' + ASSET_INFOS[this.chainId][this.pairId].name,
      options
    )
  }

  toUnderlyingString(amount: BigNumber | undefined, options?: ToStringOption) {
    return this.toAmountString(
      amount || ZERO,
      this.underlyingDecimals,
      ASSET_INFOS[this.chainId][this.pairId].name,
      options
    )
  }
}
