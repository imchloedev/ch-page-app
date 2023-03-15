import axios from 'axios';

export const URL = process.env.NEXT_PUBLIC_M_BASE_URL;
export const API_KEY = process.env.NEXT_PUBLIC_M_API_KEY;

export const getTrending = async () => {
  const {
    data: { results },
  } = await axios.get(`https://${URL}/trending/all/day?api_key=${API_KEY}`);
  return results;
};
