import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BuildMacrosStore {
  countAccs: number;
  macros: string[];
  delays: number[];

  setCountAccs: (value: number) => void;
  setMacros: (value: string[]) => void;
  setDelays: (value: number[]) => void;
}

const useBuildMacros = create<BuildMacrosStore>()(
  persist(
    (set) => ({
      countAccs: 24,
      macros: [],
      delays: [],

      setCountAccs: (value) => set({ countAccs: value }),
      setMacros: (value) => set({ macros: value }),
      setDelays: (value) => set({ delays: value }),
    }),
    {
      name: "some-bats-storage",
    }
  )
);

export default useBuildMacros;
