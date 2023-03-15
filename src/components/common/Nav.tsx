import React, { ReactElement, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { theme } from '@src/styles/theme';

const Nav = () => {
  const headerRef = useRef(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        headerRef.current.style.background = `${theme.colors.deepGrey}`;
      } else {
        headerRef.current.style.background = 'transparent';
      }
    });
  }, []);

  return (
    <SNavContainer ref={headerRef}>
      <SNavListWrapper>
        <div>
          <Link href="/">
            <Image src="/images/logo.png" width={80} height={16} alt="logo" />
          </Link>
        </div>
        <SNav>
          <ul>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/tv-shows">TV Shows</Link>
            </li>
            <li>
              <Link href="my-list">My List</Link>
            </li>
          </ul>
        </SNav>
      </SNavListWrapper>
      <SLeftWrapper>
        <SSearch>Search</SSearch>
        <div>
          <Link href="/sign">Sign In</Link>
        </div>
      </SLeftWrapper>
    </SNavContainer>
  );
};

export default Nav;

const SNavContainer = styled.div`
  ${theme.flex}
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 0 2vw;
  font-size: 14px;
  z-index: 90;
`;

const SNavListWrapper = styled.div`
  ${theme.flex}
  gap: 30px;
`;

const SNav = styled.nav`
  ul {
    ${theme.flex}
    gap: 10px;
  }
`;

const SLeftWrapper = styled.div`
  ${theme.flex}
  gap: 10px;
`;

const SSearch = styled.div`
  cursor: pointer;
`;
