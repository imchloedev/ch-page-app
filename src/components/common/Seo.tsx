import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  pageType: string;
  hostName: string;
  description: string;
}

const Seo = (props: IProps) => {
  const { title, pageType, hostName, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content="MPLEX" />
      <meta property="mplex:pageType" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={hostName} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
