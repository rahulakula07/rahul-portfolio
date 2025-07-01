// src/store/store.js
import { create } from 'zustand'

export const useStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}))