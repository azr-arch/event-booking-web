import { create } from "zustand";

type EditEventModal = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

export const useEditEventModal = create<EditEventModal>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined }),
}));
