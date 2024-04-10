import axios from 'axios';
import { useEffect } from 'react';

const useAxios = (url: string | undefined) => {
    const localAxios = axios.create({
        baseURL: url || import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            withCredentials: true
        }
    });

    useEffect(() => {
        const requestInterceptor = localAxios.interceptors.request.use(
            request => {
                if (!request.headers['Authorization'])
                    request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                return request;
            },
            error => Promise.reject(error)
        );
        const responseInterceptor = localAxios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
                return Promise.reject(error);
            }
        );

        return ()=> {
            localAxios.interceptors.request.eject(requestInterceptor);
            localAxios.interceptors.response.eject(responseInterceptor);
        };
    }, [url, localAxios]);
};

export default useAxios;
