import { create } from "zustand";

type LocationModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useLocationModal = create<LocationModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
