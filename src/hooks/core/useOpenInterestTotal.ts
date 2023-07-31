import { useQuery } from '@apollo/client'
import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { predyArbitrum } from '../../utils/apollo-client'
import {
  OPEN_INTEREST_TOTAL_QUERY,
  OpenInterestTotal
} from '../../queries/openInterestQuery'
import { toUnscaled } from '../../utils/bn'

export function useOpenInterest() {
  const { data, loading } = useQuery<OpenInterestTotal>(
    OPEN_INTEREST_TOTAL_QUERY,
    {
      fetchPolicy: 'cache-first',
      variables: {
        id: '1'
      },
      pollInterval: 15000,
      client: predyArbitrum
    }
  )

  const openInterest = useMemo(() => {
    if (data) {
      const item = data.openInterestTotal
      return {
        id: item.id,
        longPerp: toUnscaled(BigNumber.from(item.longPerp), 18),
        longSquart: toUnscaled(BigNumber.from(item.longSquart).mul(2), 12),
        shortPerp: toUnscaled(BigNumber.from(item.shortPerp), 18),
        shortSquart: toUnscaled(BigNumber.from(item.shortSquart).mul(2), 12)
      }
    }
    return null
  }, [data])

  if (loading || openInterest === null) {
    return null
  }

  return openInterest
}
