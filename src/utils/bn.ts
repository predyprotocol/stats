import { BigNumber, BigNumberish } from 'ethers'

export function toUnscaled(
  n: BigNumber,
  decimal: number,
  precision = 6,
  round = false
): number {
  const p = 10 ** precision
  if (round) {
    const divider = pow10(decimal - 1)
    return Math.round(n.mul(p).div(divider).toNumber() / 10) / p
  }

  return n.mul(p).div(pow10(decimal)).toNumber() / p
}

export function toScaled(
  n: BigNumberish,
  decimal: number,
  precision = 6
): BigNumber {
  // handle decimal
  const str = n.toString()
  if (str.indexOf('.') !== -1) {
    // calc decimal part length
    const decimalLength = str.split('.')[1].length
    const splittedStrs = str.split('.')
    if (decimalLength <= decimal) {
      return round(
        BigNumber.from(splittedStrs[0] + splittedStrs[1]).mul(
          pow10(decimal - decimalLength)
        )
      )
    } else {
      return round(
        BigNumber.from(splittedStrs[0] + splittedStrs[1].slice(0, decimal))
      )
    }
  }

  return round(BigNumber.from(n).mul(pow10(decimal)))

  function round(n: BigNumber) {
    const divider = pow10(decimal - precision)
    return n.div(divider).mul(divider)
  }
}

export function pow10(d: number): BigNumber {
  return BigNumber.from(10).pow(d)
}

export function div(
  a: BigNumber,
  b: BigNumberish,
  d: BigNumberish,
  roundUp: boolean
): BigNumber {
  let tailing = 0
  if (roundUp) {
    const remainer = a.mul(b).mod(d)
    if (remainer.gt(0)) {
      tailing = 1
    }
  }
  return a.mul(b).div(d).add(tailing)
}

const ONE = BigNumber.from(1)
const TWO = BigNumber.from(2)

export function sqrt(x: BigNumber) {
  let z = x.add(ONE).div(TWO)
  let y = x
  while (z.sub(y).isNegative()) {
    y = z
    z = x.div(z).add(z).div(TWO)
  }
  return y
}
