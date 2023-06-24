import { gql } from '@apollo/client'

export const OPEN_INTEREST_TOTAL_QUERY = gql`
  query ($id: String) {
    openInterestTotal(id: $id) {
      id
      longSquart
      longPerp
      shortSquart
      shortPerp
    }
  }
`

export type OpenInterestTotal = {
  openInterestTotal: {
    id: string
    longSquart: string
    longPerp: string
    shortSquart: string
    shortPerp: string
  }
}
