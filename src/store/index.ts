import { create } from 'zustand'

interface WalletState {
  address: string | null
  balance: string
  isConnected: boolean
  setAddress: (address: string) => void
  setBalance: (balance: string) => void
  disconnect: () => void
}

export const useWalletStore = create<WalletState>((set) => ({
  address: null,
  balance: '0',
  isConnected: false,
  setAddress: (address) => set({ address, isConnected: true }),
  setBalance: (balance) => set({ balance }),
  disconnect: () => set({ address: null, balance: '0', isConnected: false }),
})) 