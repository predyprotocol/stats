import dayjs from 'dayjs'

export function truncate(str: string, num: number): string {
  if (str.length <= num) {
    return str
  }

  return str.slice(0, num)
}

export function toTimeString(timestamp: number) {
  return dayjs(timestamp * 1000).format('HH:mm DD-MM-YYYY')
}

export function toDateString(timestamp: number) {
  return dayjs(timestamp * 1000).format('MM.DD')
}

export function toTimeString2(timestamp: number) {
  return dayjs(timestamp * 1000).format('MM.DD YYYY')
}
