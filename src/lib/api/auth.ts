import client from './client';
import type { SingleResponse } from './types';
import type { User } from './users';

export interface RegisterPayload {
    fullName: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    data: {
        token: string;
        user: User;
    };
    message?: string;
}

export const registerUi = async (data: RegisterPayload) => {
    const response = await client.post<AuthResponse>('/auth/register', data);
    console.log(response.data);
    return response.data;
};

export const loginUi = async (data: LoginPayload) => {
    const response = await client.post<AuthResponse>('/auth/login', data);
    return response.data;
};

export const getProfileUi = async () => {
    const response = await client.get<SingleResponse<User>>('/auth/profile');
    return response.data;
};

export const logoutUi = async () => {
    const response = await client.post('/auth/logout');
    return response.data;
};
