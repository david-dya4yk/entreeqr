import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;

    button {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }

  .container {
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  overflow: hidden;
  height: 655px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  .parallax {
    top: 50px;
  }

  .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(6, max-content);
    grid-column-gap: 50px;
  }
`;

export const Inner = styled.ul`
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, max-content);
  grid-column-gap: 50px;

  @media (max-width: 600px) {
    padding-top: 25px;
  }
`;

export const Item = styled.li`
  width: 370px;
  height: 370px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

  &:nth-child(2) {
    width: 170px;
    height: 270px;

    @media (max-width: 600px) {
      width: 100px;
      height: 170px;
    }
  }

  &:nth-child(3) {
    width: 400px;
    height: 320px;

    @media (max-width: 600px) {
      width: 310px;
      height: 250px;
    }
  }

  &:nth-child(4) {
    width: 270px;
    height: 200px;

    @media (max-width: 600px) {
      width: 230px;
      height: 170px;
    }
  }

  &:nth-child(5) {
    width: 250px;
    height: 370px;

    @media (max-width: 600px) {
      width: 200px;
      height: 300px;
    }
  }

  &:nth-child(6) {
    width: 320px;
    height: 320px;

    @media (max-width: 600px) {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Bottom = styled.div`
  padding: 70px 50px;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 30px;
  align-items: center;

  @media (max-width: 800px) {
    padding: 50px 24px 40px;
  }

  @media (max-width: 600px) {
    padding: 30px 25px 25px;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H32};
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag18};
  `}
  max-width: 420px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
