import { css } from "@emotion/react";
import styled from "@emotion/styled";

export enum InputSize {
  xxs = "xxs",
  xs = "xs",
  s = "s",
  m = "m",
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Option = styled.li<{ $active: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  padding: 10px;
  color: #000000;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ $active }) =>
    $active &&
    css`
      background-color: #f9fafb;
    `}

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    color: #2d3282;
  }
`;

export const Label = styled.label<{ $size: InputSize; $hide: boolean }>`
  color: #344054;

  ${({ $size: size, $hide: hide }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 500;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
    `}

    ${size === InputSize.m &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
    `}

    ${hide &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      opacity: 0;
    `}
  `}

  span {
    color: #d92d20;
  }
`;

export const Hint = styled.div<{ $size: InputSize }>`
  color: #475467;

  ${({ $size: size }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}

    ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}
  `}
`;

export const Error = styled.div<{ $size: InputSize }>`
  color: #d92d20;

  ${({ $size: size }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}

  ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}
  `}
`;
