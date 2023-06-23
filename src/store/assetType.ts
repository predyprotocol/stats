import create from 'zustand'
import { AssetType } from '../constants/enum'

interface State {
  selectedAsset: AssetType
  isStable: boolean
  selectAsset: (selectedAsset: AssetType) => void
  setIsStable: (isStable: boolean) => void
}

const useStore = create<State>(set => ({
  selectedAsset: AssetType.WETH,
  isStable: false,
  selectAsset: (selectedAsset: AssetType) => set({ selectedAsset }),
  setIsStable: (isStable: boolean) => set({ isStable })
}))

export default useStore
