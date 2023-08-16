import { css } from "@emotion/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

export enum LinkSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",

  primarySm = "primarySm",
  primaryMd = "primaryMd",
  primaryLg = "primaryLg",
  primaryXl = "primaryXl",
  primaryXxl = "primaryXxl",
}

export enum LinkVariant {
  Primary = "Primary",
  Secondary = "Secondary",
}

export const Link = styled(NextLink)<{
  variant: LinkVariant;
  disabled?: boolean;
  size: LinkSize;
}>`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  width: max-content;
  cursor: pointer;
  column-gap: 8px;
  position: relative;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: all 0.3s ease;

  ${({ variant, size, theme, disabled }) => css`
    ${variant === LinkVariant.Primary &&
    css`
      color: ${theme.colors.primary};
      background-color: transparent;
      border: transparent;
      &:focus {
        outline: transparent;
        text-decoration-color: ${theme.colors.primary};
      }
      @media (any-hover: hover) {
        &:not(:disabled):hover {
          text-decoration-color: ${theme.colors.primary};
        }
      }

      svg {
        color: ${theme.colors.primary};
      }

      ${disabled &&
      css`
        opacity: 0.4;
      `}
    `}

    ${variant === LinkVariant.Secondary &&
    css`
      color: ${theme.colors.black};
      background-color: transparent;
      border: transparent;

      &:focus {
        outline: transparent;
        text-decoration-color: ${disabled
          ? theme.colors.gray300
          : theme.colors.black};
      }

      @media (any-hover: hover) {
        &:not(:disabled):hover {
          text-decoration-color: ${disabled
            ? theme.colors.gray300
            : theme.colors.black};
        }
      }

      svg {
        color: ${theme.colors.black};
      }

      ${disabled &&
      css`
        color: ${theme.colors.gray300};
        svg {
          color: ${theme.colors.gray300};
        }
      `}
    `};

    ${size === LinkSize.sm && theme.fonts.inter400Ag12}
    ${size === LinkSize.md && theme.fonts.inter400Ag14}
    ${size === LinkSize.lg && theme.fonts.inter500Ag14}
    ${size === LinkSize.xl && theme.fonts.inter400Ag16}
    ${size === LinkSize.xxl && theme.fonts.inter500Ag16}

    ${size === LinkSize.primarySm && theme.fonts.inter600Ag12}
    ${size === LinkSize.primaryMd && theme.fonts.inter600Ag14}
    ${size === LinkSize.primaryLg && theme.fonts.inter600Ag14}
    ${size === LinkSize.primaryXl && theme.fonts.inter600Ag16}
    ${size === LinkSize.primaryXxl && theme.fonts.inter600Ag16}

    ${disabled &&
    css`
      cursor: not-allowed;
    `}
  `}
`;
