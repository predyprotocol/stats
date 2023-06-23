import { useQuery } from "react-query"
import { convertNotionalToString } from "../utils"

const DEFILLAMA_ENDPOINT = 'https://api.llama.fi/tvl/predy-finance'

export function usePredyTvl() {
  return useQuery(
    ['predy-tvl'],
    async () => {

      const responce = await fetch(
        DEFILLAMA_ENDPOINT,
        { method: "GET" }
      )
      const data = await responce.json()

      return convertNotionalToString(Number(data))

    },
    {
      enabled: true
    }
  )
}
