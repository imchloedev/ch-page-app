import { css } from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 300;
    font-style: normal;
    src: url('fonts/NanumSquareNeo-aLtttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    src: url('/fonts/NanumSquareNeo-bRg.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/NanumSquareNeo-cBd.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 800;
    font-style: normal;
    src: url('/fonts/NanumSquareNeo-dEb.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 900;
    font-style: normal;
    src: url('/fonts/NanumSquareNeo-eHv.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'NanumSquareNeo';
    font-weight: 400;
    color: #222;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #222;
    text-decoration: none;
  }

  input,
  button,
  textarea {
    outline: none;
  }
`;

export default globalStyle;
