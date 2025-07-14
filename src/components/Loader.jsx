import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <LoaderContainer
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <LoaderWrapper>
        <LoaderCircle />
        <LoaderText>Loading Portfolio</LoaderText>
      </LoaderWrapper>
    </LoaderContainer>
  );
};

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.primary};
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoaderText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

export default Loader;