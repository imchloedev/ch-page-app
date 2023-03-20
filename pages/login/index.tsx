import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import Seo from '@src/components/common/Seo';
import Spinner from '@src/components/common/Spinner';
import { userInfoState } from '@src/atoms/userInfo';
import { useGetToken } from '@src/hooks';
import { theme } from '@src/styles/theme';

const LoginPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { isLoading, refetch } = useGetToken();

  const onLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <Seo title="Login">
        <meta name="login" content="login" />
      </Seo>
      <SLoginPageLayout>
        <div>
          <SInput
            type="email"
            name="username"
            onChange={handleUserInfo}
            placeholder="email"
          />
          <SInput
            type="password"
            name="password"
            onChange={handleUserInfo}
            placeholder="password"
          />
        </div>
        <SSubmitBtn onClick={onLogin}>Log In</SSubmitBtn>
        {isLoading && <Spinner />}
      </SLoginPageLayout>
    </div>
  );
};

export default LoginPage;

const SLoginPageLayout = styled.div`
  margin-top: 180px;
  padding: 0 2vw;

  ${theme.mq[1]} {
    max-width: 580px;
    margin: 180px auto 0 auto;
  }
`;

const SInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.white};
  margin-bottom: 20px;
  color: white;
`;

export const SSubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  margin-top: 40px;
`;
