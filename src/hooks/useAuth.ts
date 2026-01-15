import { useMutation, useQuery } from '@tanstack/react-query';
import {
    registerUi,
    loginUi,
    getProfileUi,
    logoutUi,
    type RegisterPayload,
    type LoginPayload,
} from '../lib/api/auth';
import { useAuthStore } from '../store/authStore';
import Cookies from 'js-cookie';

export const useRegister = () => {
    const setUser = useAuthStore((state) => state.setUser);
    return useMutation({
        mutationFn: (data: RegisterPayload) => registerUi(data),
        onSuccess: (data) => {
            if (data?.data?.token) {
                Cookies.set('token', data.data.token, { expires: 7 }); // Expires in 7 days
                setUser(data.data.user);
            }
        },
    });
};

export const useLogin = () => {
    const setUser = useAuthStore((state) => state.setUser);
    return useMutation({
        mutationFn: (data: LoginPayload) => loginUi(data),
        onSuccess: (data) => {
            if (data?.data?.token) {
                Cookies.set('token', data.data.token, { expires: 7 });
                setUser(data.data.user);
            }
        },
    });
};

export const useProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: getProfileUi,
        retry: false, // Don't retry if 401/403
    });
};

export const useLogout = () => {
    const logoutStore = useAuthStore((state) => state.logout);
    return useMutation({
        mutationFn: logoutUi,
        onSuccess: () => {
            Cookies.remove('token');
            logoutStore();
        },
    });
};
