import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "../Button";
import MyLink from "../Link/Link";
import { Dropdown as DropdownComponent } from "../Dropdown";
import Link from "../Link/Link";

export const Wrapper = styled.header`
  padding-top: 15px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;

  .container {
    @media (max-width: 1000px) {
      padding: 0 30px;
    }
    @media (max-width: 700px) {
      padding: 0 20px;
    }
  }
`;

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #e1e5ef;
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 18px 30px;
  height: 84px;

  display: grid;
  align-items: center;
  grid-column-gap: 40px;
  grid-template-columns: 130px 1fr;

  @media (max-width: 1000px) {
    grid-column-gap: 15px;
    grid-template-columns: 1fr max-content max-content;
    padding: 13px 20px;
    height: 74px;
  }
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 19px 30px;

  @media (max-width: 1000px) {
    padding: 15px 20px;
  }

  @media (max-width: 500px) {
    padding: 10px 10px 10px 20px;
  } */
`;

export const Menu = styled.div`
  /* display: grid;
  grid-template-columns: 124px 1fr;
  column-gap: 46px;

  @media (max-width: 500px) {
    grid-template-columns: 89px;
  } */
`;

export const Logo = styled(MyLink)`
  /* padding: 8px 0;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1000px) {
    padding: 0;
  } */
`;

export const List = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 15px;
  grid-template-columns: repeat(3, max-content);

  @media (max-width: 1000px) {
    display: none;
  }

  /* display: grid;
  align-items: center;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 15px;

  @media (max-width: 1000px) {
    display: none;
  } */
`;

export const Actions = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 15px;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  /* display: grid;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, max-content);
  }

  @media (max-width: 500px) {
    grid-template-columns: max-content;
  } */
`;

export const Try = styled(Button)`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Open = styled.button`
  display: none;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const Language = styled(DropdownComponent)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Inner = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  background-color: white;
  inset: 0;
  z-index: 8;
  padding: 140px 30px 25px;
  overflow: hidden;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const MobileList = styled.div`
  display: grid;
  grid-row-gap: 30px;
  margin-bottom: 100px;
`;

export const Label = styled(Link)`
  font-weight: 500;
  font-size: 28px;
  line-height: 110%;
  color: #000000;
`;

export const Connect = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;

  button {
    width: 100%;
  }
`;
