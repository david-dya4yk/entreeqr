import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Label = styled.label`
  display: block;
  position: relative;
  span {
    ${({ theme }) => css`
      color: ${theme.colors.gray700};
      ${theme.fonts.inter500Ag14}
    `}
    margin-bottom: 6px;
    display: block;

    @media (max-width: 500px) {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }

  sup {
    color: #d92d20;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray300};
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag16};

    &:last-child {
      color: ${theme.colors.black};
    }
    &::placeholder {
      ${theme.fonts.inter400Ag16}
    }
  `}
  outline: transparent;
  padding: 12px 14px;
  border-radius: 12px;
  width: 100%;

  @media (max-width: 500px) {
    padding: 12px;
    font-size: 14px;
  }

  &.password {
    padding: 12px 35px 12px 14px;

    @media (max-width: 500px) {
      padding: 12px 35px 12px 12px;
      font-size: 14px;
    }
  }
`;

export const Icon = styled.button`
  position: absolute;
  top: 36px;
  right: 14px;

  ${({ theme }) => css`
    &:focus {
      outline: transparent;
      svg {
        color: ${theme.colors.primary};
      }
    }

    svg {
      width: 16px;
      height: 16px;
      transition: color 0.3s ease;

      color: ${theme.colors.gray400};

      @media (any-hover: hover) {
        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag14}
  `}
  padding-top: 5px;
`;

export const Hint = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag14}
  `}
  padding-top: 5px;
`;
