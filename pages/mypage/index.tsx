import React from 'react';
import { useRouter } from 'next/router';
import { SSubmitBtn } from '@pages/login';
import { LocalStorage } from '@src/utils';

const MyPage = () => {
  const router = useRouter();

  const onLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    LocalStorage.removeItem('token');
    router.push('/');
  };

  return (
    <div>
      My Page
      <SSubmitBtn onClick={onLogout}>Log Out</SSubmitBtn>
    </div>
  );
};

export default MyPage;
