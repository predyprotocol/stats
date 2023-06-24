import { convertNotionalToString } from '..'

describe('utils', () => {
  describe('convertNotionalToString', () => {
    it('check', () => {
      expect(convertNotionalToString(-1)).toBe('-1.00')
      expect(convertNotionalToString(0)).toBe('0.00')
      expect(convertNotionalToString(1)).toBe('1.00')
      expect(convertNotionalToString(1000)).toBe('1.00k')
      expect(convertNotionalToString(2123)).toBe('2.12k')
      expect(convertNotionalToString(1000001)).toBe('1.00m')
    })
  })
})
