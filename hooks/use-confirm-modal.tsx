import { create } from "zustand";

type ConfirmModal = {
    isOpen: boolean;
    onOpen: (confirmFn: () => void) => void;
    onClose: () => void;
    confirmFn?: () => void;
};

export const useConfirmModal = create<ConfirmModal>((set) => ({
    confirmFn: undefined,
    isOpen: false,
    onOpen: (confirmFn: () => void) => set({ isOpen: true, confirmFn }),
    onClose: () => set({ isOpen: false, confirmFn: undefined }),
}));
