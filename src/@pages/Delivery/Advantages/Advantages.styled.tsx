import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 150px 0 0;
  overflow-x: hidden;

  @media (max-width: 700px) {
    padding: 100px 0 70px;
  }
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

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 3.5%;

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

  &:nth-of-type(2) {
    svg {
      bottom: -40px;
      width: 200px;
      left: 60%;

      @media (max-width: 768px) {
        width: 205px;
        left: 50%;
      }
    }
  }

  &:nth-of-type(3) {
    svg {
      left: unset;
      transform: unset;
      right: -102px;
      bottom: -45px;

      @media (max-width: 1200px) {
        right: -65px;
      }

      @media (max-width: 768px) {
        right: -50px;
      }

      @media (max-width: 500px) {
        right: -35px;
      }
    }
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

export const Headline = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.itt500H32};

    svg {
      color: ${theme.colors.primary};
    }
  `};
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
    width: 150px;
    height: 75px;
    bottom: -24px;
    z-index: -1;
    left: 50%;
    transform: translateX(-53%);
  }
`;

export const Text = styled.div`
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
    font-size: 14px;
  }
`;
