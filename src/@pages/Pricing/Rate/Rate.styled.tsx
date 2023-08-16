import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 200px 0 75px;

  @media (max-width: 800px) {
    padding: 140px 0 75px;
  }

  @media (max-width: 600px) {
    padding: 125px 0 50px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64};
  max-width: 770px;
  margin: 0 auto 70px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 48px;
    margin: 0 auto 50px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Btn = styled.button`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: 15px;
    border: transparent;
    background-color: transparent;
    border-radius: 12px;
    ${theme.fonts.inter500Ag16};
    transition: color 0.3s ease, background-color 0.3s ease,
      text-decoration-color 0.3s ease;
    position: relative;
    text-decoration: underline;
    text-decoration-color: transparent;
    z-index: 2;

    &.active {
      color: ${theme.colors.white};
    }

    @media (any-hover: hover) {
      &:hover {
        text-decoration-color: ${theme.colors.black};
      }
    }
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    max-width: 370px;
    margin: 0 auto 70px;
    background-color: ${theme.colors.gray100};
    border-radius: 12px;
    padding: 5px;
    display: flex;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background-color: ${theme.colors.black};
      width: calc(50% - 5px);
      height: calc(100% - 10px);
      z-index: 1;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }

    &.right::before {
      transform: translateX(100%);
    }
  `}

  @media (max-width: 800px) {
    max-width: 350px;
  }

  @media (max-width: 600px) {
    margin: 0 auto 50px;
  }
`;

export const Discount = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${theme.fonts.caveatHand28};
  `}
  position: absolute;
  right: -105px;
  top: -30px;
  width: 95px;
  height: 60px;
  transform: rotate(5deg);
  svg {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 600px) {
    width: 140px;
    height: 35px;
    right: -5px;
    top: -30px;
    svg {
      display: none;
    }
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 70px;
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 320px;
    justify-content: center;
    grid-gap: 15px;
    margin-bottom: 50px;
  }
`;

export const Item = styled.li`
  ${({ theme }) => css`
    border-radius: 12px;
    border: 1px solid ${theme.colors.gray200};
    padding: 25px 25px 20px;

    button {
      padding: 13px;
      width: 100%;
      margin-bottom: 15px;
    }

    a {
      margin: 0 auto;
    }

    &.primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      ${Headline},
      ${Price} {
        color: ${theme.colors.white};

        span {
          color: ${theme.colors.white};
          opacity: 0.6;
        }
      }

      ${Text} {
        opacity: 0.9;
        span {
          color: ${theme.colors.white};
        }
      }
      a {
        color: ${theme.colors.white};
        svg {
          color: ${theme.colors.white};
        }
        &::before {
          background-color: ${theme.colors.white};
        }
      }
    }
  `}
`;

export const Headline = styled.div`
  ${({ theme }) => css`
    margin-bottom: 30px;
    ${theme.fonts.it500H24};
    span {
      color: ${theme.colors.gray500};
      ${theme.fonts.inter400Ag14};
      display: block;
      padding-top: 10px;
    }
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.gray200};
    ${theme.fonts.it500H40};
    span {
      display: block;
      color: ${theme.colors.gray500};
      ${theme.fonts.inter400Ag14};
      padding-top: 5px;
    }

    @media (max-width: 500px) {
      font-size: 48px;
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag16}
    margin-bottom: 29px;
    span {
      color: ${theme.colors.primary};
      ${theme.fonts.inter600Ag16}
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag16};
  `}
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  svg {
    width: 55px;
    height: 18px;
  }

  @media (max-width: 600px) {
    margin-right: 10px;
  }

  &.master {
    svg {
      width: 44px;
      height: 28px;
    }
  }

  &.klarna {
    background-color: #feb4c7;
    svg {
      height: 14px;
    }
  }

  &.lighcoin {
    svg {
      width: 32px;
      height: 33px;
    }
  }

  &.giropay {
    margin-right: 0;
    svg {
      width: 51.5px;
      height: 21px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    max-width: 265px;
    margin: 0 auto;
    grid-row-gap: 10px;
  }
`;
