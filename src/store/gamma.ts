import create from 'zustand'
import { PositionStyle } from '../constants/enum'

interface State {
  targetStrategy: PositionStyle
  setTargetStrategy: (targetStrategy: PositionStyle) => void
}

const useStore = create<State>(set => ({
  targetStrategy: PositionStyle.Neutral,
  setTargetStrategy: (targetStrategy: PositionStyle) => set({ targetStrategy })
}))

export default useStore
