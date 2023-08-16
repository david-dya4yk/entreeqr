import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 150px 0;

  @media (max-width: 500px) {
    padding: 100px 0;
  }
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 768px) {
    margin: 0 auto 70px;
  }

  @media (max-width: 500px) {
    margin: 0 auto 30px;
  }

  span {
    ${({ theme }) => css`
      color: ${theme.colors.black};

      svg {
        color: ${theme.colors.primary};
      }
    `}

    position: relative;
    svg {
      position: absolute;
      width: 185px;
      height: 130px;
      left: -44px;
      top: -36px;

      @media (max-width: 768px) {
        width: 155px;
        height: 110px;
        top: -32px;
        left: -40px;
      }

      @media (max-width: 500px) {
        width: 110px;
        height: 80px;
        top: -23px;
        left: -28px;
      }
    }
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
    grid-gap: 10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray200};

    svg {
      color: ${theme.colors.primary};
    }
  `}
  padding: 50px;
  border-radius: 12px;
  position: relative;
  height: 300px;

  svg {
    position: absolute;
    bottom: -126px;
    right: -115px;
    width: 150px;
    height: 150px;

    @media (max-width: 500px) {
      width: 130px;
      height: 130px;
      transform: scaleX(-1);
      right: 86px;
      bottom: -91px;
    }
  }

  &:nth-of-type(1) {
    @media (max-width: 768px) {
      order: 3;
    }
  }

  @media (max-width: 1000px) {
    padding: 25px 15px;
  }

  @media (max-width: 500px) {
    height: 185px;
  }
`;

export const Headline = styled.h3`
  margin-bottom: 25px;
  ${({ theme }) => theme.fonts.it500H32};

  @media (max-width: 1000px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Decor = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${theme.fonts.caveatHand28};
  `}
  position: absolute;
  max-width: 115px;
  text-align: center;
  bottom: 7px;
  right: -10px;
  transform: rotate(5deg);
`;
