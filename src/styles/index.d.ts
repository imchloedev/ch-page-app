import '@emotion/styled';
import { css } from '@emotion/react';

declare module '@emotion/styled' {
  export interface ITheme {
    colors: {
      black: string;
      white: string;
      lightGrey: string;
      middleGrey: string;
      deepGrey: string;
      hoverGrey: string;
      pink: string;
      middleBlue: string;
      blue: string;
      grayScale: string[];
      transparentBlack: string[];
    };

    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };

    flex: css;
  }
}
