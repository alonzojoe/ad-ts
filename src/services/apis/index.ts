import api from "../api";
import { AxiosError } from "axios";

export interface ApiError {
    message: string;
    status?: number;
    code?: string;
}

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

export const getData = async <APIResponse>(endpoint: string): Promise<APIResponse> => {
    try {
        const res = await api(endpoint);

        return res.data as APIResponse
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message)
        }
        throw error;
    }

}


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