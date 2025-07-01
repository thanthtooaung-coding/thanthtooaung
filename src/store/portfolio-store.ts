import { create } from "zustand"

interface MousePosition {
  x: number
  y: number
}

interface PortfolioState {
  activeSection: string
  mousePosition: MousePosition
  isMobileMenuOpen: boolean
  setActiveSection: (section: string) => void
  setMousePosition: (position: MousePosition) => void
  setMobileMenuOpen: (isOpen: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: "about",
  mousePosition: { x: 0, y: 0 },
  isMobileMenuOpen: false,
  setActiveSection: (section: string) => set({ activeSection: section }),
  setMousePosition: (position: MousePosition) => set({ mousePosition: position }),
  setMobileMenuOpen: (isOpen: boolean) => set({ isMobileMenuOpen: isOpen }),
}))
