import { create } from "zustand";

type Store = {
  visibility: boolean;
  setVisibility: () => void;
};

export const useStore = create<Store>((set) => ({
  visibility: false,
  setVisibility: () => set((state) => ({ visibility: !state.visibility })),
}));
