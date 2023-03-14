import React from 'react';
import styled from '@emotion/styled';

interface IButton {
  children: React.ReactNode;
  bgColor: string;
}

const Button = ({ children, bgColor }: IButton) => {
  return <SButton bgColor={bgColor}>{children}</SButton>;
};

export default Button;

const SButton = styled.button<{ bgColor: string }>`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: ${({ bgColor }) => bgColor};
`;
