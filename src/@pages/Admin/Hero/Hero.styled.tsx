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

export const Content = styled.div`
  margin-bottom: 100px;

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }

  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64};
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag20}
  `}
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 20px;

  @media (max-width: 500px) {
    grid-column-gap: 10px;
  }
  .control__link {
    @media (max-width: 500px) {
      font-size: 14px;
      padding: 17.5px 15px;
    }
  }
`;

export const Image = styled.div`
  max-width: 970px;
  height: 670px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 12px;
  filter: drop-shadow(0px 0px 40px rgba(12, 13, 38, 0.15));
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 1000px) {
    max-width: 710px;
    height: 490px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    height: 350px;
    max-width: 500px;
  }

  @media (max-width: 500px) {
    height: 220px;
    max-width: 320px;
  }
`;
