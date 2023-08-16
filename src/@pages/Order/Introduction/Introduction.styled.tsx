import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  @media (max-width: 700px) {
    min-height: 850px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: -170px;

  @media (max-width: 1100px) {
    margin-top: -150px;
  }

  @media (max-width: 700px) {
    margin-top: -385px;
  }
`;

export const Item = styled.div`
  max-width: 970px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  padding: 50px 70px;
  display: grid;
  grid-template-columns: 400px 305px;
  justify-content: space-between;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas:
    "subtitle image"
    "title image"
    "text image";

  @media (max-width: 900px) {
    padding: 50px 35px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 280px;
    grid-column-gap: 30px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "subtitle"
      "image"
      "title"
      "text";
    padding: 20px 25px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.it500H24};
    color: ${theme.colors.primary};
  `}
  grid-area: subtitle;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    margin-bottom: 25px;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.it500H48};
  grid-area: title;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  grid-area: text;
  p:not(:last-child) {
    margin-bottom: 30px;

    @media (max-width: 700px) {
      margin-bottom: 15px;
    }
  }
`;

export const Image = styled.div`
  max-width: 305px;
  height: 620px;
  grid-area: image;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    max-width: 280px;
    height: 570px;
  }

  @media (max-width: 700px) {
    margin: 0 auto 100px;
    max-width: 180px;
    height: 370px;
  }
`;

export const Pagination = styled.div`
  position: absolute;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-column-gap: 20px;
  height: 50px;
  align-items: center;
  bottom: 70px;
  left: 70px;

  @media (max-width: 900px) {
    left: 35px;
  }

  @media (max-width: 700px) {
    bottom: unset;
    left: 50%;
    top: 462px;
    transform: translateX(-50%);
  }
`;

export const Number = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    ${theme.fonts.it500H20};
  `}
  z-index: 8;
  position: absolute;
  height: 50px;
  width: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.button`
  ${({ theme }) => css`
    &::before {
      background-color: ${theme.colors.white};
    }
    &::after {
      background-color: ${theme.colors.primary};
    }

    &.active {
      background-color: ${theme.colors.white};

      ${Number} {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }

      &::before {
        background-color: ${theme.colors.primary};
      }
    }
  `}
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 25px;
    height: 50px;
    top: 0;
    bottom: 0;
  }

  &::before {
    transform-origin: right center;
    z-index: 7;
    left: 0;
  }

  &::after {
    transform-origin: left center;
    transform: rotate(180deg);
    z-index: 5;
    right: 0;
  }

  &.active {
    cursor: default;

    ${Number} {
      width: 46px;
      height: 46px;
    }

    &::after {
      transform: rotate(540deg);
      transition: transform 3.4s linear;
    }

    &::before {
      transform: rotate(180deg);
      transition: transform 0s linear, background-color 0s ease;
      transition-delay: 1.7s;
    }
  }
`;
