import { Button } from "@/components/Button";
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
  grid-template-columns: 38% 63%;
  justify-content: space-between;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.itt500H48}
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 1.1;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag18};
    color: ${theme.colors.gray500};
  `}
  max-width: 270px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.25;
    max-width: 300px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const Link = styled(Button)`
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-row-gap: 16px;

  @media (max-width: 800px) {
    grid-row-gap: 10px;
  }
`;

export const Body = styled.div<{ $active: boolean }>`
  ${({ theme }) => theme.fonts.inter400Ag22};
  display: grid;
  grid-template-columns: 1fr 44px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2px;
  border-radius: 12px;
  grid-column-gap: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, padding 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 800px) {
    padding: 8px 1px;
  }

  @media (max-width: 600px) {
    padding: 6px 1px;
    grid-template-columns: 1fr 36px;
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 25px;

      @media (max-width: 800px) {
        padding: 5px 20px 20px;
      }

      svg {
        color: ${theme.colors.white};
      }

      button::before {
        border-color: transparent;
      }
    `}
`;

export const Plus = styled(Button)<{ $active: boolean }>`
  @media (max-width: 600px) {
    padding: 8px;
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      transform: translateY(-5px);
      border-color: transparent;

      svg {
        color: ${theme.colors.white};
      }
    `}
`;

export const Item = styled.li`
  position: relative;

  &:not(:last-of-type) {
    &::before {
      position: absolute;
      content: "";
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
      left: 0;
      right: 0;
      bottom: -8px;

      @media (max-width: 800px) {
        bottom: -5px;
      }
    }
  }
`;

export const Text = styled.div`
  height: 0;
  overflow: hidden;
  grid-column: 1/3;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-top: 8px;
  }

  ${({ theme }) => css`
    ${theme.fonts.inter400Ag16};
    height: auto;
  `}
`;

export const Headline = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag22};

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
