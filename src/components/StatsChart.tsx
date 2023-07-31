import React, { ReactNode } from 'react'
import ethIcon from '../assets/eth.svg'
import predyIcon from '../assets/predy.svg'
import unicornIcon from '../assets/unicorn.svg'
import usdcIcon from '../assets/usdc.svg'
import predyUserIcon from '../assets/predyuser.svg'
import ethLenderIcon from '../assets/ethlender.svg'
import usdcLenderIcon from '../assets/usdclender.svg'
import defiLlamaIcon from '../assets/defillama-dark.svg'
import duneIcon from '../assets/dune.svg'
import niceIcon from '../assets/nice.png'
import { useLendingPoolSummary } from '../hooks/useLendingPoolSummary'
import { useUniswapPool } from '../hooks/useUniswapPool'
import { convertNotionalToString } from '../utils'
import InfoTooltip from './common/InfoTooltip'
import { useMonthlyPremium } from '../hooks/useMonthlyPremium'
import { useOpenInterest } from '../hooks/core/useOpenInterestTotal'
import { usePredyTvl } from '../hooks/usePredyTvl'
import { toUnscaled } from '../utils/bn'
import { ZERO } from '../constants'

const ROUNDED = 16

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
    const point01 = add(
      mul(normalize(sub(points[0], points[1])), ROUNDED),
      points[1]
    )
    const point21 = add(
      mul(normalize(sub(points[2], points[1])), ROUNDED),
      points[1]
    )

    return `M ${points[0].x} ${points[0].y} L ${point01.x} ${point01.y} Q ${points[1].x
      } ${points[1].y} ${point21.x} ${point21.y + 5} L ${points[2].x} ${points[2].y
      }`
  } else if (points.length === 4) {
    const point01 = add(
      mul(normalize(sub(points[0], points[1])), ROUNDED),
      points[1]
    )
    const point21 = add(
      mul(normalize(sub(points[2], points[1])), ROUNDED),
      points[1]
    )
    const point12 = add(
      mul(normalize(sub(points[1], points[2])), ROUNDED),
      points[2]
    )
    const point32 = add(
      mul(normalize(sub(points[3], points[2])), ROUNDED),
      points[2]
    )

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
  tooltip?: ReactNode
}) => {
  const baseY = subtitle ? 10 : 0
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        rx={1}
        ry={1}
        width={120}
        height={38 + baseY}
        fill="#ffffff"
        stroke="#7887A0"
        strokeWidth={2}
      ></rect>

      {subtitle ? (
        <g>
          <text
            fill="#000000"
            fontFamily="Inter"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="6" y="14" textAnchor="start">
              {subtitle}
            </tspan>
          </text>
          <text
            fill="#000000"
            fontFamily="Inter"
            fontSize="20"
            letterSpacing="0em"
          >
            <tspan x="60" y="37" textAnchor="middle">
              {title}
            </tspan>
          </text>
        </g>
      ) : (
        <text
          fill="#000000"
          fontFamily="Inter"
          fontSize="20"
          letterSpacing="0em"
        >
          <tspan x="60" y="27" textAnchor="middle">
            {title}
          </tspan>
        </text>
      )}

      {tooltip ? (
        <foreignObject width={20} height={20} x={90} y={2}>
          <InfoTooltip>{tooltip}</InfoTooltip>
        </foreignObject>
      ) : (
        <></>
      )}
    </g>
  )
}

const StatsConnLabelSmall = ({
  x,
  y,
  title
}: {
  x: number
  y: number
  title: string
}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        rx={1}
        ry={1}
        width={76}
        height={38}
        fill="#ffffff"
        stroke="#7887A0"
        strokeWidth={2}
      ></rect>

      <text fill="#000000" fontFamily="Inter" fontSize="20" letterSpacing="0em">
        <tspan x="38" y="26" textAnchor="middle">
          {title}
        </tspan>
      </text>
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
  const padding = 28
  const height = 131 + props.items.length * padding

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
        strokeWidth={2}
      ></rect>
      <rect
        x={title.length > 12 ? 10 : 15}
        y="11"
        width={title.length > 12 ? 160 : 150}
        height="20"
        rx="4"
        fill="#F1F4F9"
      />

      <text fill="#7887A0" fontFamily="Inter" fontSize="18" letterSpacing="0em">
        <tspan x="90" y="27" textAnchor="middle">
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
                <tspan x="90" y={140 + i * padding} textAnchor="middle">
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
                <tspan x="28" y={140 + i * padding} textAnchor="start">
                  {item.title}
                </tspan>
              </text>
              <text
                fill="black"
                fontFamily="Inter"
                fontSize="16"
                letterSpacing="0em"
              >
                <tspan
                  id="predy-tvl"
                  x="152"
                  y={140 + i * padding}
                  textAnchor="end"
                >
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
  const width = 140
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="84" width={width} height="20" rx="4" fill="#F1F4F9" />

      <text fill="#7887A0" fontFamily="Inter" fontSize="18" letterSpacing="0em">
        <tspan x={width / 2} y="100" textAnchor="middle">
          {title}
        </tspan>
      </text>

      <g>
        <image href={icon} x={width / 2 - 32} y="12" width={64} />
      </g>
    </g>
  )
}

