import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 130px;
  grid-template-columns: 1fr calc(50% - 130px);

  @media (max-width: 1000px) {
    grid-column-gap: 100px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 350px 1fr;
  }

  @media (max-width: 768px) {
    grid-column-gap: 50px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 80px;
    position: relative;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  max-width: 100%;
  height: 570px;

  @media (max-width: 500px) {
    height: 470px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: 30px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H48};

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag18}
  `}

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Img = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  max-width: 270px;
  height: 170px;

  @media (max-width: 1000px) {
    max-width: 260px;
  }

  @media (max-width: 700px) {
    position: absolute;
    top: 350px;
    right: -29px;
  }

  @media (max-width: 500px) {
    right: -20px;
  }
`;
