import { useQuery } from 'react-query'
import { ERC20__factory } from '../typechain'
import { useProvider } from './core/useProvider'

export function useERC20BalanceQuery(
  chainId: number,
  account: string,
  address: string
) {
  const provider = useProvider(chainId)

  return useQuery(
    ['balance', chainId, account, address],

    async () => {
      const contract = ERC20__factory.connect(address, provider)
      return await contract.balanceOf(account)
    },

    {
      enabled: true
    }
  )
}
