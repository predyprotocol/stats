import { BigNumber } from 'ethers'
import { Q96 } from '../../constants'
import {
  calculateLiquidationPrice1,
  calculateLiquidationPrice2,
  calculateLossThreshold,
  calculateValue,
  computePrice
} from '../helpers/minDeposit'

describe('minDeposit', () => {
  const sqrtPrice = BigNumber.from('3201718174489758818194122')

  describe('computePrice', () => {
    it('compute price', () => {
      const price = computePrice(sqrtPrice)

      expect(price.div(Q96).toString()).toBe('1633')
    })
  })

  describe('calculateValue', () => {
    it('calculates position value', () => {
      const value = calculateValue(
        {
          stable: BigNumber.from('100000000'),
          squart: BigNumber.from('40000000000000'),
          underlying: BigNumber.from('1000000000000000000')
        },
        sqrtPrice
      )

      expect(value.toString()).toBe('4965987581')
    })
  })

  describe('calculateLiquidationPrice', () => {
    it('calculates liquidation price', () => {
      const value = calculateLiquidationPrice1(
        {
          stable: BigNumber.from('-1200000000'),
          squart: BigNumber.from('40000000000000'),
          underlying: BigNumber.from('-1000000000000000000')
        },
        BigNumber.from('0')
      )

      expect(value.toString()).toBe('479999995')
    })
    it('calculates liquidation price', () => {
      const value = calculateLiquidationPrice2(
        {
          stable: BigNumber.from('-1200000000'),
          squart: BigNumber.from('40000000000000'),
          underlying: BigNumber.from('-1000000000000000000')
        },
        BigNumber.from('0')
      )

      expect(value.toString()).toBe('3000000027')
    })
  })

  describe('calculateLossThreshold', () => {
    it('calculates loss threshold', () => {
      const value = calculateLossThreshold(
        {
          stable: BigNumber.from('-1200000000'),
          squart: BigNumber.from('40000000000000'),
          underlying: BigNumber.from('-1000000000000000000')
        },
        BigNumber.from('300000000')
      )

      expect(value.toString()).toBe('233274656')
    })
  })
})
