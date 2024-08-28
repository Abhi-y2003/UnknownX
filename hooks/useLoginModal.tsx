import { create } from 'zustand'

interface LoginModalStore {
    isopen: boolean;
    onOpen: () => void;
    onClose: () => void;
};


const useLoginModal = create<LoginModalStore>((set) => ({
    isopen: true,
    onOpen: () => set({ isopen: true }),
    onClose: () => set({ isopen: false }),
}));

export default useLoginModal;