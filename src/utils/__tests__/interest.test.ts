import {
  getLeftData,
  getRightData,
  normalizeBasicHistory,
  ONE_DAY
} from '../interest'

describe('interest', () => {
  describe('normalizeBasicHistory', () => {
    it('empty', () => {
      const history = normalizeBasicHistory([])
      expect(history).toEqual([])
    })

    it('few items', () => {
      const history = normalizeBasicHistory([
        { value: 0, timestamp: 0 },
        { value: 10, timestamp: ONE_DAY * 2 }
      ])
      expect(history).toEqual([
        { value: 0, timestamp: 0 },
        { value: 5, timestamp: ONE_DAY },
        { value: 10, timestamp: ONE_DAY * 2 }
      ])
    })

    it('many items', () => {
      const history = normalizeBasicHistory([
        { value: 0, timestamp: 0 },
        { value: 0, timestamp: ONE_DAY / 2 },
        { value: 10, timestamp: ONE_DAY }
      ])
      expect(history).toEqual([
        { value: 0, timestamp: 0 },
        { value: 10, timestamp: ONE_DAY }
      ])
    })
  })

  describe('getLeftData', () => {
    it('few items', () => {
      const data = getLeftData(ONE_DAY, [
        { value: 10, timestamp: ONE_DAY * 2 },
        { value: 0, timestamp: 0 }
      ])
      expect(data).toEqual({ value: 10, timestamp: ONE_DAY * 2 })
    })

    it('many items', () => {
      const data = getLeftData(ONE_DAY, [
        { value: 10, timestamp: ONE_DAY },
        { value: 0, timestamp: ONE_DAY / 2 }
      ])
      expect(data).toEqual({ value: 10, timestamp: ONE_DAY })
    })
  })

  describe('getRightData', () => {
    it('few items', () => {
      const data = getRightData(ONE_DAY, [
        { value: 10, timestamp: ONE_DAY * 2 },
        { value: 0, timestamp: 0 }
      ])
      expect(data).toEqual({ value: 0, timestamp: 0 })
    })

    it('many items', () => {
      const data = getRightData(ONE_DAY, [
        { value: 10, timestamp: ONE_DAY },
        { value: 0, timestamp: ONE_DAY / 2 }
      ])
      expect(data).toEqual({ value: 10, timestamp: ONE_DAY })
    })
  })
})
