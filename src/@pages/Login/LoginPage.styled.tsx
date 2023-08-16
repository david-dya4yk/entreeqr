import { Link } from "@/components/Link";
import { media } from "@/styles/mixins.styled";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 40px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  button {
    transition: color 0.3s ease;
  }

  @media (max-width: 500px) {
    justify-content: center;
    margin-bottom: 20px;

    button {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Logo = styled.div`
  svg {
    width: 118px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary};
    &:last-child {
      display: none;
      width: 50px;
      height: 50px;

      @media (max-width: 500px) {
        display: block;
      }
    }
    @media (max-width: 500px) {
      width: 50px;
      height: 50px;
      display: none;
    }
  }
`;

export const Inner = styled.form`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 30px;

  @media (max-width: 500px) {
    padding: 0;
    border: none;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.inter600Ag28}
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag16}
  `}
  margin-bottom: 30px;
  text-align: center;

  ${media(
    500,
    css`
      text-align: center;
      font-size: 14px;
    `
  )}
`;

export const StyledLink = styled(Link)`
  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Labels = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    grid-row-gap: 15px;
  }
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
    max-width: 320px;
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
