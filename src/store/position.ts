import { BigNumber } from 'ethers'
import create from 'zustand'
import { ZERO } from '../constants'

interface State {
  after2Squart: BigNumber
  afterPerp: BigNumber
  afterEntryUpdate: BigNumber
  additionalMargin: BigNumber
  setAfter2Squart: (after2Squart: BigNumber) => void
  setAfterPerp: (afterPerp: BigNumber) => void
  setAfterEntryUpdate: (afterEntryUpdate: BigNumber) => void
  setAdditionalMargin: (additionalMargin: BigNumber) => void
}

const useStore = create<State>(set => ({
  after2Squart: ZERO,
  afterPerp: ZERO,
  afterEntryUpdate: ZERO,
  additionalMargin: ZERO,
  setAfter2Squart: (after2Squart: BigNumber) => set({ after2Squart }),
  setAfterPerp: (afterPerp: BigNumber) => set({ afterPerp }),
  setAfterEntryUpdate: (afterEntryUpdate: BigNumber) =>
    set({ afterEntryUpdate }),
  setAdditionalMargin: (additionalMargin: BigNumber) =>
    set({ additionalMargin })
}))

export default useStore
