import { BigNumber } from 'ethers'
import { Q96 } from '../../constants'
import {
  calculateLiquidationSqrtPrice1,
  calculateLiquidationSqrtPrice2,
  calculateMinDeposit,
  computePrice,
  ONE_1E8,
  Position
} from './minDeposit'

export type EstLoss = {
  lossThreshold: BigNumber
  low: {
    price: BigNumber
    estLoss: BigNumber
  }
  high: {
    price: BigNumber
    estLoss: BigNumber
  }
}

export function calculateEstLoss(
  position: Position,
  margin: BigNumber
): EstLoss | null {
  if (position.squart.lte(0) || position.underlying.gt(0)) {
    return null
  }

  const a = calculateLiquidationSqrtPrice1(position, margin)
  const b = calculateLiquidationSqrtPrice2(position, margin)

  const minDepositA = calculateMinDeposit(
    position,
    a.mul(Q96).div(ONE_1E8).div('1000000')
  )
  const minDepositB = calculateMinDeposit(
    position,
    b.mul(Q96).div(ONE_1E8).div('1000000')
  )

  const lossThreshold = minDepositA.lt(minDepositB) ? minDepositA : minDepositB

  return {
    lossThreshold: margin.sub(lossThreshold),
    low: {
      price: computePrice(a.mul(Q96).div(ONE_1E8).div('1000000'))
        .mul('1000000')
        .div(Q96),
      estLoss: margin.sub(minDepositA)
    },
    high: {
      price: computePrice(b.mul(Q96).div(ONE_1E8).div('1000000'))
        .mul('1000000')
        .div(Q96),
      estLoss: margin.sub(minDepositB)
    }
  }
}
