import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  @media (min-width: 700px) {
    height: calc(100vh * 4);
  }
`;

export const SectionInner = styled.div`
  @media (min-width: 700px) {
    position: sticky;
    display: flex;
    align-items: center;
    top: 0px;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 800px) {
    margin: 0 auto 70px;
  }
  @media (max-width: 700px) {
    margin: 0 auto 30px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  grid-gap: 0 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
  }
`;

export const Wrapper = styled.ul`
  max-width: 370px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px 0;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 30px;
    max-width: 100%;
  }

  /* @media (max-width: 700px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  } */

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  overflow: hidden;
  height: 470px;
  max-width: 470px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    max-width: 100%;
  }

  @media (max-width: 700px) {
    display: none;
    height: 300px;
  }
`;

export const Item = styled.li<{ active: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-template-rows: max-content 1fr max-content;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  ${Content} {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}

  @media (max-width: 700px) {
    opacity: 1;
    grid-row-gap: 15px;
    ${Content} {
      display: flex;
    }
  }
`;

export const Image = styled.div<{ active?: boolean }>`
  max-width: 250px;
  height: 545px;
  position: absolute;
  transform: translateY(370px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ active }) =>
    active &&
    css`
      display: block;
      transform: translateY(70px);
      opacity: 1;
    `}

  @media (max-width: 700px) {
    max-width: 180px;
    position: unset;
    height: 370px;
    transform: translateY(50px);
    opacity: 1;
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => theme.fonts.it500H24};

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
