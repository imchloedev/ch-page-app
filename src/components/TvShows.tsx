import React from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Slider from './common/Slider';
import { IContent } from '../types/content';

const TvShows = ({ tvShows }: any) => {
  return (
    <Slider>
      {tvShows?.map((tvShow: IContent) => (
        <SwiperSlide key={tvShow.id}>
          <SPostWrapper>
            <Link href={`/view/2/tv?id=${tvShow.id}&title=${tvShow.name}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`}
                alt={tvShow.title}
              />
            </Link>
          </SPostWrapper>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default TvShows;

export const SPostWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
