import axios, { AxiosError } from 'axios';
import { URL, API_KEY } from '@pages/api/media';

export const handleGetError = (err: unknown) => {
  if (err instanceof AxiosError) {
    const statusCode = err.response?.status;
    switch (statusCode) {
      case 400:
      case 401:
      case 402:
      case 403:
        alert('Errors occurred. Please retry.');
        return;
      default:
        return;
    }
  }
};

export const getRequestToken = async () => {
  const { data } = await axios.get(
    `https://${URL}/authentication/token/new?api_key=${API_KEY}`
  );
  localStorage.setItem('token', data.request_token);
  return data;
};
