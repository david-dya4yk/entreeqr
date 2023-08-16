import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
`;

export const Inner = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    button {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 850px) {
      span {
        display: none;
      }
    }

    @media (max-width: 650px) {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 650px) {
    font-size: 0;
  }

  ${({ theme }) => theme.fonts.makesans500_28};
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 10px;
`;

export const Language = styled.div`
  padding: 10px 11px;

  @media (max-width: 500px) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 15px;
  align-items: flex-end;
`;
