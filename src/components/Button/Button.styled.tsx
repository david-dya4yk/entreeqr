import { css } from "@emotion/react";
import styled from "@emotion/styled";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",

  iconSm = "iconSm",
  iconMd = "iconMd",
  iconLg = "iconLg",
  iconXl = "iconXl",
  iconXxl = "iconXxl",
}

export enum ButtonVariant {
  White = "White",
  Primary = "Primary",
  Gray = "Gray",
  GrayIcon = "GrayIcon",
  LightIcon = "LightIcon",
}

export const Button = styled.button<{
  $variant: ButtonVariant;
  size: ButtonSize;
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
  border-radius: 8px;

  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ $variant, size, theme }) => css`
    ${$variant === ButtonVariant.White &&
    css`
      @media (any-hover: hover) {
        &:not(:disabled):hover {
          border-radius: 100px;
        }
      }
      color: ${theme.colors.primary};
      position: relative;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};

      &:focus {
        box-shadow: 0 0 0 4px ${theme.colors.titanWhite};
        border-radius: 100px;
      }
      svg {
        color: ${theme.colors.primary};
      }
    `}

    ${$variant === ButtonVariant.Primary &&
    css`
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.white};

      @media (any-hover: hover) {
        &:not(:disabled):hover {
          border-radius: 100px;
        }
      }

      &:focus {
        box-shadow: 0 0 0 4px ${theme.colors.titanWhite};
        border-radius: 100px;
      }

      svg {
        color: ${theme.colors.white};
      }
    `}

    ${$variant === ButtonVariant.Gray &&
    css`
      border: 1px solid ${theme.colors.titanWhite};
      background-color: transparent;
      color: ${theme.colors.black};
      svg {
        color: ${theme.colors.black};
      }

      @media (any-hover: hover) {
        &:not(:disabled):hover {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border-radius: 100px;
          svg {
            color: ${theme.colors.white};
          }
        }
      }

      &:focus {
        box-shadow: 0 0 0 4px ${theme.colors.titanWhite};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-radius: 100px;
        svg {
          color: ${theme.colors.white};
        }
      }

      &:disabled {
        color: ${theme.colors.gray300};
        opacity: 1;
        svg {
          color: ${theme.colors.gray300};
        }
      }
    `};

    ${[ButtonVariant.GrayIcon, ButtonVariant.LightIcon].includes($variant) &&
    css`
      border: 1px solid
        ${$variant === ButtonVariant.LightIcon
          ? theme.colors.titanWhite
          : theme.colors.gray300};
      background-color: transparent;
      color: ${theme.colors.black};
      display: block;
      font-size: 0;
      svg {
        color: ${theme.colors.black};
      }

      @media (any-hover: hover) {
        &:not(:disabled):hover {
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border-radius: 100px;
          svg {
            color: ${theme.colors.white};
          }
        }
      }

      &:focus {
        box-shadow: 0 0 0 4px ${theme.colors.titanWhite};
        background-color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-radius: 100px;
        svg {
          color: ${theme.colors.white};
        }
      }

      &:disabled {
        color: ${theme.colors.gray300};
        svg {
          color: ${theme.colors.gray300};
        }
      }
    `}

    ${size === ButtonSize.sm &&
    css`
      padding: 10.5px 10px;
      ${theme.fonts.inter600Ag12};
    `}

    ${size === ButtonSize.md &&
    css`
      padding: 12.5px 10px;
      ${theme.fonts.inter600Ag14};
    `}

    ${size === ButtonSize.lg &&
    css`
      padding: 17.5px 15px;
      ${theme.fonts.inter600Ag14};
    `}

    ${size === ButtonSize.xl &&
    css`
      padding: 12px;
      ${theme.fonts.inter600Ag16};
    `}

    ${size === ButtonSize.xxl &&
    css`
      padding: 20px 25px;
      ${theme.fonts.inter600Ag16};
    `}

    ${size === ButtonSize.iconSm &&
    css`
      padding: 8px;
    `}

    ${size === ButtonSize.iconMd &&
    css`
      padding: 10px;
    `}

    ${size === ButtonSize.iconLg &&
    css`
      padding: 12px;
    `}

    ${size === ButtonSize.iconXl &&
    css`
      padding: 15px;
    `}

    ${size === ButtonSize.iconXxl &&
    css`
      padding: 20px;
    `}
  `}
`;
