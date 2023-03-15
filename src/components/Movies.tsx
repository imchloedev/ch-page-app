import React from 'react';
import Slider from './common/Slider';
import { SwiperSlide } from 'swiper/react';
import { SPostWrapper } from './Trending';
import { IContent } from '../types/content';

const Movies = ({ movies }: any) => {
  return (
    <Slider>
      {movies?.map((movie: IContent) => (
        <SwiperSlide key={movie.id}>
          <SPostWrapper>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </SPostWrapper>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Movies;
