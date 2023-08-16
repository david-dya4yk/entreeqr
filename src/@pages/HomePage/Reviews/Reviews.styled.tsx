import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 200px 0 50px;

  @media (max-width: 1000px) {
    padding: 150px 0 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0 0;
  }
`;

export const Title = styled.h2`
  max-width: 500px;
  margin: 0 auto 100px;

  @media (max-width: 1000px) {
    font-size: 40px;
    margin: 0 auto 68px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    max-width: 70%;
  }

  @media (max-width: 432px) {
    max-width: 100%;
    margin: 0 auto 30px;
  }
`;

export const Body = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  bottom: 470px;
  z-index: 2;
  left: -170px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  svg {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 1350px) {
    left: 0;
  }

  @media (max-width: 1000px) {
    bottom: 630px;
  }

  @media (max-width: 800px) {
    bottom: 435px;
    left: -15px;
    svg {
      display: none;
    }
  }

  @media (max-width: 600px) {
    bottom: 245px;
  }
`;

export const Inner = styled.div`
  margin-bottom: 70px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 370px 270px 270px;
  grid-gap: 30px;
  grid-template-areas:
    "video text text"
    "video decor image";

  @media (max-width: 1000px) {
    grid-template-columns: 260px 215px 215px;
    justify-content: center;
    grid-gap: 10px;
  }

  @media (max-width: 800px) {
    grid-template-areas:
      "text text"
      "video decor"
      "video image";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content 250px 250px;
  }

  @media (max-width: 600px) {
    grid-template-rows: max-content 155px 155px;
  }
`;

export const Video = styled.div<{ active: boolean }>`
  grid-area: video;
  border-radius: 12px;
  position: relative;
  transition: transform 0.3s ease;
  transform: translateX(-50%);
  overflow: hidden;

  ${({ active }) => css`
    transform: translateX(${active ? 0 : "-100%"});
  `};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const Play = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    @media (any-hover: hover) {
      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
  position: absolute;
  bottom: 20px;
  left: 25px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 600px) {
    left: 10px;
    bottom: 10px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Time = styled.span`
  position: absolute;
  bottom: 20px;
  left: 25px;
  z-index: 1;
  border-radius: 8px;
  right: 25px;
  left: unset;
  padding: 4px 5px;

  @media (max-width: 600px) {
    right: 10px;
    font-size: 14px;
  }

  ${({ theme }) => css`
    ${theme.fonts.inter500Ag16};
    background-color: ${theme.colors.white};
  `}
`;

export const Text = styled.div<{ active: boolean }>`
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(-50%);
  opacity: 0;

  ${({ theme, active }) => css`
    ${theme.fonts.itt400H28};

    span {
      color: ${theme.colors.gray500};
      ${theme.fonts.inter400Ag16}
    }

    ${active &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
  `}

  grid-area: text;
  display: grid;
  grid-row-gap: 75px;

  span {
    display: block;
    max-width: 250px;

    @media (max-width: 800px) {
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      max-width: 225px;
    }
  }

  @media (max-width: 1000px) {
    font-size: 24px;
    grid-row-gap: 104px;
  }

  @media (max-width: 800px) {
    grid-row-gap: 30px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Box = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    background-color: ${theme.colors.gray100};
    color: ${theme.colors.primary};
    ${theme.fonts.caveatHand32};
  `}
  grid-area: decor;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;

  span {
    font-size: 64px;
    margin-bottom: 5px;

    @media (max-width: 432px) {
      font-size: 48px;
    }
  }

  @media (max-width: 432px) {
    font-size: 24px;
  }
`;

export const Image = styled.div<{ active: boolean }>`
  grid-area: image;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  ${({ active }) =>
    active &&
    css`
      /* background-color: blue; */
    `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.3s ease;

    &:focus {
      color: ${theme.colors.primary};
    }

    @media (any-hover: hover) {
      &:hover {
        text-decoration-color: ${theme.colors.white};
      }
    }

    ${theme.fonts.inter500Ag16}
  `}
  position: absolute;
  left: 25px;
  bottom: 20px;
  max-width: 170px;
  transition: color 0.3s ease;

  @media (max-width: 1000px) {
    left: 10px;
    bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    max-width: 140px;
    left: 10px;
    bottom: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  margin: 0 auto;
`;

export const Number = styled.span`
  padding: 12px;
  ${({ theme }) => theme.fonts.inter500Ag16}
`;

export const Click = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${theme.fonts.caveatHand32};
  `};
  transform: rotate(-10deg);
`;
