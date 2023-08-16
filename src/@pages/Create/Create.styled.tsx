import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Body = styled.div`
  min-height: 100%;
  padding: 30px 0;
  display: grid;
  grid-row-gap: 30px;
  align-content: center;
  grid-template-rows: max-content 685px max-content;
`;

export const Section = styled.section``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 540px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    border: none;
  }
`;

export const Image = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.gray200};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px 0 0 12px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Form = styled.form`
  max-width: 330px;

  @media (max-width: 1000px) {
    max-width: 350px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.inter600Ag28};
  margin-bottom: 30px;

  @media (max-width: 800px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Fields = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-bottom: 35px;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter500Ag14};

    a {
      color: ${theme.colors.primary};
      @media (any-hover: hover) {
        &:hover {
          text-decoration-color: ${theme.colors.primary};
        }
      }

      &:focus {
        text-decoration-color: ${theme.colors.primary};
      }
    }
  `}
  text-align: center;

  @media (max-width: 500px) {
    font-size: 12px;
    text-align: center;
  }

  a {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.3s ease;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-row-gap: 10px;
  margin-bottom: 25px;

  button {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 685px;

  @media (max-width: 800px) {
    min-height: unset;
  }
`;

export const Labels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray100};
`;
