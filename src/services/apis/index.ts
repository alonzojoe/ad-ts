import api from "../api";
import { AxiosError } from "axios";

export interface ApiError {
    message: string;
    status?: number;
    code?: string;
}

type QueryParam = string | number | string[] | number[] | undefined | null;
type QueryParams = Record<string, QueryParam>

export class ApiServiceError extends Error {
    status?: number;
    code?: string;

    constructor(message: string, status?: number, code?: string) {
        super(message)
        this.name = 'ApiServiceError';
        this.status = status;
        this.code = code
    }
}

export const getData = async <T>(
    endpoint: string,
    params?: QueryParams
): Promise<T> => {
    try {
        const res = await api.get<T>(endpoint, { params })
        return res.data
    } catch (error) {
        throw handleApiError(error)
    }
}

export const deleteData = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await api.delete<T>(endpoint);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const handleApiError = (error: unknown): ApiServiceError => {
    if (error instanceof AxiosError) {
        const message = error.response?.data?.message || error.message || 'An error occured';
        const status = error.response?.status;
        const code = error.code

        console.log('Api call error', {
            message,
            status,
            code,
            endpoint: error.config?.url
        })



        return new ApiServiceError(message, status, code);
    }

    if (error instanceof Error) {
        console.error('Unexpected Error:', error.message);
        return new ApiServiceError(error.message);
    }


    console.error('Unknown Error:', error);
    return new ApiServiceError('An unknown error occurred');
}