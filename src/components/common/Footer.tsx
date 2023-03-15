import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@src/styles/theme';
import Link from 'next/link';

const Footer = () => {
  return (
    <SFooter>
      <SFooterLinks>
        {FOOTER_LISTS.map(list => (
          <li key={list.id}>
            <Link href="/">{list.title}</Link>
          </li>
        ))}
      </SFooterLinks>
      <SFooterCopy>
        <li>Address: 100 MPLEX Corporate, Seoul, South Korea</li>
        <li>Email: etothej01@gmail.com</li>
        <li>Number: 000 - 00000</li>
        <li>
          <Link href="https://github.com/imchloedev/mplex">
            Github Repository
          </Link>
        </li>
        <li>Copyright © 2023. Eunji KAng. All rights reserved.</li>
      </SFooterCopy>
    </SFooter>
  );
};

export default Footer;

const FOOTER_LISTS = [
  {
    id: 1,
    title: 'Audio Description',
  },
  {
    id: 2,
    title: 'Gift Cards',
  },
  {
    id: 3,
    title: 'Investor Relations',
  },
  {
    id: 4,
    title: 'Legal Notices',
  },
  {
    id: 5,
    title: 'Help Center',
  },
  {
    id: 6,
    title: 'Jobs',
  },
  {
    id: 7,
    title: 'Cookie Preferences',
  },
  {
    id: 8,
    title: 'Terms of Use',
  },
  {
    id: 9,
    title: 'Corporate Information',
  },
  {
    id: 10,
    title: 'Media Center',
  },
  {
    id: 11,
    title: 'Contact Us',
  },
  {
    id: 12,
    title: 'Privacy',
  },
];

const SFooter = styled.footer`
  padding: 50px 2vw 80px 2vw;
  color: ${theme.colors.middleGrey};

  a {
    color: ${theme.colors.middleGrey};
  }
`;

const SFooterLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 5px 0;
    flex-shrink: 0;
    flex-basis: 50%;
    flex-grow: 1;
    ${theme.mq[2]} {
      flex-basis: 25%;
    }
  }
`;

const SFooterCopy = styled.ul`
  margin-top: 50px;

  li {
    display: inline-block;
    line-height: 1.6rem;

    &:not(:last-child)::after {
      content: '|';
      margin: 0 5px;
    }
  }
`;
