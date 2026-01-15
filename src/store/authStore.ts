import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../lib/api/users';

interface AuthState {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: 'auth-storage', // name of the item in the storage (must be unique)
        }
    )
);
