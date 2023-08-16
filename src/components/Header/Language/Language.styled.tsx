import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  min-width: 55px;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #000000;
  display: flex;
  align-items: center;
  cursor: pointer;
  column-gap: 8px;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.3s ease;

  svg {
    color: #667085;
  }

  &:hover {
    text-decoration-color: #000000;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  border-radius: 12px;
  padding: 15px;
  right: -10px;
  top: 45px;
  display: grid;
  grid-row-gap: 10px;
  min-width: 120px;
`;

export const Item = styled.li<{ active: boolean }>`
  border-radius: 10px;
  padding: 12px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #000000;
  transition: background-color 0.3s ease;

  ${({ active }) =>
    active &&
    css`
      background-color: #f2f4f7;
    `}
  &:hover {
    background-color: #f2f4f7;
  }
`;
