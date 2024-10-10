import { create } from "zustand";

type VenueModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useVenueModal = create<VenueModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
