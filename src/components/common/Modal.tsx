import React from 'react';
import styled from '@emotion/styled';

interface IModalProps {
  children: React.ReactNode;
  setModal: () => void;
  style: object;
}

const Modal = ({ children, setModal, style }: IModalProps) => {
  return (
    <div>
      <SModalOverlay onClick={setModal} />
      <SModalWrapper style={style}>{children}</SModalWrapper>
    </div>
  );
};

export default Modal;

const SModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

const SModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
