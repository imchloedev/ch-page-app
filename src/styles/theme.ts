import { css } from '@emotion/react';
import { ITheme } from '@emotion/styled';

const flex = css`
  display: flex;
  align-items: center;
`;

export const theme: ITheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    lightGrey: '#B0B0B0',
    middleGrey: '#717171',
    deepGrey: '#222222',
    hoverGrey: '#DBDBDB',
    pink: '#FF09D6',
    middleBlue: '#4C83C2',
    blue: '#4C5AEE',
    grayScale: ['#eee', '#ddd', '#555', '#888'],
    transparentBlack: [
      'rgba(0, 0, 0, 0.05)',
      'rgba(0, 0, 0, 0.1)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.3)',
      'rgba(0, 0, 0, 0.4)',
    ],
  },

  fontSizes: {
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
  },

  flex,
};
