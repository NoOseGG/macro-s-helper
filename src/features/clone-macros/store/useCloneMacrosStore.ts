import { create } from "zustand";

interface SoloButtonStore {
  countAccs: number;
  macros: string;
  delay: number;
  setCountAccs: (value: number) => void;
  setMacros: (value: string) => void;
  setDelay: (value: number) => void;
}

const useCloneMacrosStore = create<SoloButtonStore>((set) => ({
  countAccs: 24,
  macros: "",
  delay: 150,

  setCountAccs: (value) => set({ countAccs: value }),
  setMacros: (value) => set({ macros: value }),
  setDelay: (value) => set({ delay: value }),
}));

export default useCloneMacrosStore;
