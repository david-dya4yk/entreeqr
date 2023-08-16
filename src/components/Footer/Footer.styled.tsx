import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.footer`
  padding: 150px 0 50px;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(170px, 1fr) max-content;
  margin-bottom: 77px;
  justify-content: space-between;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`;

export const Content = styled.div`
  max-width: 170px;
  @media (max-width: 800px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  @media (max-width: 500px) {
    grid-row: unset;
    grid-column: unset;
    max-width: 50%;
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag18};
  `}
  margin-bottom: 20px;
`;

export const Mail = styled.a`
  ${({ theme }) => css`
    ${theme.fonts.inter500Ag18};

    @media (any-hover: hover) {
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    &:focus {
      color: ${theme.colors.primary};
    }
  `}
  position: relative;
  transition: color 0.3s ease;
  &::before {
    position: absolute;
    content: "";
    background: center / contain no-repeat url("/images/decor/line.svg");
    width: 168px;
    height: 6px;
    bottom: -5px;
    left: 0;
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 0 20px;
  position: relative;

  &::before {
    position: absolute;
    content: "soon...";
    font-family: "Caveat", cursive;
    font-weight: 400;
    font-size: 28px;
    line-height: 85%;
    color: #444ce7;
    left: -20px;
    top: -20px;
    transform: rotate(-5deg);

    @media (max-width: 800px) {
      left: 50%;
      transform: rotate(-5deg) translateX(-50%);
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row: 1/2;
    grid-column: 1/3;
    gap: 20px 0;
  }

  @media (max-width: 500px) {
    grid-row: unset;
    grid-column: unset;
  }

  @media (max-width: 355px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  @media (max-width: 800px) {
    &:nth-of-type(1) {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    &:nth-of-type(2) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
    &:nth-of-type(3) {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }

  @media (max-width: 500px) {
    &:nth-of-type(1) {
      grid-row: unset;
      grid-column: unset;
    }
    &:nth-of-type(2) {
      grid-row: unset;
      grid-column: unset;
    }
    &:nth-of-type(3) {
      grid-row: 1/2;
      grid-column: 2/3;
    }
  }

  @media (max-width: 355px) {
    &:nth-of-type(3) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag16}
  `}
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: grid;
  grid-row-gap: 15px;

  a {
    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 1.1;
    }
  }
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: minmax(170px, 1fr) 1fr max-content;
  align-items: flex-end;

  @media (max-width: 800px) {
    grid-template-columns: calc(50% - 20px) 1fr max-content;
    grid-column-gap: 20px;
  }

  @media (max-width: 500px) {
    row-gap: 30px;
    grid-template-columns: 1fr max-content;
    align-items: center;
  }
`;

export const Links = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 20px;

  @media (max-width: 500px) {
    grid-column: 1/3;
  }
`;

export const Icon = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease;
  font-size: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Copy = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag14};
  `}
`;

export const Love = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag14};
    display: flex;
    column-gap: 8px;
    align-items: center;
    svg {
      color: ${theme.colors.primary};
    }
  `}

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
