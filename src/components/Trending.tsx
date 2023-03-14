import React from 'react';
import { SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Slider from './common/Slider';
import { IContent } from '../types/content';

const Trending = ({ trendings }: any) => {
  return (
    <Slider>
      {trendings?.map((trending: IContent) => (
        <SwiperSlide key={trending.id}>
          <SPostWrapper>
            <img
              src={`https://image.tmdb.org/t/p/original/${trending.poster_path}`}
              alt={trending.title}
            />
          </SPostWrapper>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Trending;

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
