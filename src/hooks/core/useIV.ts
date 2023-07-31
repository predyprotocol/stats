import { BigNumber } from 'ethers'
import { Q128, Q96 } from '../../constants'
import { ASSET_INFOS } from '../../constants/assets'
import { toUnscaled } from '../../utils/bn'
import { usePrice } from './usePrice'
import { useAsset } from './useAsset'
import { useUniswapTradeFee24H } from './useUniswapTradeFee'
import { PairScalers } from '../../utils/helpers/scaler'
import { useQuery } from 'react-query'

const feeDecimals = 6
const feeScaler = 10 ** 6

function calculateFeeValue(
  fee0: BigNumber,
  fee1: BigNumber,
  price: BigNumber,
  isMarginZero: boolean,
  underlyingScaler: BigNumber
) {
  if (isMarginZero) {
    return fee0.add(fee1.mul(price).div(underlyingScaler))
  } else {
    return fee1.add(fee0.mul(price).div(underlyingScaler))
  }
}

/**
 * IV = sqrt(8 * dailyFee * 365 / squartValue)
 * @param fee daily fee earn scaled by Q128
 * @param squartValue value of squart scaled by Q96
 * @returns implied volatility
 */
function calculateIV(fee: BigNumber, squartValue: BigNumber) {
  const feePerSqrtValue = fee
    .mul(Q96)
    .mul(365)
    .mul(8)
    .mul(feeScaler)
    .div(squartValue)
    .div(Q128)

  return Math.sqrt(toUnscaled(feePerSqrtValue, feeDecimals))
}

export function useIV(pairId: number) {
  const uniswapTradeFee24h = useUniswapTradeFee24H(
    ASSET_INFOS[pairId].poolAddress,
    false
  )
  const asset = useAsset(pairId)
  const price = usePrice(pairId)

  return useQuery(
    ['iv', pairId],
    async () => {
      if (!uniswapTradeFee24h.isSuccess)
        throw new Error('uniswapTradeFee24h not loaded')
      if (!asset.isSuccess) throw new Error('asset not loaded')
      if (!price.isSuccess) throw new Error('price not loaded')

      const fee0 = uniswapTradeFee24h.data.fee0
      const fee1 = uniswapTradeFee24h.data.fee1

      const scalers = new PairScalers(pairId)

      const fee = calculateFeeValue(
        fee0,
        fee1,
        price.data.price,
        asset.data.isMarginZero,
        scalers.underlyingScaler
      ).mul(scalers.squartScaler)

      const sqrtValue = price.data.sqrtPrice.mul(scalers.squartScaler)

      return calculateIV(fee, sqrtValue)
    },
    {
      enabled:
        asset.isSuccess && price.isSuccess && uniswapTradeFee24h.isSuccess
    }
  )
}
