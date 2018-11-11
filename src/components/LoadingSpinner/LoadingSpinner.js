import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledSpinner = styled.svg`
  top: 50%;
  left: 50%;
  position: absolute;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  transform: translate(-50%, -50%);
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${props => props.dudation}s;
  animation-iteration-count: infinite;
`;

const Spinner = ({ size }) => (
  <StyledSpinner size={size} dudation={2 + Math.random()} viewBox="0 0 16 16">
    <path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z" />
  </StyledSpinner>
);

const LoadingSpinner = ({ className }) => (
  <div className={className}>
    <Spinner size={5} />
    <Spinner size={4} />
    <Spinner size={3} />
    <Spinner size={2} />
    <Spinner size={1} />
  </div>
);

const StyledLoadingSpinner = styled(LoadingSpinner)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
`;

export default StyledLoadingSpinner;
