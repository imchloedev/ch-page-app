import { useQuery } from 'react-query';
import { getSearch } from '@pages/api/search';

export const useSearch = (keyword: string) => {
  return useQuery(['search', keyword], () => getSearch(keyword), {
    enabled: !!keyword,
  });
};
