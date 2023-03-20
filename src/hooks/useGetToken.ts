import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getRequestToken, handleGetError } from '@pages/api/admin';
import { LocalStorage } from '@src/utils';

const useGetToken = () => {
  const router = useRouter();
  return useQuery(['refresh_token'], getRequestToken, {
    enabled: false,
    onSuccess: result => {
      console.log(result);
      LocalStorage.setItem('token', result?.request_token);
      router.push('/');
    },
    onError: handleGetError,
  });
};

export default useGetToken;
