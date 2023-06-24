import { useQuery } from 'react-query'
import { Multicall__factory } from '../../typechain/multicall/index'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { ASSET_DECIMALS, MARGIN, Q96, ZERO } from '../../constants'
import { Controller__factory } from '../../typechain'
import { useProvider } from './useProvider'
import { arbitrum } from '../../constants/addresses'

interface PriceResult {
  sqrtPrice: BigNumber
  sqrtIndexPrice: BigNumber
  price: BigNumber
  indexPrice: BigNumber
}

function computePrice(
  sqrtPrice: BigNumber,
  marginDecimals: number,
  assetDecimals: number
) {
  const marginScaler = BigNumber.from(10).pow(marginDecimals)
  const squartScaler = BigNumber.from(10).pow(
    (assetDecimals + marginDecimals) / 2
  )

  return sqrtPrice
    .mul(sqrtPrice)
    .mul(squartScaler)
    .div(Q96)
    .mul(squartScaler)
    .div(Q96)
    .div(marginScaler)
}

export function useCachedPrice(tokenId: number) {
  const [priceResult, setPriceResult] = useState<PriceResult>({
    sqrtPrice: ZERO,
    sqrtIndexPrice: ZERO,
    price: ZERO,
    indexPrice: ZERO
  })

  const query = usePrice(tokenId)

  useEffect(() => {
    if (query.isSuccess) {
      setPriceResult(query.data)
    }
  }, [query.isSuccess, query.data])

  return priceResult
}

export function usePrice(assetId: number) {
  const provider = useProvider()

  return useQuery<PriceResult>(
    ['price', assetId],
    async () => {
      if (!provider) throw new Error('provider not set')

      const controller = Controller__factory.connect(
        arbitrum.Controller,
        provider
      )
      const multicall = Multicall__factory.connect(
        arbitrum.Multicall2,
        provider
      )

      const calls = [
        {
          target: arbitrum.Controller,
          callData: controller.interface.encodeFunctionData('getSqrtPrice', [
            assetId
          ])
        },
        {
          target: arbitrum.Controller,
          callData: controller.interface.encodeFunctionData(
            'getSqrtIndexPrice',
            [assetId]
          )
        }
      ]

      const result = await multicall.callStatic.aggregate(calls)

      const sqrtPrice = controller.interface.decodeFunctionResult(
        'getSqrtPrice',
        result.returnData[0]
      )[0]
      const sqrtIndexPrice = controller.interface.decodeFunctionResult(
        'getSqrtIndexPrice',
        result.returnData[1]
      )[0]

      const assetDecimals = ASSET_DECIMALS[assetId]
      const marginDecimals = MARGIN.DECIMALS

      return {
        sqrtPrice,
        sqrtIndexPrice,
        price: computePrice(sqrtPrice, marginDecimals, assetDecimals),
        indexPrice: computePrice(sqrtIndexPrice, marginDecimals, assetDecimals)
      }
    },
    {
      enabled: !!provider,
      refetchInterval: 7000,
      staleTime: 2000
    }
  )
}
