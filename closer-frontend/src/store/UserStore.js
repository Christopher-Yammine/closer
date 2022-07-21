import create from 'zustand';

const useStore = create((set) => ({
    user_id: 0,
    setUser: (user) => set((state) => ({ user_id: user})),
    removeAllBears: () => set({ bears: 0 }),
}))

export const useUserStore = useStore;