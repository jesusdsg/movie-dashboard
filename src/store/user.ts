import { create } from "zustand";

export const userStore = create((set) => ({
  isLogged: false,
  setLogged: () => set((state: { isLogged: boolean }) => ({ isLogged: true })),
  unsetLogged: () =>
    set((state: any) => ({
      isLogged: false,
    })),
}));
