import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 200px 0 50px;

  @media (max-width: 1000px) {
    padding: 150px 0 0;
  }

  @media (max-width: 900px) {
    padding: 150px 0 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0 0;
  }

  span svg {
    @media (max-width: 768px) {
      width: 310px;
      height: 80px;
    }

    @media (max-width: 500px) {
      width: 210px;
      height: 60px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 900px) {
    margin: 0 auto 50px;
  }

  @media (max-width: 600px) {
    margin: 0 auto 25px;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    width: max-content;
    margin: 0 auto;

    svg {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      z-index: -1;
    }

    @media (max-width: 900px) {
      display: inline-block;
    }

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-column-gap: 35px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  display: grid;
  grid-row-gap: 30px;
  grid-template-rows: max-content;

  &:last-of-type {
    @media (max-width: 900px) {
      grid-column: 1/3;
    }

    @media (max-width: 600px) {
      grid-column: 1/2;
      grid-row-gap: 20px;
    }

    img {
      width: 280px;
    }
  }

  svg {
    color: #444ce7;
  }
`;

export const Image = styled.a`
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  height: 200px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 30px 0 0;

  img {
    width: 120px;
    height: max-content;
    object-fit: contain;
    object-position: top;
  }
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.inter500Ag24};
    color: ${theme.colors.black};

    span {
      color: ${theme.colors.primary};
    }
  `};
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 110%;
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag18};
    color: ${theme.colors.gray500};
  `};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
