import { create } from "zustand";

interface SoloButtonStore {
  countAccs: number;
  button: string;
  pressType: string;
  delay: number;
  setCountAccs: (value: number) => void;
  setButton: (value: string) => void;
  setPressType: (value: string) => void;
  setDelay: (value: number) => void;
}

const useSoloButtonStore = create<SoloButtonStore>((set) => ({
  countAccs: 24,
  button: "Enter",
  pressType: "KeyPress",
  delay: 150,

  setCountAccs: (value) => set({ countAccs: value }),
  setButton: (value) => set({ button: value }),
  setPressType: (value) => set({ pressType: value }),
  setDelay: (value) => set({ delay: value }),
}));

export default useSoloButtonStore;
