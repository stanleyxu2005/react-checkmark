import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  backgroundColor: string;
  checkColor: string;
  checkThickness: number;
}

const StyledSVG = styled.div<Props>`
  .checkmark {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    stroke: ${(props) => props.checkColor};
    stroke-width: ${(props) => props.checkThickness};
    stroke-miterlimit: 10;
    animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
  }

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: ${(props) => props.checkThickness};
    stroke-miterlimit: 10;
    stroke: ${(props) => props.backgroundColor};
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0 0 0 100vh ${(props) => props.backgroundColor};
    }
  }
`;

export const sizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 52,
  xl: 72,
  xxl: 96,
};

export type Sizes = keyof typeof sizes;

interface Props extends Partial<StyledProps> {
  size?: Sizes | number;
  visible?: boolean;
  className?: string;
}

const Checkmark = ({
  size = 'lg',
  visible = true,
  backgroundColor = '#7ac142',
  checkColor = '#FFF',
  checkThickness = 5,
}: Props) => {
  const selectedSize = typeof size === 'number' ? size : sizes[size];
  const style = { width: selectedSize, height: selectedSize };

  if (!visible) return <></>;

  return (
    <StyledSVG
      backgroundColor={backgroundColor}
      checkColor={checkColor}
      checkThickness={checkThickness}
    >
      <svg
        className='checkmark'
        xmlns='http://www.w3.org/2000/svg'
        style={style}
        viewBox='0 0 52 52'
      >
        <circle className='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
        <path className='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
      </svg>
    </StyledSVG>
  );
};

export default Checkmark;
