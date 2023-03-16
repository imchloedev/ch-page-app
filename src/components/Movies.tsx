import React from 'react';
import Link from 'next/link';
import Slider from './common/Slider';
import { SwiperSlide } from 'swiper/react';
import { SPostWrapper } from './TvShows';
import { IContent } from '../types/content';

const Movies = ({ movies }: any) => {
  return (
    <Slider>
      {movies?.map((movie: IContent) => (
        <SwiperSlide key={movie.id}>
          <SPostWrapper>
            <Link href={`/view/1/movie?id=${movie.id}&title=${movie.title}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </SPostWrapper>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Movies;
