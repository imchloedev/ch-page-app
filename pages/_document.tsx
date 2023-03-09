import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="MPLEX" />
        <meta
          property="og:title"
          content="MPLEX: Ratings and Reviews for Movies and TV shows"
        />
        <meta
          property="og:description"
          content="MPLEX is the site where you can rate movies or TV shows you've watched and also leave reviews."
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
