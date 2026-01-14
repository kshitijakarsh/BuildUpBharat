import { useMutation, useQuery } from '@tanstack/react-query';
import {
    registerUi,
    loginUi,
    getProfileUi,
    logoutUi,
    type RegisterPayload,
    type LoginPayload,
} from '../lib/api/auth';

export const useRegister = () => {
    return useMutation({
        mutationFn: (data: RegisterPayload) => registerUi(data),
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginPayload) => loginUi(data),
        onSuccess: (data) => {
            if (data?.data?.token) {
                localStorage.setItem('token', data.data.token);
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
    return useMutation({
        mutationFn: logoutUi,
        onSuccess: () => {
            localStorage.removeItem('token');
        },
    });
};
