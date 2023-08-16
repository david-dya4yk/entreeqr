import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const User = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}
`;

export const Btn = styled.button`
  background-color: transparent;
  border: transparent;
  color: ${({ theme }) => theme.colors.black};
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    inset: 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 10px;
  align-items: center;
  position: relative;
`;

export const Headline = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.black};
    }
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag12}
  `}
  text-align: right;
  margin-right: 5px;
  span {
    display: block;
    font-size: 16px;
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 420px;
  border: 1px solid #e1e5ef;
  border-radius: 12px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: #000000;
`;

export const Head = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-rows: 150px;
  grid-template-columns: 150px 1fr;
`;

export const Avatar = styled.div``;

export const Fields = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;

export const Hr = styled.hr`
  border: 0.5px solid #e1e5ef;
  margin: 25px 0;
`;

export const Buttons = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;

  button {
    width: 100%;
  }
`;

export const Field = styled.div<{ $error?: string }>`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 40px;

  ${({ $error }) => css`
    ${!$error &&
    css`
      align-items: flex-end;
    `}
    ${$error &&
    css`
      align-items: center;
    `}
  `}
`;

export const Edit = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 10px;
`;
