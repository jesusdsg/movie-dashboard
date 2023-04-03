import { create } from "zustand";

export const themeStore = create((set) => ({
  darkMode: false,
  menu: false,
  toggleDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
  unsetDarkMode: () =>
    set((state: any) => ({
      darkMode: false,
    })),
  toggleMenu: () => set((state: { menu: boolean }) => ({ menu: !state.menu })),
}));
