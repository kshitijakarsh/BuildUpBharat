export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}

export interface SingleResponse<T> {
    data: T;
    message?: string;
}
