import { api } from '../lib/api';

export const postFormData = async (formData) => {
  try {
    const response = await api.post('/upload', formData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
