import create from 'zustand';
import { persist } from 'zustand/middleware'
const useStore = create(
    persist(
        (set) => ({
            user_id: null,
            profile_picture: "",
            token: 0,
            usertype: "",
            setUser: (user) => set((state) => ({ user_id: user })),
            setProfile: (pic) => set((state) => ({ profile_picture: pic })),
            setToken: (tkn) => set((state) => ({ token: tkn })),
            setUsertype: (usrtype) => set((state) => ({ usertype: usrtype })),
            removeUserId: () => set({ user_id: null }),
            removeProfile: () => set({ profile_picture: "" }),
            removeToken: () => set({ token: 0 }),
            removeUsertype: () => set({ usertype: "" }),


        })))

export const useUserStore = useStore;