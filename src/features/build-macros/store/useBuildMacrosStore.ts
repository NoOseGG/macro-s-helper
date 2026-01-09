import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SoloButtonStore {
  countAccs: number;
  batsName: string;
  macros: string;

  setCountAccs: (value: number) => void;
  setBatsName: (value: string) => void;
  setMacros: (value: string) => void;
}

const useSomeBatsStore = create<SoloButtonStore>()(
  persist(
    (set) => ({
      countAccs: 24,
      batsName: "",
      macros: "",

      setCountAccs: (value) => set({ countAccs: value }),
      setBatsName: (value) => set({ batsName: value }),
      setMacros: (value) => set({ macros: value }),
    }),
    {
      name: "some-bats-storage",
    }
  )
);

export default useSomeBatsStore;
