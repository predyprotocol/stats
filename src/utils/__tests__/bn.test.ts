import { BigNumber } from 'ethers'
import { sqrt, toScaled, toUnscaled } from '../bn'

describe('bn', () => {
  it('toScaled', () => {
    const raw = 120
    expect(toScaled(raw, 8).toString()).toBe('12000000000')
  })

  it('toScaled decimal', () => {
    const raw = 1.2
    expect(toScaled(raw, 8).toString()).toBe('120000000')
  })

  it('toScaled decimal remains', () => {
    const raw = 3.1415926
    expect(() => {
      toScaled(raw, 4).toString()
    }).toThrow()
  })

  describe('toUnscaled', () => {
    it('toUnscaled', () => {
      const scaled = BigNumber.from(31415)
      expect(toUnscaled(scaled, 2)).toBe(314.15)
    })

    it('toUnscaled with precision', () => {
      const scaled = BigNumber.from(31415)
      expect(toUnscaled(scaled, 2, 1)).toBe(314.1)
    })

    it('toUnscaled with roundUp', () => {
      const scaled = BigNumber.from(31415)
      expect(toUnscaled(scaled, 2, 1, true)).toBe(314.2)
    })
  })

  describe('sqrt', () => {
    it('square root of 1000000', () => {
      const a = BigNumber.from('1000000')
      expect(sqrt(a).toNumber()).toBe(1000)
    })
  })
})
