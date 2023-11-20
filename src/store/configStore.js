import { create } from "zustand";

export const useConfiguratorStore = create((set) => ({
  isConfiguratorOpen: false,
  setIsConfiguratorOpen: (isConfiguratorOpen) => set({ isConfiguratorOpen }),
}));
