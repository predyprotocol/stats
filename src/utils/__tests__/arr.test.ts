import { sliceLastItems, trimArray } from '../helpers/arr'

describe('arr', () => {
  describe('sliceLastItems', () => {
    it('returns correct slices array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const slicedArr = sliceLastItems(arr, 5)

      expect(slicedArr).toEqual([6, 7, 8, 9, 10])
    })
  })

  describe('trimArray', () => {
    it('returns correct trimmed array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const slicedArr = trimArray(arr, 1)

      expect(slicedArr).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('trim all', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const slicedArr = trimArray(arr, 6)

      expect(slicedArr).toEqual([])
    })
  })
})
