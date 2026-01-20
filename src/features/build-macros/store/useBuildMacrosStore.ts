import { create } from "zustand";

interface BuildMacrosStore {
  countAccs: number;
  macros: string[];
  delays: number[];
  innerDelays: number[];

  setCountAccs: (value: number) => void;
  setMacros: (value: string[]) => void;
  setDelays: (value: number[]) => void;
  setInnerDelays: (value: number[]) => void;
}

const useBuildMacros = create<BuildMacrosStore>()((set) => ({
  countAccs: 24,
  macros: [],
  delays: [5000],
  innerDelays: [150],

  setCountAccs: (value) => set({ countAccs: value }),
  setMacros: (value) => set({ macros: value }),
  setDelays: (value) => set({ delays: value }),
  setInnerDelays: (value) => set({ innerDelays: value }),
}));

export default useBuildMacros;
