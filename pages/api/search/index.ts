import axios from 'axios';
import { URL, API_KEY } from '@pages/api/media';

export const getSearch = async (keyword: string) => {
  const {
    data: { results },
  } = await axios.get(
    `https://${URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
  );
  return results;
};
