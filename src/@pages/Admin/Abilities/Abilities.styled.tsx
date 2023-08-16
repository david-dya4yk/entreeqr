import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section``;

export const Heading = styled.div`
  ${({ theme }) => theme.fonts.it500H48};
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 40px;
    max-width: 260px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag18};
  `}
  max-width: 370px;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 50px;
  }

  @media (max-width: 500px) {
    margin-bottom: 30px;
    font-size: 14px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-rows: 470px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
  }
`;

export const Left = styled.div`
  border: 1px solid #e1e5ef;
  border-radius: 12px;
`;

export const Right = styled.div`
  display: grid;
  grid-row-gap: 15px;
`;

export const Toggle = styled.button`
  color: ${({ theme }) => theme.colors.black};

  &::after {
    position: absolute;
    content: "";
    inset: 0;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 110%;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.3s ease;
`;

export const Tab = styled.div`
  background-color: #f2f4f7;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  display: grid;
  grid-row-gap: 25px;
  height: 80px;
  transition: height 0.3s ease;
  overflow: hidden;
  position: relative;

  &.active {
    background-color: #444ce7;
    height: 185px;

    ${Toggle},
    ${Title} {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 900px) {
      height: auto;
    }
  }
`;

export const Head = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 20px;
  grid-template-columns: 28px 1fr 20px;

  & > svg {
    color: #98a2b3;
    transition: color 0.3s ease;
  }

  &.active > svg {
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
`;
