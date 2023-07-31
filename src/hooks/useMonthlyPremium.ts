import { useQuery } from 'react-query'
import { ONE, ZERO } from '../constants'
import { usePrice } from './core/usePrice'
import { toUnscaled } from '../utils/bn'
import { useFeeDaily } from './core/useFeeDaily'

export function useMonthlyPremium(pairId: number) {
  // 30 days before
  const startTimestamp = Math.floor(
    (new Date().getTime() - 60 * 60 * 24 * 30 * 1000) / 1000
  )

  const lpRevenueDaily = useFeeDaily(pairId, startTimestamp)
  const price = usePrice(pairId)

  return useQuery(
    ['monthly-premium', pairId],
    async () => {
      if (!lpRevenueDaily) throw new Error('provider not set')
      if (!price.isSuccess) throw new Error('price not set')

      const accumulatedSupplySqrtFee0 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.supplySqrtFee0)
        },
        ZERO
      )
      const accumulatedSupplySqrtFee1 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.supplySqrtFee1)
        },
        ZERO
      )
      const accumulatedBorrowSqrtFee0 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.borrowSqrtFee0)
        },
        ZERO
      )
      const accumulatedBorrowSqrtFee1 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.borrowSqrtFee1)
        },
        ZERO
      )

      const accumulatedSupplySqrtFee = accumulatedSupplySqrtFee0
        .mul(price.data.price)
        .div(ONE)
        .add(accumulatedSupplySqrtFee1)
      const accumulatedBorrowSqrtFee = accumulatedBorrowSqrtFee0
        .mul(price.data.price)
        .div(ONE)
        .add(accumulatedBorrowSqrtFee1)

      return {
        premium: toUnscaled(accumulatedBorrowSqrtFee, 6),
        tradeFee: toUnscaled(
          accumulatedSupplySqrtFee.sub(accumulatedBorrowSqrtFee),
          6
        )
      }
    },
    {
      enabled: !!lpRevenueDaily && price.isSuccess,
      refetchInterval: 15000,
      staleTime: 5000
    }
  )
}
