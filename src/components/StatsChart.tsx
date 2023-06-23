import React, { ReactNode } from 'react'
import ethIcon from '../assets/eth.svg'
import predyIcon from '../assets/predy.svg'
import unicornIcon from '../assets/unicorn.svg'
import usdcIcon from '../assets/usdc.svg'
import predyUserIcon from '../assets/predyuser.svg'
import ethLenderIcon from '../assets/ethlender.svg'
import usdcLenderIcon from '../assets/usdclender.svg'
import { useLendingPoolSummary } from '../hooks/useLendingPoolSummary'
import { useUniswapPool } from '../hooks/useUniswapPool'
import { convertNotionalToString } from '../utils'
import InfoTooltip from './common/InfoTooltip'
import { useMonthlyPremium } from '../hooks/useMonthlyPremium'
import { useOpenInterest } from '../hooks/core/useOpenInterestTotal'
import { usePredyTvl } from '../hooks/usePredyTvl'
import { toUnscaled } from '../utils/bn'
import { ZERO } from '../constants'

type Point2D = { x: number; y: number }

function add(a: Point2D, b: Point2D) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

function sub(a: Point2D, b: Point2D) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

function mul(a: Point2D, b: number) {
  return {
    x: a.x * b,
    y: a.y * b
  }
}

function div(a: Point2D, b: number) {
  return {
    x: a.x / b,
    y: a.y / b
  }
}

function normalize(a: Point2D) {
  const d = Math.sqrt(a.x * a.x + a.y * a.y)

  return div(a, d)
}

function getD(points: Point2D[]) {
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`
  } else if (points.length === 3) {
    const point01 = add(mul(normalize(sub(points[0], points[1])), 5), points[1])
    const point21 = add(mul(normalize(sub(points[2], points[1])), 5), points[1])

    return `M ${points[0].x} ${points[0].y} L ${point01.x} ${point01.y} Q ${
      points[1].x
    } ${points[1].y} ${point21.x} ${point21.y + 5} L ${points[2].x} ${
      points[2].y
    }`
  } else if (points.length === 4) {
    const point01 = add(mul(normalize(sub(points[0], points[1])), 5), points[1])
    const point21 = add(mul(normalize(sub(points[2], points[1])), 5), points[1])
    const point12 = add(mul(normalize(sub(points[1], points[2])), 5), points[2])
    const point32 = add(mul(normalize(sub(points[3], points[2])), 5), points[2])

    return `
    M ${points[0].x} ${points[0].y} L ${point01.x} ${point01.y} Q ${points[1].x} ${points[1].y} ${point21.x} ${point21.y} L ${point12.x} ${point12.y}
    Q ${points[2].x} ${points[2].y} ${point32.x} ${point32.y} L ${points[3].x} ${points[3].y}
    `
  }

  return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[0].y}`
}

const Connection = ({ points }: { points: Point2D[] }) => {
  return (
    <>
      <path
        d={getD(points)}
        stroke="#aaaaaa"
        strokeWidth={1}
        fill="none"
        markerEnd="url(#m_atr)"
      />
      <circle
        cx={points[0].x}
        cy={points[0].y}
        r={5}
        fill="#ffffff"
        stroke="#aaaaaa"
        strokeWidth={1}
      />
    </>
  )
}

const StatsConnLabel = ({
  x,
  y,
  subtitle,
  title,
  tooltip
}: {
  x: number
  y: number
  subtitle?: string
  title: string
  tooltip: ReactNode
}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        rx={1}
        ry={1}
        width={120}
        height={40}
        fill="#ffffff"
        stroke="#7887A0"
        strokeWidth={1}
      ></rect>

      {subtitle ? (
        <g>
          <text
            fill="#000000"
            fontFamily="Inter"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="6" y="12" textAnchor="start">
              {subtitle}
            </tspan>
          </text>
          <text
            fill="#000000"
            fontFamily="Inter"
            fontSize="18"
            letterSpacing="0em"
          >
            <tspan x="60" y="30" textAnchor="middle">
              {title}
            </tspan>
          </text>
        </g>
      ) : (
        <text
          fill="#000000"
          fontFamily="Inter"
          fontSize="18"
          letterSpacing="0em"
        >
          <tspan x="60" y="28" textAnchor="middle">
            {title}
          </tspan>
        </text>
      )}

      <foreignObject width={20} height={20} x={90} y={2}>
        <InfoTooltip placement="top">{tooltip}</InfoTooltip>
      </foreignObject>
    </g>
  )
}

type StatsNodeProp = {
  items: {
    titleOnly?: boolean
    title: string
    value: string
  }[]
}

