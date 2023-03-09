import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Seo = (props: IProps) => {
  const { title, children } = props;

  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};

export default Seo;
