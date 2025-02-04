import { create } from "zustand";

type ConfirmModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useConfirmModal = create<ConfirmModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
