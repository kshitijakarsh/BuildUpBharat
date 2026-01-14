import client from './client';
import type { PaginatedResponse, SingleResponse } from './types';
import type { User } from './users';


export interface ItineraryItem {
    day: number;
    title: string;
    description: string;
}

export interface Tour {
    _id: string;
    title: string;
    tagline: string;
    description: string;
    category: string;
    image: string;
    location: string;
    address: string;
    price: number;
    duration: string;
    startDate: string;
    endDate: string;
    bookingDeadline: string;
    highlights: string[];
    itinerary: ItineraryItem[];
    interestedUsersCount?: number;
    isInterested?: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTourPayload {
    title: string;
    tagline: string;
    description: string;
    category: string;
    image: string;
    location: string;
    address: string;
    price: number;
    duration: string;
    startDate: string;
    endDate: string;
    bookingDeadline: string;
    highlights: string[];
    itinerary: ItineraryItem[];
}

export interface UpdateTourPayload extends Partial<CreateTourPayload> { }

export const getAllTours = async (page = 1, limit = 10, category?: string) => {
    const response = await client.get<PaginatedResponse<Tour>>('/tours', {
        params: { page, limit, category },
    });
    return response.data;
};

export const getTourById = async (id: string) => {
    const response = await client.get<SingleResponse<Tour>>(`/tours/${id}`);
    return response.data;
};

export const showInterest = async (id: string) => {
    const response = await client.post(`/tours/${id}/interest`);
    return response.data;
};

export const removeInterest = async (id: string) => {
    const response = await client.delete(`/tours/${id}/interest`);
    return response.data;
};

export const getMyInterests = async () => {
    const response = await client.get<PaginatedResponse<Tour>>('/tours/my-interests');
    return response.data;
};

export const createTour = async (data: CreateTourPayload) => {
    const response = await client.post<SingleResponse<Tour>>('/tours', data);
    return response.data;
};

export const updateTour = async (id: string, data: UpdateTourPayload) => {
    const response = await client.put<SingleResponse<Tour>>(`/tours/${id}`, data);
    return response.data;
};

export const deleteTour = async (id: string) => {
    const response = await client.delete(`/tours/${id}`);
    return response.data;
};

export const getTourInterests = async (id: string) => {
    const response = await client.get<SingleResponse<User[]>>(`/tours/${id}/interests`);
    return response.data;
};