const StatsChart = ({ pairId }: { pairId: number }) => {
  const lendingSummary = useLendingPoolSummary(pairId)
  const uniswapSummary = useUniswapPool(pairId)
  const mothlyFee = useMonthlyPremium(pairId)
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
                toUnscaled(lendingSummary.data?.underlying.supply || ZERO, 18, 2) + ' ETH',
              value: ''
            },
            {
              title: 'APR',
              value: (lendingSummary.data?.underlying.supplyInterest || 0) + '%'
            },
            {
              title: 'UTIL.',
              value: (lendingSummary.data?.underlying.utilization || 0) + '%'
            }
          ]
        }}
      />
      <StatsNode
        x={571}
        y={100}
        title="Short Strangle"
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
        title="Long Strangle"
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
                convertNotionalToString(
                  toUnscaled(lendingSummary.data?.stable.supply || ZERO, 6, 2)
                ) + ' USDC',
              value: ''
            },
            {
              title: 'APR',
              value: (lendingSummary.data?.stable.supplyInterest || 0) + '%'
            },
            {
              title: 'UTIL.',
              value: (lendingSummary.data?.stable.utilization || 0) + '%'
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
              value: '$' + (predyTvl.data || '0')
            }
          ]
        }}
      />

      <Actor x={10} y={0} title="ETH Lender" icon={ethLenderIcon} />
      <Actor x={10} y={560} title="USDC Lender" icon={usdcLenderIcon} />
      <Actor x={410} y={0} title="Predy User" icon={predyUserIcon} />

      <Connection
        points={[
          { x: 162, y: 68 },
          { x: 280, y: 68 },
          { x: 280, y: 99 }
        ]}
      />
      <StatsConnLabelSmall x={180} y={50} title={'ETH'} />
      <Connection
        points={[
          { x: 162, y: 600 },
          { x: 280, y: 600 },
          { x: 280, y: 562 }
        ]}
      />
      <StatsConnLabelSmall x={180} y={580} title={'USDC'} />

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
          { x: 550, y: 70 },
          { x: 670, y: 70 },
          { x: 670, y: 100 }
        ]}
      />
      <Connection
        points={[
          { x: 550, y: 70 },
          { x: 1020, y: 70 },
          { x: 1020, y: 100 }
        ]}
      />
      <StatsConnLabelSmall x={570} y={50} title={'USDC'} />

      <Connection
        points={[
          { x: 570, y: 520 },
          { x: 495, y: 520 },
          { x: 495, y: 260 },
          { x: 570, y: 260 }
        ]}
      />
      <StatsConnLabel
        x={438}
        y={396}
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
              className="border-0 underline border-white"
            >
              Dune
            </a>
            .
          </div>
        }
      />

      <Connection
        points={[
          { x: 654, y: 316 },
          { x: 654, y: 410 }
        ]}
      />
      <StatsConnLabel
        x={600}
        y={340}
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
              className="border-0 underline"
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
        x={790}
        y={176}
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
              className="border-0 underline"
            >
              DefiLlama
            </a>
            .
            <iframe src="https://dune.com/embeds/2769088/4609260" height="320px" width="100%" title="premium chart"></iframe>

          </div>
        }
      />

      <Connection
        points={[
          { x: 752, y: 540 },
          { x: 945, y: 540 }
        ]}
      />
      <StatsConnLabelSmall x={810} y={520} title={'Short'} />

      <Connection
        points={[
          { x: 1030, y: 316 },
          { x: 1030, y: 410 }
        ]}
      />
      <StatsConnLabelSmall x={990} y={350} title={'Long'} />

      <image href={niceIcon} x="780" y="315" />
      <a
        href="https://dune.com/predy/predy-v5"
        target="_blank"
        rel="noreferrer"
      >
        <image href={duneIcon} x="864" y="18" width="100" />
      </a>
      <a
        href="https://defillama.com/protocol/predy-finance"
        target="_blank"
        rel="noreferrer"
      >
        <image href={defiLlamaIcon} x="984" y="18" width="100" />
      </a>
    </svg>
  )
}

export default StatsChart
