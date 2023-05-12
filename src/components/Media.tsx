import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
              <Image
                src={`https://image.tmdb.org/t/p/original/${ctn.poster_path}`}
                alt={ctn.id}
                width={300}
                height={300}
                sizes="(max-width: 768px) 10vw, 768px"
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
