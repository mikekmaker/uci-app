import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  pending: 0,

  start: () =>
    set((state) => ({ pending: state.pending + 1 })),

  stop: () =>
    set((state) => ({
      pending: Math.max(state.pending - 1, 0),
    })),
}));