// api.ts
import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});


api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
     
        if (error.response?.status === 401) {
           
            console.error('Unauthorized access - please login again');
        } else if (error.response?.status === 500) {
            console.error('Server error - please try again later');
        }
        return Promise.reject(error);
    }
);

export default api;