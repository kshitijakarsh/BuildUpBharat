import { useMutation, useQuery } from '@tanstack/react-query';
import {
    registerUi,
    loginUi,
    getProfileUi,
    logoutUi,
    forgotPasswordUi,
    verifyOtpUi,
    resetPasswordUi,
    type RegisterPayload,
    type LoginPayload,
} from '../lib/api/auth';
import { useAuthStore } from '../store/authStore';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export const useRegister = () => {
    const setUser = useAuthStore((state) => state.setUser);
    return useMutation({
        mutationFn: (data: RegisterPayload) => registerUi(data),
        onSuccess: (data) => {
            if (data?.data?.token) {
                Cookies.set('token', data.data.token, { expires: 7 }); // Expires in 7 days
                setUser(data.data.user);
                toast.success('Registration successful! Welcome aboard.');
            }
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
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
                toast.success('Login successful!');
            }
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
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
            toast.success('Logged out successfully');
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Logout failed');
        },
    });
};

export const useForgotPassword = () => {
    return useMutation({
        mutationFn: (data: { email: string }) => forgotPasswordUi(data),
        onSuccess: () => {
            toast.success('OTP sent to your email');
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Failed to send OTP');
        },
    });
};

export const useVerifyOtp = () => {
    return useMutation({
        mutationFn: (data: { email: string, otp: string }) => verifyOtpUi(data),
        onSuccess: () => {
            toast.success('OTP verified successfully');
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Failed to verify OTP');
        },
    });
};

export const useResetPassword = () => {
    return useMutation({
        mutationFn: (data: { email: string, otp: string, newPassword: string, confirmPassword: string }) => resetPasswordUi(data),
        onSuccess: () => {
            toast.success('Password reset successful! You can now login with your new password.');
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Failed to reset password');
        },
    });
};
