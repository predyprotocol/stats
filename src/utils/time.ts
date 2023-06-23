import dayjs from 'dayjs'

export function getNow() {
  return Math.floor(new Date().getTime() / 1000)
}

export function useDeltaTimestamps(): [number, number, number, number] {
  const utcCurrentTime = dayjs()
  const t1 = utcCurrentTime.subtract(1, 'day').startOf('minute').unix()
  const t2 = utcCurrentTime.subtract(2, 'day').startOf('minute').unix()
  const tWeek = utcCurrentTime.subtract(1, 'week').startOf('minute').unix()
  return [utcCurrentTime.startOf('minute').unix(), t1, t2, tWeek]
}
