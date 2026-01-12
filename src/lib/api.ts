import axios from 'axios';

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// --- Type Definitions ---
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
        user?: any;
    };
    message?: string;
}

// --- API Functions ---
export const registerUi = async (data: RegisterPayload) => {
    const response = await client.post<AuthResponse>('/auth/register', data);
    return response.data;
};

export const loginUi = async (data: LoginPayload) => {
    const response = await client.post<AuthResponse>('/auth/login', data);
    return response.data;
};

export const getProfileUi = async () => {
    const response = await client.get('/auth/profile');
    return response.data;
};

export const logoutUi = async () => {
    const response = await client.post('/auth/logout');
    return response.data;
};

export default client;
