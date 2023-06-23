export enum AssetType {
  WETH = 1,
  WBTC = 2
}

export enum TradeSymbol {
  PERP = 'PERP',
  SQRT = 'SQRT',
  FEE = 'Fee',
  MARGIN = 'Margin',
  LIQUIDATION = 'Liquidation',
  UNDEFINED = '-'
}

export enum TradeSide {
  BUY = 'Buy',
  SELL = 'Sell',
  UNDEFINED = '-'
}

export enum Action {
  TRADE = 'TRADE',
  DEPOSIT = 'DEPOSIT_MARGIN',
  WITHDRAW = 'WITHDRAW_MARGIN',
  LIQUIDATE = 'LIQUIDATE'
}

export enum Product {
  PERP = 'PERP',
  SQRT = 'SQRT'
}

export enum ChartRange {
  Hour,
  Day,
  Week,
  Month,
  Year
}

export enum TradeType {
  NONE = 0,
  LONG_CALL = 1,
  LONG_PUT = 2,
  SHORT_CALL = 3,
  SHORT_PUT = 4,
  LONG_STRANGLE = 5,
  SHORT_STRANGLE = 6,
  BULL_CALL_SPREAD = 7,
  BEAR_CALL_SPREAD = 8,
  LENDING = 9,
  MARGIN = 10,
  HEDGE = 11
}

export enum MyPositionTab {
  Positions = 0,
  TradeHistory = 1
}

export enum PositionStyle {
  Bearish25,
  Neutral,
  Bullish25
}
