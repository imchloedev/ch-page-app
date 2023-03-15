import React from 'react';
import { useQueries } from 'react-query';
import styled from '@emotion/styled';
import Seo from '@src/components/common/Seo';
import Main from '@src/components/Main';
import Trending from '@src/components/Trending';
import Movies from '../src/components/Movies';
import { getTrending } from './api/trending/index';
import { getMovies } from './api/movies/index';
import { getMain } from './api/mock/index';

export default function Home() {
  const results = useQueries([
    {
      queryKey: ['trending'],
      queryFn: getTrending,
      staleTime: Infinity,
      cacheTime: 50000,
    },
    {
      queryKey: ['movies'],
      queryFn: getMovies,
      staleTime: Infinity,
      cacheTime: 50000,
    },
    {
      queryKey: ['main'],
      queryFn: getMain,
      staleTime: Infinity,
      cacheTime: 50000,
    },
  ]);

  return (
    <>
      <Seo title="Home">
        <meta name="home" content="movies & tv shows" />
      </Seo>
      <Main mains={results[2].data} />
      <SContents>
        <SContentsTitle>Trending Now</SContentsTitle>
        <Trending trendings={results[0].data} />
      </SContents>
      <SContents>
        <SContentsTitle>Movies</SContentsTitle>
        <Movies movies={results[1].data}>Movies</Movies>
      </SContents>
    </>
  );
}

const SContents = styled.article`
  padding: 10px 2vw 40px 2vw;
`;

const SContentsTitle = styled.p`
  margin-bottom: 20px;
`;
