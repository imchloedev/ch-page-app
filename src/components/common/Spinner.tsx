import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { theme } from '@src/styles/theme';

const Spinner = () => {
  return (
    <SSpinnerContainer>
      <SSpinnerWrapper>
        <SSpinnerCircle />
        <SSpinnerCircle />
        <SSpinnerCircle />
      </SSpinnerWrapper>
    </SSpinnerContainer>
  );
};

export default Spinner;

const SSpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const spinner = keyframes`
  from{
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: .25;
    transform: scale(.75);
  }
`;

const SSpinnerWrapper = styled.div`
  ${theme.flex}
  justify-content: center;
  gap: 10px;

  & div:nth-of-type(1) {
    animation: ${spinner} 0.6s ease 0s infinite alternate;
  }

  & div:nth-of-type(2) {
    animation: ${spinner} 0.6s ease 0.3s infinite alternate;
  }

  & div:nth-of-type(3) {
    animation: ${spinner} 0.6s ease 0.6s infinite alternate;
  }
`;

const SSpinnerCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: ${theme.colors.white};
`;
