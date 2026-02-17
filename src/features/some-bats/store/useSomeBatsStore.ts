import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SomeBatsStore {
  countAccs: number;
  countReloads: number;
  batsName: string;
  macros: string;

  setCountAccs: (value: number) => void;
  setCountReloads: (value: number) => void;
  setBatsName: (value: string) => void;
  setMacros: (value: string) => void;
}

const useSomeBatsStore = create<SomeBatsStore>()(
  persist(
    (set) => ({
      countAccs: 24,
      countReloads: 1,
      batsName: "",
      macros: "",

      setCountAccs: (value) => set({ countAccs: value }),
      setCountReloads: (value) => set({ countReloads: value }),
      setBatsName: (value) => set({ batsName: value }),
      setMacros: (value) => set({ macros: value }),
    }),
    {
      name: "some-bats-storage",
    },
  ),
);

export default useSomeBatsStore;
