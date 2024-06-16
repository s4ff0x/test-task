import axios, { AxiosError, AxiosResponse } from 'axios';
// import.meta.env.VITE_BACKEND_HOST;
// import.meta.env.VITE_AV_API_KEY;

// TODO: replace with env var above, currently like this because of deploy to netlify
export const BACKEND_HOST = 'https://www.alphavantage.co/'; // TODO: replace with env var, currently like this because of deploy to netlify
export const API_KEY = 'RIBXT3XYLI69PC0Q';

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
