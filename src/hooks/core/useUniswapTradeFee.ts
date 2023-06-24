import { BigNumber } from 'ethers'
import { useQuery } from 'react-query'
import { ZERO } from '../../constants'
import { sliceLastItems, trimArray } from '../../utils/helpers/arr'
import { useUniFeeGrowthHourly } from './useFeeGrowth'

const NUM_ITEMS = 24

// calculate 24h trade fee for token 0 and token 1
export function useUniswapTradeFee24H(contractAddress: string) {
  const uniFeeGrowth = useUniFeeGrowthHourly(contractAddress)

  return useQuery(
    ['uniswap_trade_fee_24h', contractAddress],
    async () => {
      if (!uniFeeGrowth) throw new Error('uniFeeGrowth not set')

      const hourlyFees0 = convertToHourlyFee(
        uniFeeGrowth.map(i => i.feeGrowthGlobal0X128)
      )
      const hourlyFees1 = convertToHourlyFee(
        uniFeeGrowth.map(i => i.feeGrowthGlobal1X128)
      )

      return {
        fee0: calculateTrimmedMean(sliceLastItems(hourlyFees0, NUM_ITEMS)),
        fee1: calculateTrimmedMean(sliceLastItems(hourlyFees1, NUM_ITEMS))
      }
    },
    {
      enabled: !!uniFeeGrowth
    }
  )
}

function convertToHourlyFee(growthDataSet: BigNumber[]) {
  return growthDataSet.map((growthData, i) => {
    if (i === 0) {
      return ZERO
    }
    return growthData.sub(growthDataSet[i - 1])
  })
}

function calculateTrimmedMean(data: BigNumber[]) {
  if (data.length != NUM_ITEMS) {
    console.warn(`data length is not ${NUM_ITEMS}`)
  }

  /// copy
  const dataCopied = [...data]

  dataCopied.sort((a, b) => (a.gt(b) ? 1 : -1))

  return trimArray(dataCopied, 1)
    .reduce((acc, item) => acc.add(item), BigNumber.from(0))
    .div(22)
    .mul(24)
}
