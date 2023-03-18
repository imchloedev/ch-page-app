import { useQuery } from 'react-query';
import { getSearch } from '@pages/api/search';

const useSearch = (keyword: string) => {
  return useQuery(['search', keyword], () => getSearch(keyword), {
    enabled: !!keyword,
  });
};

export default useSearch;
