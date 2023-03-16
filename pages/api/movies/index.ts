import axios from 'axios';
import { API_KEY, URL } from '../tvShows';

export const getMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`https://${URL}/movie/popular?api_key=${API_KEY}`);
  return results;
};
