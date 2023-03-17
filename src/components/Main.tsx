import React from 'react';
import Link from 'next/link';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Button from '@src/components/common/Button';
import { theme } from '@src/styles/theme';
import InfoIcon from '../../public/icons/info.svg';
import 'swiper/css';

const Main = ({ mains }: any) => {
  SwiperCore.use([Autoplay]);

  const setting = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <SMainContainer>
      <Swiper {...setting}>
        {mains?.main.map((list: any) => (
          <SwiperSlide key={list.id}>
            <Link href="/">
              <SImgWrapper>
                <img src={list.poster} />
              </SImgWrapper>
              <SImgTitleContainer>
                <img src={list.titleImg} />
                <p>{list.info}</p>
                <SBtnContainer>
                  <Button bgColor="white">
                    <SBtnInnerBox>
                      <InfoIcon />
                      More Info
                    </SBtnInnerBox>
                  </Button>
                </SBtnContainer>
              </SImgTitleContainer>
            </Link>
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

export const SImgWrapper = styled.div`
  position: relative;
  height: 640px;

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

  img {
    min-width: 5vw;
    display: block;
  }

  p {
    margin-top: 20px;
    width: 50%;
    height: 5.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.8em;
  }
`;

const SBtnContainer = styled.div`
  margin-top: 20px;
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
