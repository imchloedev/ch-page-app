import '@src/styles/globals.css';
import React from 'react';
import { Global } from '@emotion/react';
import globalStyle from '@src/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
