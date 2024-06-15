import axios, { AxiosError, AxiosResponse } from 'axios';
export const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
export const API_KEY = import.meta.env.VITE_AV_API_KEY;

// TODO: prepare axios client for future needs, currently rtk query covers all use cases
export const api = axios.create({
  baseURL: BACKEND_HOST,
});

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (_: AxiosError) => {
    // TODO: handle error with sentry or other error reporting tool
  }
);
