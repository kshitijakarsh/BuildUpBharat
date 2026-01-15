import client from './client';
import type { PaginatedResponse, SingleResponse } from './types';


export interface User {
    _id: string;
    id?: string; // Fallback for some APIs returning id instead of _id
    fullName: string;
    email: string;
    mobileNumber: string;
    role: 'user' | 'admin';
    createdAt: string;
    updatedAt: string;
    profileImage?: string;
    membership?: string;

    // Education & Professional
    currentRole?: string;
    institution?: string;
    degree?: string;
    course?: string;
    yearOfGraduation?: string;
    graduationYear?: number; // Postman uses graduationYear as number, code used yearOfGraduation string. Supporting both or preferring Postman's.
    studentId?: string;
    interests?: string[];

    // Location
    country?: string;
    state?: string;
    city?: string;
    pinCode?: string;
    fullAddress?: string; // Postman uses fullAddress
}

export interface UpdateUserPayload {
    fullName?: string;
    email?: string;
    mobileNumber?: string;
    profileImage?: string;
    membership?: string;

    // Education & Professional
    currentRole?: string;
    institution?: string;
    degree?: string;
    course?: string;
    graduationYear?: number;
    studentId?: string;
    interests?: string[];

    // Location
    country?: string;
    state?: string;
    city?: string;
    pinCode?: string;
    fullAddress?: string;
}

export interface ChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

export const getAllUsers = async (page = 1, limit = 10) => {
    const response = await client.get<PaginatedResponse<User>>('/users', {
        params: { page, limit },
    });
    return response.data;
};

export const getUserById = async (id: string) => {
    const response = await client.get<SingleResponse<User>>(`/users/${id}`);
    return response.data;
};

export const updateUser = async (id: string, data: UpdateUserPayload) => {
    const response = await client.put<SingleResponse<User>>(`/users/${id}`, data);
    return response.data;
};

export const deleteUser = async (id: string) => {
    const response = await client.delete(`/users/${id}`);
    return response.data;
};

export const changePassword = async (id: string, data: ChangePasswordPayload) => {
    const response = await client.patch(`/users/${id}/password`, data);
    return response.data;
};
