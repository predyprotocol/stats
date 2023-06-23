import create from 'zustand'

interface State {
  squartSide: boolean
  squartAmount: number
  marginAmount: number
  setSquartSide: (squartSide: boolean) => void
  setSquartAmount: (squartAmount: number) => void
  setMarginAmount: (marginAmount: number) => void
}

const useStore = create<State>(set => ({
  squartSide: false,
  squartAmount: 0,
  marginAmount: 0,
  setSquartSide: (squartSide: boolean) => set({ squartSide }),
  setSquartAmount: (squartAmount: number) => set({ squartAmount }),
  setMarginAmount: (marginAmount: number) => set({ marginAmount })
}))

export default useStore
