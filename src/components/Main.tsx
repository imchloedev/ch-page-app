import React, { useMemo } from 'react';
import Link from 'next/link';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Button from '@src/components/common/Button';
import { theme } from '@src/styles/theme';
import InfoIcon from '../../public/icons/info.svg';
import 'swiper/css';
import { IContent, IContentList } from '@src/types/content';

const Main = ({ content }: IContentList<IContent>) => {
  SwiperCore.use([Autoplay]);

  const setting = useMemo<SwiperOptions>(
    () => ({
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 4500,
        pauseOnMouseEnter: true,
      },
    }),
    []
  );

  return (
    <SMainContainer>
      <Swiper {...setting}>
        {content?.slice(0, 5).map((list: IContent) => (
          <SwiperSlide key={list.id}>
            <SImgWrapper poster={list.backdrop_path} />
            <SImgTitleContainer>
              <h3>{list.title ? list.title : list.name}</h3>
              <p>{list.overview}</p>
              <SBtnContainer>
                <Button bgColor="white">
                  <Link
                    href={`/view/${list.title ? 1 : 2}/${
                      list.title ? 'movie' : 'tv'
                    }?id=${list.id}&title=${
                      list.title ? list.title : list.name
                    }`}
                  >
                    <SBtnInnerBox>
                      <InfoIcon />
                      More Info
                    </SBtnInnerBox>
                  </Link>
                </Button>
              </SBtnContainer>
            </SImgTitleContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SMainContainer>
  );
};

export default Main;

const SMainContainer = styled.main`
  position: relative;
  height: 640px;
  overflow: hidden;
`;

export const SImgWrapper = styled.div<{ poster: string }>`
  position: relative;
  height: 640px;
  background: ${({ poster }) =>
      `url("https://image.tmdb.org/t/p/original/${poster}")`}
    no-repeat;
  background-position: top center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0) 0%,
      rgba(34, 34, 34, 0.5) 66.15%,
      ${theme.colors.deepGrey} 100%
    );
    z-index: 10;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SImgTitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 2vw;
  z-index: 20;

  h3 {
    font-size: 24px;
  }

  p {
    margin-top: 20px;
    width: 50%;
    height: 4.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5em;
    color: ${theme.colors.lightGrey};
    font-size: 14px;
  }
`;

const SBtnContainer = styled.div`
  margin-top: 20px;

  button {
    transition: 0.3s ease-in;

    &:hover {
      background: ${theme.colors.middleGrey};

      a {
        color: ${theme.colors.white};
      }

      svg {
        path {
          fill: ${theme.colors.white};
        }
      }
    }
  }

  a {
    color: ${theme.colors.black};
  }
`;

const SBtnInnerBox = styled.div`
  ${theme.flex}
  gap: 3px;
  justify-content: center;

  svg {
    path {
      fill: ${theme.colors.black};
    }
  }
`;
