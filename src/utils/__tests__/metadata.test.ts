import { TradeType } from '../../constants/enum'
import { encodeMetadata, decodeMetadata } from '../metadata'

describe('metadata', () => {
  it('encode and decode', () => {
    const decoded = decodeMetadata(encodeMetadata(TradeType.LONG_CALL))
    expect(decoded).toBe(TradeType.LONG_CALL)
  })
})
