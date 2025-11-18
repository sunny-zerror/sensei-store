import { create } from "zustand";

const useOpenDescription = create((set) => ({
  isOpen: false,
  activeSection: null,
  openDesc: (data) => set({ isOpen: true, activeSection: data }),
  closeDesc: () => set({ isOpen: false, activeSection: null }),
  setIsOpen: (value) => set((state) => ({
    ...state,
    isOpen: value,
    ...(value ? {} : { activeSection: null }), 
  })),
}));

export default useOpenDescription;
