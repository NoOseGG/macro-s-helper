import { create } from "zustand";

interface SoloButtonStore {
  countAccs: number;
  macros: string;
  setCountAccs: (value: number) => void;
  setMacros: (value: string) => void;
}

const useCloneMacrosStore = create<SoloButtonStore>((set) => ({
  countAccs: 24,
  macros: "",

  setCountAccs: (value) => set({ countAccs: value }),
  setMacros: (value) => set({ macros: value }),
}));

export default useCloneMacrosStore;
