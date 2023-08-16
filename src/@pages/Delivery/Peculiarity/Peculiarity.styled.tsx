import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 150px;

  @media (max-width: 600px) {
    padding-top: 100px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;

  @media (max-width: 800px) {
    grid-column-gap: 10px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  &:nth-of-type(1) {
    @media (max-width: 750px) {
      display: none;
    }
  }
`;

export const Box = styled.div`
  margin-top: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  height: 565px;

  @media (max-width: 800px) {
    margin-top: 115px;
  }
`;

export const Image = styled.div<{ active: boolean }>`
  max-width: 305px;
  height: 620px;
  transform: translateY(-60px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  position: absolute;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(-130px);
      opacity: 1;
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    transform: translateY(-30px);
    max-width: 280px;
    height: 570px;

    ${({ active }) =>
      active &&
      css`
        transform: translateY(-55px);
      `}
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H48};
  margin-bottom: 100px;

  @media (max-width: 800px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.ul``;

export const Item = styled.li<{ active: boolean }>`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray100};
    ${theme.fonts.inter400Ag22};
  `}
  cursor: pointer;
  border-radius: 12px;
  padding: 13.5px 25px 13.5px;
  transition: background-color 0.3s ease, color 0.3s ease, height 0.3s ease;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  grid-column-gap: 10px;
  height: 80px;
  align-content: center;
  position: relative;

  @media (any-hover: hover) {
    &:hover {
      ${({ active, theme }) =>
        active &&
        css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          ${Btn} {
            span {
              &::before,
              &::after {
                background-color: ${theme.colors.white};
              }
            }
          }

          ${Headline} {
            svg {
              color: ${theme.colors.white};
              opacity: 0.6;
            }
          }
        `}
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      padding: 25px 25px 27px;
      height: 185px;
      align-content: flex-start;

      @media (max-width: 750px) {
        height: auto;
      }

      ${Picture} {
        @media (max-width: 750px) {
          height: auto;
        }
      }

      ${Headline} {
        svg {
          color: ${theme.colors.white};
          opacity: 0.6;
        }
      }

      ${Text} {
        height: auto;
        padding-top: 25px;

        @media (max-width: 750px) {
          margin-bottom: 30px;
          padding-top: 15px;
        }
      }

      ${Btn} {
        span {
          &::after,
          &::before {
            background-color: ${theme.colors.white};
          }
          &::after {
            width: 0;
            height: 0;
          }
        }
      }
    `}
`;

export const Headline = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.it500H24};

    svg {
      color: ${theme.colors.gray400};
    }
  `}
  display: flex;
  align-items: center;
  max-width: 385px;
  svg {
    transition: color 0.3s ease, opacity 0.3s ease;
    width: 28px;
    height: 28px;
    margin-right: 20px;

    @media (max-width: 432px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Btn = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: transparent;
  outline: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 11.5px;
      height: 2px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.black};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
    }

    &::after {
      width: 2px;
      height: 11.5px;
    }
  }

  &:focus::before {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    transition: border-color 0.3s ease;
    background-color: transparent;
    content: "";
    border: 1px solid transparent;
    inset: 0;
    position: absolute;
    border-radius: 12px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag16};
  height: 0;
  overflow: hidden;
  grid-column: 1/3;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Picture = styled.div`
  max-width: 145px;
  height: 300px;
  grid-column: 1/3;
  margin: 0 auto 5px;
  height: 0;
  transition: height 0.3s ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
