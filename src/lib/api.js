import axios from 'axios';
// import https from 'https';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosRequestConfig = {
  baseURL: API_BASE_URL,
  responseType: 'json',
  withCredentials: true,
};

const api = axios.create(axiosRequestConfig);

export { api };
