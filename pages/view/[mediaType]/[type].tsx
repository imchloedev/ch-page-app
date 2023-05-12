import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import Seo from '@src/components/common/Seo';
import ViewLayout from '@src/components/ViewLayout';
import { viewedListState } from '@src/atoms';
import { IContent } from '@src/types/content';
import { MEDIA_TYPE } from '@src/constants';
import { API_KEY, URL } from '@pages/api/media';

export interface IViewPgProps {
  title: string;
  media: IContent;
  mediaType: number;
}

const ViewPage = ({ mediaType, title, media }: IViewPgProps) => {
  const [viewedList, setViewedList] =
    useRecoilState<IContent[]>(viewedListState);

  useEffect(() => {
    setViewedList([media, ...viewedList]);
  }, []);

  return (
    <div>
      <Seo title={title}>
        <meta name="info" content={title} />
      </Seo>
      <ViewLayout media={media} mediaType={mediaType} />
    </div>
  );
};

export default ViewPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const { mediaType }: any = context.params;
  const { query } = context;
  const { id } = query;
  const { title } = query;
  const { MOVIE } = MEDIA_TYPE;
  const { data: results } = await axios.get(
    `https://${URL}/${
      Number(mediaType) === MOVIE ? 'movie' : 'tv'
    }/${id}?api_key=${API_KEY}`
  );
  return {
    props: {
      mediaType,
      title,
      media: results,
    },
  };
};
