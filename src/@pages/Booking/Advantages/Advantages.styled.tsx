import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 150px;
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 800px) {
    margin: 0 auto 70px;
  }

  @media (max-width: 600px) {
    margin: 0 auto 30px;
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.it500H32};

    svg {
      color: ${theme.colors.primary};
    }
  `}
  max-width: 300px;
  margin: 0 auto 20px;

  @media (max-width: 1000px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }

  span {
    position: relative;
    display: block;
  }

  svg {
    position: absolute;
    z-index: -1;
    transform: translateX(-50%);
  }

  &_circle {
    svg {
      bottom: -25px;
      width: 170px;
      left: 50%;
      height: 75px;

      @media (max-width: 500px) {
        width: 130px;
      }
    }
  }

  &_line {
    svg {
      width: 180px;
      height: 40px;
      bottom: -24px;
      left: 60%;

      @media (max-width: 800px) {
        left: 50%;
      }
    }
  }

  &_arrow {
    svg {
      width: 100px;
      height: 90px;
      right: -84px;
      top: -5px;
      left: unset;
      transform: unset;

      @media (max-width: 1100px) {
        right: -24px;
        top: 0;
      }

      @media (max-width: 768px) {
        right: -84px;
        top: -5px;
      }

      @media (max-width: 600px) {
        top: -20px;
        right: -25px;
      }
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
    font-size: 14px;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 35px;

  @media (max-width: 1000px) {
    grid-gap: 0 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  padding: 30px 25px;
  height: 300px;
  text-align: center;
  position: relative;
  z-index: 2;

  &:last-child {
    padding: 30px 23px;
  }

  @media (max-width: 1000px) {
    padding: 25px 15px;
  }

  @media (max-width: 800px) {
    padding: 25px 10px;
  }

  @media (max-width: 768px) {
    height: 185px;
  }
`;

export const Decor = styled.div`
  max-width: 150px;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${theme.fonts.caveatHand28}
  `}
  position: absolute;
  bottom: 31px;
  right: -25.5px;
  transform: rotate(-5deg);
  height: 58px;
  z-index: 3;
  svg {
    width: 85px;
    height: 85px;
  }

  @media (max-width: 1100px) {
    right: -13.5px;
  }

  @media (max-width: 768px) {
    bottom: -11.5px;
    right: -15px;
  }

  &.hearts {
    transform: rotate(0deg);
    bottom: 25px;
    right: -20px;
    height: 85px;

    @media (max-width: 1100px) {
      right: -5px;
    }

    @media (max-width: 768px) {
      right: 15px;
      bottom: -15px;
    }
  }
`;
