import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Seo from '@src/components/common/Seo';
import ViewLayout from '@src/components/ViewLayout';
import { API_KEY, URL } from '@pages/api/tvShows';
import { IMediaProps } from './movie';

const TvShow = ({ title, media, mediaType }: IMediaProps) => {
  return (
    <div>
      <Seo title={title}>
        <meta name="info" content={title} />
      </Seo>
      <ViewLayout media={media} mediaType={mediaType} />
    </div>
  );
};

export default TvShow;

export const getServerSideProps: GetServerSideProps = async context => {
  const { mediaType }: any = context.params;
  const { query } = context;
  const { id } = query;
  const { title } = query;
  const { data: results } = await axios.get(
    `https://${URL}/tv/${id}?api_key=${API_KEY}`
  );
  return {
    props: {
      mediaType,
      title,
      media: results,
    },
  };
};
