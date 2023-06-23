import { PositionStyle } from '../../constants/enum'
import { getDelta } from '../bs'

const SQRT_R25 = 1.01242283657

function computeNeutralPrice(
  squartSide: boolean,
  positionStyle: PositionStyle,
  sqrtPrice: number
) {
  if (positionStyle == PositionStyle.Neutral) {
    return sqrtPrice
  } else if (
    (squartSide && positionStyle == PositionStyle.Bearish25) ||
    (!squartSide && positionStyle == PositionStyle.Bullish25)
  ) {
    return sqrtPrice * SQRT_R25
  } else if (
    (squartSide && positionStyle == PositionStyle.Bullish25) ||
    (!squartSide && positionStyle == PositionStyle.Bearish25)
  ) {
    return sqrtPrice / SQRT_R25
  } else {
    throw new Error('undefined style')
  }
}

export function computeTradeAmounts(
  squartSide: boolean,
  positionStyle: PositionStyle,
  squart2Amount: number,
  sqrtPrice: number
) {
  const sqrtNeutralPrice = computeNeutralPrice(
    squartSide,
    positionStyle,
    sqrtPrice
  )

  return (
    -Math.floor(
      getDelta(
        0,
        (squart2Amount * (squartSide ? -1 : 1)) / 2,
        sqrtNeutralPrice
      ) * 100
    ) / 100
  )
}
