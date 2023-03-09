import React from 'react';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import globalStyle from '@src/styles/globalStyle';
import Nav from '@src/components/common/Nav';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={globalStyle} />
        <Nav />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
