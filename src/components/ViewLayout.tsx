import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import Star from '../../public/icons/star.svg';
import { theme } from '@src/styles/theme';
import { IContent } from '@src/types/content';
import { MEDIA_TYPE } from '@src/constants';
import Image from 'next/image';
import { mqState } from '@src/atoms/mq';

interface IViewProps {
  media: IContent;
  mediaType: number;
}

const ViewLayout = ({ media, mediaType }: IViewProps) => {
  const [mq, setMq] = useRecoilState<number>(mqState);
  const { MOVIE } = MEDIA_TYPE;
  const type = Number(mediaType);
  const isMovie = type === MOVIE;

  useEffect(() => {
    const resizeWindow = () => {
      setMq(window.innerWidth);
    };
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  return (
    <div>
      <SPosterWrapper>
        {mq > theme.breakpoints[1] ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
            alt={media.id}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 5%' }}
          />
        ) : (
          <Image
            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
            alt="img"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 5%' }}
          />
        )}
      </SPosterWrapper>

      <SContentCopy>
        <STitle>{mediaType == MOVIE ? media.title : media.name}</STitle>
        <SSubInfoWrapper>
          <p>
            {isMovie
              ? media.release_date?.split('-')[0]
              : media.first_air_date?.split('-')[0]}
          </p>
          <p>{isMovie ? '' : `Season ${media.number_of_seasons}`}</p>
          <p>
            {isMovie
              ? `${media.runtime}m`
              : ` ${media.number_of_episodes} episodes`}
          </p>
          <SRatingWrapper>
            <Star />
            {media.vote_average.toFixed(1)}
          </SRatingWrapper>
        </SSubInfoWrapper>
        <SGenreWrapper>
          {media.genres?.map((genre: any) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </SGenreWrapper>
        <p>{media.overview}</p>
      </SContentCopy>
    </div>
  );
};

export default ViewLayout;

const SPosterWrapper = styled.div`
  position: relative;
  width: 100%;
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

const SContentCopy = styled.div`
  padding: 0 2vw;
  ${theme.mq[3]} {
    width: 1200px;
    margin: 0 auto;
  }
`;

const STitle = styled.p`
  font-size: 32px;
  margin-bottom: 5px;
`;

const SSubInfoWrapper = styled.div`
  ${theme.flex}
  gap: 10px;
  color: ${theme.colors.lightGrey};
`;

const SGenreWrapper = styled.div`
  padding: 20px 0;

  span {
    display: inline-block;
    border-radius: 20px;
    border: 1px solid ${theme.colors.white};
    padding: 5px 10px;

    &:not(:last-child) {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;

const SRatingWrapper = styled.div`
  ${theme.flex}

  svg {
    path {
      fill: ${theme.colors.yellow};
    }
  }
`;
