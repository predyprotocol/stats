import { useQuery } from 'react-query'

const UNISWAP_SUBGRAPH_ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks'

export const GET_BLOCKS = (timestamps: number[]) => {
  let queryString = 'query blocks {'
  queryString += timestamps.map(timestamp => {
    return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${
      timestamp + 600
    } }) {
        number
      }`
  })
  queryString += '}'
  return queryString
}

async function queryBlock(timestamps: number[]) {
  const body = {
    operationName: 'blocks',
    query: GET_BLOCKS(timestamps),
    variables: {}
  }

  const res = await fetch(UNISWAP_SUBGRAPH_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(body)
  })

  return await res.json()
}

export function useBlocksFromTimestamps(timestamps: number[]) {
  return useQuery(
    ['blocks_from_ts', timestamps],
    async () => {
      const results = await queryBlock(timestamps)

      const formatted = []

      for (const t in results.data) {
        if (results.data[t].length > 0) {
          const number = results.data[t][0]['number']
          const deploymentBlock = 0
          const adjustedNumber =
            number > deploymentBlock ? number : deploymentBlock

          formatted.push({
            timestamp: t.split('t')[1],
            number: Number(adjustedNumber)
          })
        }
      }

      return formatted
    },
    {
      enabled: true
    }
  )
}
