import React from 'react';
import { useQueries } from 'react-query';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import Seo from '@src/components/common/Seo';
import Main from '@src/components/Main';
import Media from '@src/components/Media';
import { getMovies, getTrending, getTvShows } from '@pages/api/media';
import { viewedListState } from '@src/atoms';
import { filteredViewedListState } from '@src/selectors/recentSelector';
import { IContent } from '@src/types/content';
import { useHost } from '@src/hooks/useHost';

export default function Home() {
  const viewedList = useRecoilValue<IContent[]>(viewedListState);
  const filteredViewedList = useRecoilValue(filteredViewedListState);
  const host = useHost();

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
      queryKey: ['trending'],
      queryFn: getTrending,
      staleTime: Infinity,
      cacheTime: 50000,
    },
  ]);

  return (
    <>
      <Seo
        title="Home"
        pageType={'home'}
        hostName={host}
        description={'mplex movies and tv shows'}
      />
      <Main content={results[2].data} />
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

export const SContentsTitle = styled.p`
  margin-bottom: 20px;
`;

export const SGuidance = styled.div`
  height: 200px;
  text-align: center;
  line-height: 200px;
`;
