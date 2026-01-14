import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    changePassword,
    type UpdateUserPayload,
    type ChangePasswordPayload,
} from '../lib/api/users';

export const useUsers = (page = 1, limit = 10) => {
    return useQuery({
        queryKey: ['users', { page, limit }],
        queryFn: () => getAllUsers(page, limit),
    });
};

export const useUser = (id: string) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => getUserById(id),
        enabled: !!id,
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: UpdateUserPayload }) =>
            updateUser(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            queryClient.invalidateQueries({ queryKey: ['users', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

export const useChangePassword = () => {
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: ChangePasswordPayload }) =>
            changePassword(id, data),
    });
};
