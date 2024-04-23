import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosRequestConfig = {
  baseURL: API_BASE_URL,
  responseType: 'json',
};

const api = axios.create(axiosRequestConfig);

export { api };
