import { BigNumber } from 'ethers'
import { ZERO } from '../../constants'
import { getGamma, Position } from '../uni'

describe('uni', () => {
  describe('getGamma', () => {
    it('computes gamma correctly', () => {
      const position: Position = {
        subVaultId: 0,
        asset0: ZERO,
        asset1: ZERO,
        debt0: ZERO,
        debt1: ZERO,
        lpts: [
          {
            isCollateral: true,
            lowerTick: -206510,
            upperTick: -204330,
            liquidity: BigNumber.from('317661555527689')
          }
        ]
      }

      const gamma = getGamma(position, -205000)

      expect(gamma.toString()).toEqual('-3587751030406915')
    })

    it('computes gamma of out of range', () => {
      const position: Position = {
        subVaultId: 0,
        asset0: ZERO,
        asset1: ZERO,
        debt0: ZERO,
        debt1: ZERO,
        lpts: [
          {
            isCollateral: true,
            lowerTick: -206510,
            upperTick: -204330,
            liquidity: BigNumber.from('317661555527689')
          }
        ]
      }

      const gamma = getGamma(position, -203000)

      expect(gamma.toString()).toEqual('0')
    })

    it('computes gamma correctly margin token is zero', () => {
      const position: Position = {
        subVaultId: 0,
        asset0: ZERO,
        asset1: ZERO,
        debt0: ZERO,
        debt1: ZERO,
        lpts: [
          {
            isCollateral: true,
            lowerTick: 204330,
            upperTick: 206510,
            liquidity: BigNumber.from('317661555527689')
          }
        ]
      }

      const gamma = getGamma(position, 205000, true)

      expect(gamma.toString()).toEqual('-3587751030406915')
    })
  })
})
