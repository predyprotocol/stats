import { useQuery } from "react-query"
import { useLpRevenueDaily } from "./core/useLpRevenueDaily"
import { ONE, ZERO } from "../constants"
import { usePrice } from "./core/usePrice"
import { toUnscaled } from "../utils/bn"

export function useMonthlyPremium(pairId: number) {
  // 30 days before
  const startTimestamp = Math.floor(((new Date().getTime()) - 60 * 60 * 24 * 30 * 1000) / 1000)

  const lpRevenueDaily = useLpRevenueDaily(startTimestamp)
  const price = usePrice(pairId)

  return useQuery(
    ['monthly-premium', pairId],
    async () => {
      if (!lpRevenueDaily) throw new Error('provider not set')
      if (!price.isSuccess) throw new Error('price not set')

      const accumulatedFee0 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.fee0)
        },
        ZERO
      )
      const accumulatedFee1 = lpRevenueDaily.reduce(
        (acc, revenue) => {
          return acc.add(revenue.fee1)
        },
        ZERO
      )
      const accumulatedPremiumBorrow =
        lpRevenueDaily.reduce((acc, revenue) => {
          return acc.add(revenue.premiumBorrow)
        }, ZERO)

      const tradeFeeEth = accumulatedFee0.mul(price.data.price).div(ONE).div(ONE).toNumber()
      const tradeFeeUsdc = accumulatedFee1.div(ONE).div("1000000").toNumber()

      return {
        premium: toUnscaled(accumulatedPremiumBorrow.div(ONE), 6),
        tradeFee: tradeFeeEth + tradeFeeUsdc
      }
    },
    {
      enabled: !!lpRevenueDaily && price.isSuccess,
      refetchInterval: 15000,
      staleTime: 5000
    }
  )
}
