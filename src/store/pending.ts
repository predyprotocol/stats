import { ContractTransaction } from 'ethers'
import create from 'zustand'

interface State {
  isPendingApproval: boolean
  isPendingTx: boolean
  pendingCloseSubVaultId: number
  setPendingApproval: (tx: ContractTransaction) => Promise<void>
  setPendingTx: (tx: ContractTransaction) => Promise<void>
  setPendingCloseTx: (
    subVaultIndex: number,
    tx: ContractTransaction
  ) => Promise<void>
}

const useStore = create<State>(set => ({
  isPendingApproval: false,
  isPendingTx: false,
  pendingCloseSubVaultId: -1,
  setPendingApproval: async (tx: ContractTransaction) => {
    set({ isPendingApproval: true })
    await tx.wait()
    set({ isPendingApproval: false })
  },
  setPendingTx: async (tx: ContractTransaction) => {
    set({ isPendingTx: true })
    await tx.wait()
    set({ isPendingTx: false })
  },
  setPendingCloseTx: async (subVaultId: number, tx: ContractTransaction) => {
    set({ pendingCloseSubVaultId: subVaultId })
    await tx.wait()
    set({ pendingCloseSubVaultId: -1 })
  }
}))

export default useStore
