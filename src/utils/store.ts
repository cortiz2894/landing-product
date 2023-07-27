import { create } from 'zustand'
import { Theme } from '@/utils/types'

interface IState {
  // main menu
  showMenu: boolean
  toggleMenu: () => void
  closeMenu: () => void

  // page transition
  transition: string
  setTransition: (v: string) => void

  theme: Theme
  setTheme: (v: Theme) => void
}

const useStore = create<IState>(set => ({
  // main menu
  showMenu: false,
  toggleMenu: () => set(state => ({ showMenu: !state.showMenu })),
  closeMenu: () => set({ showMenu: false }),

  // page transition
  transition: '',
  setTransition: transition => set({ transition }),

  // page theme
  theme: 'dark',
  setTheme: theme => set({ theme })
}))

export default useStore
