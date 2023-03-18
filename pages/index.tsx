import React from 'react';
import { useQueries } from 'react-query';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import Seo from '@src/components/common/Seo';
import Main from '@src/components/Main';
import Media from '@src/components/Media';
import { getMovies, getTvShows } from '@pages/api/media';
import { getMain } from '@pages/api/mock/index';
import { viewedListState } from '@src/atoms/recent';
import { IContent } from '@src/types/content';
import { filteredViewedListState } from '@src/selectors/recentSelector';

export default function Home() {
  const viewedList = useRecoilValue<IContent[]>(viewedListState);
  const filteredViewedList = useRecoilValue(filteredViewedListState);
  const results = useQueries([
    {
      queryKey: ['tvShows'],
      queryFn: getTvShows,
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
        <SContentsTitle>TV Shows</SContentsTitle>
        <Media content={results[0].data} />
      </SContents>
      <SContents>
        <SContentsTitle>Movies</SContentsTitle>
        <Media content={results[1].data} />
      </SContents>
      <SContents>
        <SContentsTitle>Recently viewed</SContentsTitle>
        {viewedList.length > 0 ? (
          <Media content={filteredViewedList} />
        ) : (
          <SGuidance>You have not viewed any content yet.</SGuidance>
        )}
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

const SGuidance = styled.div`
  height: 200px;
  text-align: center;
  line-height: 200px;
`;
