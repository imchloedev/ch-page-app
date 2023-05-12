import { css } from '@emotion/react';
import { theme } from './theme';

const globalStyle = css`
  @font-face {
    font-family: 'Lato';
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/Lato-Light.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 800;
    font-style: normal;
    src: url('/fonts/Lato-Black.ttf') format('truetype');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.deepGrey};
    font-family: 'Lato';
    font-weight: 400;
    color: ${theme.colors.white};
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: ${theme.colors.white};
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input,
  button,
  textarea,
  select {
    outline: none;
    font-family: 'Lato';
  }
`;

export default globalStyle;