const StatsNode = ({
  x,
  y,
  title,
  icon,
  props
}: {
  x: number
  y: number
  title: string
  icon: string
  props: StatsNodeProp
}) => {
  const height = 140 + props.items.length * 20

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        rx={5}
        ry={5}
        width={180}
        height={height}
        fill="#ffffff"
        stroke="#7887A0"
        strokeWidth={1}
      ></rect>
      <rect x="10" y="8" width="160" height="20" rx="4" fill="#F1F4F9" />

      <text fill="#7887A0" fontFamily="Inter" fontSize="18" letterSpacing="0em">
        <tspan x="90" y="24" textAnchor="middle">
          {title}
        </tspan>
      </text>

      <g>
        <image href={icon} x="60" y="48" />
      </g>

      {props.items.map((item, i) => {
        if (item.titleOnly) {
          return (
            <g key={i}>
              <text
                fill="black"
                fontFamily="Inter"
                fontSize="16"
                letterSpacing="0em"
              >
                <tspan x="90" y={138 + i * 20} textAnchor="middle">
                  {item.title}
                </tspan>
              </text>
            </g>
          )
        } else {
          return (
            <g key={i}>
              <text
                fill="black"
                fontFamily="Inter"
                fontSize="16"
                letterSpacing="0em"
              >
                <tspan x="28" y={138 + i * 20} textAnchor="start">
                  {item.title}
                </tspan>
              </text>
              <text
                fill="black"
                fontFamily="Inter"
                fontSize="16"
                letterSpacing="0em"
              >
                <tspan id="predy-tvl" x="152" y={138 + i * 20} textAnchor="end">
                  {item.value}
                </tspan>
              </text>
            </g>
          )
        }
      })}
    </g>
  )
}

const Actor = ({
  x,
  y,
  title,
  icon
}: {
  x: number
  y: number
  title: string
  icon: string
}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="10" y="88" width="160" height="20" rx="4" fill="#F1F4F9" />

      <text fill="#7887A0" fontFamily="Inter" fontSize="18" letterSpacing="0em">
        <tspan x="90" y="102" textAnchor="middle">
          {title}
        </tspan>
      </text>

      <g>
        <image href={icon} x="60" y="12" />
      </g>
    </g>
  )
}

