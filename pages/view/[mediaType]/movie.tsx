import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Seo from '@src/components/common/Seo';
import ViewLayout from '@src/components/ViewLayout';
import { API_KEY, URL } from '@pages/api/tvShows';

import { IContent } from '@src/types/content';

export interface IMediaProps {
  query?: any;
  title: string;
  media: IContent;
  mediaType: number;
}

const Movie = ({ mediaType, title, media }: IMediaProps) => {
  return (
    <div>
      <Seo title={title}>
        <meta name="info" content={title} />
      </Seo>
      <ViewLayout media={media} mediaType={mediaType} />
    </div>
  );
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async context => {
  const { mediaType }: any = context.params;
  const { query } = context;
  const { id } = query;
  const { title } = query;
  const { data: results } = await axios.get(
    `https://${URL}/movie/${id}?api_key=${API_KEY}`
  );
  return {
    props: {
      mediaType,
      title,
      media: results,
    },
  };
};
