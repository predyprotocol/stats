import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import LoadingIndicator from './LoadingIndicator'

const GRID_COLOR = '#33333390'

const PriceChart = ({
  height,
  data1,
  data2
}: {
  height: number | string
  data1: number[][]
  data2?: number[][]
}) => {
  const series = data2
    ? [
        {
          type: 'line',
          name: 'price',
          data: data1,
          yAxis: 0
        },
        {
          type: 'line',
          name: 'squart',
          data: data2,
          yAxis: 1
        }
      ]
    : [
        {
          type: 'line',
          name: 'price',
          data: data1
        }
      ]

  const yAxis = data2
    ? [
        {
          gridLineColor: GRID_COLOR,
          labels: {
            style: {
              color: '#0ECB81'
            }
          },
          opposite: true,
          offset: 28
        },
        {
          gridLineColor: GRID_COLOR,
          opposite: false,
          labels: {
            style: {
              color: '#FFFFFF'
            }
          }
        }
      ]
    : [
        {
          gridLineColor: GRID_COLOR
        }
      ]

  return (
    <div className="w-full h-full">
      {data1.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12">
            <LoadingIndicator />
          </div>
        </div>
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={{
            series,
            colors: ['#0ECB81', '#FFFFFF'],
            chart: {
              height: height,
              backgroundColor: '#30303010',
              style: { fontFamily: 'Inter, sans-serif', fontSize: '12px' }
            },
            labels: {
              items: [
                {
                  style: {
                    color: '#0ECB81'
                  }
                }
              ],
              style: {
                color: '#ffffff'
              }
            },
            scrollbar: false,
            navigator: false,
            xAxis: {
              gridLineColor: GRID_COLOR
            },
            yAxis,
            credits: {
              enabled: false
            }
          }}
        />
      )}
    </div>
  )
}

export default PriceChart
