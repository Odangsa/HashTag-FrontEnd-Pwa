import axios from 'axios';

const axiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  responseType: 'json',
};

const api = axios.create(axiosRequestConfig);

export { api };
