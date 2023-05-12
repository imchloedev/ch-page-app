import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState, useResetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import Seo from '@src/components/common/Seo';
import Spinner from '@src/components/common/Spinner';
import { useSearch } from '@src/hooks';
import { searchInputState } from '@src/atoms/search';
import { SPostWrapper } from '@src/components/Media';
import { IContent } from '@src/types/content';
import { theme } from '@src/styles/theme';
import Reset from '../../public/icons/close.svg';
import Search from '../../public/icons/search.svg';

const SearchPage = () => {
  const [searchInput, setSearchInput] =
    useRecoilState<string>(searchInputState);
  const resetSearchInput = useResetRecoilState(searchInputState);
  const { data, isLoading } = useSearch(searchInput);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <SSearchPageLayout>
      <Seo title="Search">
        <meta name="search" content="search" />
      </Seo>
      <SSearchBarContainer>
        <input
          type="text"
          value={searchInput}
          onChange={onChange}
          placeholder="Search here"
        />
        {searchInput.length ? (
          <button onClick={resetSearchInput}>
            <Reset />
          </button>
        ) : (
          <button>
            <Search />
          </button>
        )}
      </SSearchBarContainer>
      <div>
        {isLoading ? (
          <SNoResultWrapper>
            <Spinner />
          </SNoResultWrapper>
        ) : data && data.length > 0 ? (
          <SResultContainer>
            {data.map((result: IContent) => (
              <SPostWrapper key={result.id}>
                <Link
                  href={`/view/${result.title ? 1 : 2}/${
                    result.title ? 'movie' : 'tv'
                  }?id=${result.id}&title=${
                    result.title ? result.title : result.name
                  }`}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                    alt={result.id}
                    width={300}
                    height={300}
                  />
                </Link>
              </SPostWrapper>
            ))}
          </SResultContainer>
        ) : (
          <SNoResultWrapper>
            {searchInput
              ? `Your search for "${searchInput}" did not match any content.`
              : 'Please type to search.'}
          </SNoResultWrapper>
        )}
      </div>
    </SSearchPageLayout>
  );
};

export default SearchPage;

const SSearchPageLayout = styled.div`
  margin-top: 180px;
  padding: 0 2vw;
`;

const SSearchBarContainer = styled.div`
  ${theme.flex};
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.white};

  input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: transparent;
    color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.middleGrey};
    }
  }

  button {
    width: auto;
    height: 40px;
    border: none;
    background-color: transparent;
    svg {
      path {
        fill: ${theme.colors.white};
      }
    }
  }
`;

const SResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 80px;

  & > div {
    flex-shrink: 0;
    flex-basis: calc(25% - 10px);
    flex-grow: 0;
  }
`;

const SNoResultWrapper = styled.div`
  padding: 100px 0;
  text-align: center;
`;
