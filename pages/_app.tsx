import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import globalStyle from '@src/styles/globalStyle';
import Nav from '@src/components/common/Nav';
import Footer from '@src/components/common/Footer';
import { theme } from '@src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
