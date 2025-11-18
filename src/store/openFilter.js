import { create } from "zustand";

const useOpenFilter = create((set) => ({
    openFilter: false,
    setOpenFilter: (value) => set({ openFilter: value }),
}));

export default useOpenFilter;