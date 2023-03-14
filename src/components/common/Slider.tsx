import React from 'react';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface ISlideProps {
  children: React.ReactNode;
}

const Slider = ({ children }: ISlideProps) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const setting = {
    spaceBetween: 20,
    slidesPerView: 3.5,
    breakpoints: {
      768: {
        slidesPerView: 4.5,
      },
      1200: {
        slidesPerView: 5.5,
      },
    },
    pagination: {
      type: 'progressbar',
    },
    navigation: true,
  };
  return (
    <SSlideContainer>
      <Swiper {...setting}>{children}</Swiper>
    </SSlideContainer>
  );
};

export default Slider;

const SSlideContainer = styled.div`
  .swiper {
    transition: 0.3s ease-in;

    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        transition: 0.3s ease-in;
        opacity: 1;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 24px !important;
    height: 24px !important;
    color: white !important;
    opacity: 0;

    &::after {
      font-size: 24px;
    }

    &.swiper-button-disabled {
      opacity: 0 !important;
    }
  }

  .swiper-pagination-progressbar {
    top: auto !important;
    bottom: 0 !important;

    .swiper-pagination-progressbar-fill {
      background: white !important;
      opacity: 0.2;
    }
  }
`;
