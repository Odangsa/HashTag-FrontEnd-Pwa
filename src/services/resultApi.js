import { api } from '../lib/api';

export const getHashtagList = async (userId) => {
  try {
    const response = await api.get(`/${userId}/hashtag`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
