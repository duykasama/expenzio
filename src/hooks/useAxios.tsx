import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_REST_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const getBaseUrl = () => {
    return `${baseUrl}/${apiVersion}`;
};

const useAxios = (url?: string) => {
    const localAxios = axios.create({
        baseURL: url || getBaseUrl(),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            withCredentials: true,
        },
    });
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = localAxios.interceptors.request.use(
            (request) => {
                if (!request.headers['Authorization'])
                    request.headers['Authorization'] =
                        `Bearer ${localStorage.getItem('token')}`;
                return request;
            },
            (error) => Promise.reject(error)
        );
        const responseInterceptor = localAxios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            localAxios.interceptors.request.eject(requestInterceptor);
            localAxios.interceptors.response.eject(responseInterceptor);
        };
    }, [url, localAxios]); // eslint-disable-line react-hooks/exhaustive-deps

    return localAxios;
};

export default useAxios;
