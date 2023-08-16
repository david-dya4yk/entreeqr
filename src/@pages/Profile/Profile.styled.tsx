import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Body = styled.div`
  min-height: 100%;
  padding: 30px 0;
  display: grid;
  grid-row-gap: 30px;
  align-content: center;
  grid-template-rows: max-content 685px max-content;

  @media (max-width: 850px) {
    padding: 30px 0 0;
    grid-template-rows: max-content 1fr;
  }
`;

export const Section = styled.section`
  /* width: 100%;
  height: 100%;

  @media (max-width: 850px) {
    .container {
      height: 100%;
      padding: 0;
    }
  } */
  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const Wrapper = styled.ul`
  height: 685px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  padding: 40px 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  overflow-y: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }

  @media (max-width: 850px) {
    border-color: transparent;
    height: 100%;
  }

  @media (max-width: 800px) {
    border-radius: 0;
    padding-bottom: 90px;
    grid-template-rows: max-content;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding: 20px 20px 95px;
    grid-gap: 15px;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  padding: 20px;
  height: 290px;

  @media (max-width: 500px) {
    height: 100%;
    grid-row-gap: 25px;
    align-items: center;
    grid-column-gap: 15px;
    grid-template-rows: 56px 40px;
    grid-template-columns: 56px 1fr;
    grid-template-areas:
      "Image Title"
      "Footer Footer";
    height: 160px;
  }

  &:last-of-type {
    display: flex;
    align-items: center;
    background-color: transparent;
    flex-direction: column;
    border-color: transparent;
    justify-content: center;
    transition: border-color 0.3s ease;
    position: relative;

    @media (any-hover: hover) {
      &:hover {
        border-color: ${({ theme }) => theme.colors.gray200};
      }
    }

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Img = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    margin-bottom: 0;
    grid-area: Image;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.gray300};
  }

  &::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray500};
    border: 2px solid ${({ theme }) => theme.colors.white};
    right: 2px;
    bottom: 2px;
  }

  &.online::after {
    background-color: #039855;
  }
`;

export const Add = styled.button`
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background-color: white;
  outline: transparent;
  color: ${({ theme }) => theme.colors.gray700};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

export const Info = styled.div`
  text-align: center;
  ${({ theme }) => theme.fonts.inter500Ag14}
  max-width: 120px;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.inter500Ag20}
  margin-bottom: 10px;

  @media (max-width: 500px) {
    margin-bottom: 0;
    max-width: 160px;
    font-size: 18px;
    grid-area: Title;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    /* TODO change to ag13 */
    ${theme.fonts.inter400Ag12}
  `}

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 10px;
  align-items: center;

  @media (max-width: 500px) {
    grid-area: Footer;

    button {
      padding: 9px;
    }
  }

  button {
    width: 100%;
  }
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}
  max-height: 40px;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray200};
    background-color: ${theme.colors.white};
  `}
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 12px;
  padding: 15px 20px;
  z-index: 2;
  button {
    width: 100%;
  }

  @media (max-width: 850px) {
    display: block;
  }
`;
