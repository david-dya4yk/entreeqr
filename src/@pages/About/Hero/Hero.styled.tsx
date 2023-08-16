import { Button } from "@/components/Button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled(motion.section)<{ value: number }>`
  ${({ theme, value }) => css`
    ${typeof value !== "number" &&
    css`
      background-color: ${theme.colors.primary};
    `};

    &::before {
      content: "";
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 150vh;
      ${value >= 0 &&
      css`
        background-color: rgba(68, 76, 231, ${value});
      `}
    }
  `}
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    svg {
      color: inherit;
    }
  `};

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 17.5px 15px;
  }
`;

export const Inner = styled.div`
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;

  @media (max-width: 1000px) {
    min-height: 600px;
  }

  @media (max-width: 600px) {
    min-height: 400px;
    padding: 100px 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.itt500H96};
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 64px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20};
  margin-bottom: 50px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Decor = styled.div`
  position: absolute;
  right: -20px;
  top: 240px;
  ${({ theme }) => theme.fonts.caveatHand32};

  @media (max-width: 1350px) {
    right: 0;
  }

  @media (max-width: 800px) {
    top: 150px;
  }

  span {
    transform: rotate(-15deg);
    display: block;
  }

  svg {
    width: 30px;
    height: 40px;
    margin: 0 43px 0 28px;
    display: block;
  }
`;
