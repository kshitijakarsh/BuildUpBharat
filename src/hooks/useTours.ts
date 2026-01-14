import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getAllTours,
    getTourById,
    showInterest,
    removeInterest,
    getMyInterests,
    createTour,
    updateTour,
    deleteTour,
    getTourInterests,
    type CreateTourPayload,
    type UpdateTourPayload,
} from '../lib/api/tours';

export const useTours = (page = 1, limit = 10, category?: string) => {
    return useQuery({
        queryKey: ['tours', { page, limit, category }],
        queryFn: () => getAllTours(page, limit, category),
    });
};

export const useTour = (id: string) => {
    return useQuery({
        queryKey: ['tours', id],
        queryFn: () => getTourById(id),
        enabled: !!id,
    });
};

export const useShowInterest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => showInterest(id),
        onSuccess: (_, id) => {
            queryClient.invalidateQueries({ queryKey: ['tours'] });
            queryClient.invalidateQueries({ queryKey: ['tours', id] });
            queryClient.invalidateQueries({ queryKey: ['my-interests'] });
        },
    });
};

export const useRemoveInterest = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => removeInterest(id),
        onSuccess: (_, id) => {
            queryClient.invalidateQueries({ queryKey: ['tours'] });
            queryClient.invalidateQueries({ queryKey: ['tours', id] });
            queryClient.invalidateQueries({ queryKey: ['my-interests'] });
        },
    });
};

export const useMyInterests = () => {
    return useQuery({
        queryKey: ['my-interests'],
        queryFn: getMyInterests,
    });
};

export const useCreateTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: CreateTourPayload) => createTour(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tours'] });
        },
    });
};

export const useUpdateTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: UpdateTourPayload }) =>
            updateTour(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['tours'] });
            queryClient.invalidateQueries({ queryKey: ['tours', variables.id] });
        },
    });
};

export const useDeleteTour = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteTour(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tours'] });
        },
    });
};

export const useTourInterests = (id: string) => {
    return useQuery({
        queryKey: ['tours', id, 'interests'],
        queryFn: () => getTourInterests(id),
        enabled: !!id,
    });
};