const StatsChart = () => {
  const usdcSummary = useLendingPoolSummary(1)
  const ethSummary = useLendingPoolSummary(2)
  const uniswapSummary = useUniswapPool(2)
  const mothlyFee = useMonthlyPremium(2)
  const openInterest = useOpenInterest()
  const predyTvl = usePredyTvl()

  return (
    <svg aria-hidden="true" viewBox="0 0 1200 690" preserveAspectRatio="none">
      <defs>
        <marker
          id="m_atr"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="10"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M 0 0 L 5 5 L 0 10" stroke="#aaaaaa" fill="none" />
        </marker>
      </defs>
      <StatsNode
        x={190}
        y={100}
        title="Lending Pool"
        icon={ethIcon}
        props={{
          items: [
            {
              titleOnly: true,
              title:
                toUnscaled(ethSummary.data?.supply || ZERO, 18, 2) + 'USDC',
              value: ''
            },
            {
              title: 'APR',
              value: (ethSummary.data?.supplyInterest || 0) + '%'
            },
            {
              title: 'UTIL.',
              value: (ethSummary.data?.utilization || 0) + '%'
            }
          ]
        }}
      />
      <StatsNode
        x={571}
        y={100}
        title="Gamma Short"
        icon={predyIcon}
        props={{
          items: [
            {
              titleOnly: true,
              title: 'Open Interest',
              value: ''
            },
            {
              title: '√ETH',
              value: convertNotionalToString(openInterest?.longSquart || 0)
            },
            {
              title: 'ETH',
              value: convertNotionalToString(openInterest?.shortPerp || 0)
            }
          ]
        }}
      />
      <StatsNode
        x={945}
        y={100}
        title="Gamma Long"
        icon={predyIcon}
        props={{
          items: [
            {
              titleOnly: true,
              title: 'Open Interest',
              value: ''
            },
            {
              title: '√ETH',
              value: convertNotionalToString(openInterest?.shortSquart || 0)
            },
            {
              title: 'ETH',
              value: convertNotionalToString(openInterest?.longPerp || 0)
            }
          ]
        }}
      />
      <StatsNode
        x={190}
        y={346}
        title="Lending Pool"
        icon={usdcIcon}
        props={{
          items: [
            {
              titleOnly: true,
              title:
                toUnscaled(usdcSummary.data?.supply || ZERO, 6, 2) + 'USDC',
              value: ''
            },
            {
              title: 'APR',
              value: (usdcSummary.data?.supplyInterest || 0) + '%'
            },
            {
              title: 'UTIL.',
              value: (usdcSummary.data?.utilization || 0) + '%'
            }
          ]
        }}
      />
      <StatsNode
        x={571}
        y={412}
        title="Uniswap V3 Pool"
        icon={unicornIcon}
        props={{
          items: [
            {
              title: 'TVL',
              value:
                '$' + convertNotionalToString(uniswapSummary.data?.tvlUSD || 0)
            },
            {
              title: 'Fee',
              value:
                '$' + convertNotionalToString(uniswapSummary.data?.feesUSD || 0)
            },
            {
              title: 'Vol.',
              value:
                '$' +
                convertNotionalToString(uniswapSummary.data?.volumeUSD || 0)
            },
            {
              title: 'IV',
              value: ((uniswapSummary.data?.iv || 0) * 100).toFixed(2) + '%'
            }
          ]
        }}
      />
      <StatsNode
        x={945}
        y={412}
        title="Predy V3.2 AMM"
        icon={predyIcon}
        props={{
          items: [
            {
              title: 'TVL',
              value: predyTvl.data || '0'
            }
          ]
        }}
      />

      <Actor x={0} y={0} title="ETH Lender" icon={ethLenderIcon} />
      <Actor x={0} y={560} title="USDC Lender" icon={usdcLenderIcon} />
      <Actor x={380} y={0} title="Predy User" icon={predyUserIcon} />

      <Connection
        points={[
          { x: 200, y: 80 },
          { x: 280, y: 80 },
          { x: 280, y: 100 }
        ]}
      />
      <Connection
        points={[
          { x: 200, y: 580 },
          { x: 280, y: 580 },
          { x: 280, y: 550 }
        ]}
      />

      <Connection
        points={[
          { x: 370, y: 200 },
          { x: 570, y: 200 }
        ]}
      />

      <Connection
        points={[
          { x: 370, y: 400 },
          { x: 410, y: 400 },
          { x: 410, y: 230 },
          { x: 570, y: 230 }
        ]}
      />

      <Connection
        points={[
          { x: 580, y: 80 },
          { x: 670, y: 80 },
          { x: 670, y: 100 }
        ]}
      />
      <Connection
        points={[
          { x: 580, y: 80 },
          { x: 1020, y: 80 },
          { x: 1020, y: 100 }
        ]}
      />

      <Connection
        points={[
          { x: 568, y: 500 },
          { x: 500, y: 500 },
          { x: 500, y: 250 },
          { x: 570, y: 250 }
        ]}
      />
      <StatsConnLabel
        x={450}
        y={360}
        title={'$' + convertNotionalToString(mothlyFee.data?.tradeFee || 0)}
        subtitle="Monthly Fee"
        tooltip={
          <div className="text-center">
            Predy Protocol Short positions earn Fees from Uniswap Liquidity
            Positions can be checked at{' '}
            <a
              href="https://dune.com/queries/2355185/3857264"
              target="_blank"
              rel="noreferrer"
            >
              Dune
            </a>
            .
          </div>
        }
      />

      <Connection
        points={[
          { x: 654, y: 300 },
          { x: 654, y: 410 }
        ]}
      />
      <StatsConnLabel
        x={600}
        y={320}
        title="LP"
        tooltip={
          <div className="text-center">
            Predy Protocol composes Squart&apos;s position by providing
            Liquidity to a specific range of Uniswap, and the Range can be
            checked at{' '}
            <a
              href="https://dune.com/queries/2355185/3857264"
              target="_blank"
              rel="noreferrer"
            >
              Dune
            </a>
            .
          </div>
        }
      />

      <Connection
        points={[
          { x: 944, y: 200 },
          { x: 752, y: 200 }
        ]}
      />
      <StatsConnLabel
        x={800}
        y={180}
        title={'$' + convertNotionalToString(mothlyFee.data?.premium || 0)}
        subtitle="Monthly Fee"
        tooltip={
          <div className="text-center">
            Predy Protocol calculates and pays Fee (Premium) optimized for Gamma
            Trade (Delta neutral position by combining Squart and ETH) can be
            checked at{' '}
            <a
              href="https://defillama.com/fees/predy-finance"
              target="_blank"
              rel="noreferrer"
            >
              DefiLlama
            </a>
            .
          </div>
        }
      />

      <Connection
        points={[
          { x: 752, y: 540 },
          { x: 945, y: 540 }
        ]}
      />

      <Connection
        points={[
          { x: 1030, y: 300 },
          { x: 1030, y: 410 }
        ]}
      />
    </svg>
  )
}

export default StatsChart
