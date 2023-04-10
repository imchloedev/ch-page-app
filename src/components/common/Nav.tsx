import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { theme } from '@src/styles/theme';

const Nav = () => {
  const headerRef = useRef<any>(null);

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
      <SNavRightWrapper>
        <div>
          <Link href="/">
            <Image src="/images/logo.png" width={80} height={16} alt="logo" />
          </Link>
        </div>
      </SNavRightWrapper>
      <SNavLeftWrapper>
        <Link href="/search">Search</Link>
      </SNavLeftWrapper>
    </SNavContainer>
  );
};

export default Nav;

const SNavContainer = styled.header`
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

const SNavRightWrapper = styled.div`
  ${theme.flex}
  gap: 30px;
`;

const SNavLeftWrapper = styled.div`
  ${theme.flex}
  gap: 10px;
`;
