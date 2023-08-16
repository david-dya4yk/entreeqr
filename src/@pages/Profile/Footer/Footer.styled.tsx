import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  width: 100%;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 20px;
`;

export const Item = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag14}
  `}
`;

export const Link = styled.a`
  display: grid;
  align-items: center;
  grid-column-gap: 5px;
  grid-template-columns: 20px max-content;

  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag14}
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 15px;
  grid-template-columns: repeat(2, max-content);
`;

export const NavLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  color: #667085;
  display: grid;
  align-items: center;
  grid-column-gap: 5px;
  grid-template-columns: 20px max-content;
`;
