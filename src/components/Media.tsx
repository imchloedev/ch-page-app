import React from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Slider from '@src/components/common/Slider';
import { IContent, IContentList } from '@src/types/content';

const Media = ({ content }: IContentList<IContent>) => {
  return (
    <Slider>
      {content?.map((ctn: IContent) => (
        <SwiperSlide key={ctn.id}>
          <SPostWrapper>
            <Link
              href={`/view/${ctn.title ? 1 : 2}/${
                ctn.title ? 'movie' : 'tv'
              }?id=${ctn.id}&title=${ctn.title ? ctn.title : ctn.name}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${ctn.poster_path}`}
                alt={ctn.title ? ctn.title : ctn.name}
              />
            </Link>
          </SPostWrapper>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Media;

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
