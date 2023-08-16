import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.div`
  max-width: 470px;
  height: 600px;
  position: relative;

  @media (max-width: 900px) {
    max-width: 350px;
  }

  @media (max-width: 700px) {
    max-width: 470px;
    height: 470px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    @media (max-width: 432px) {
      object-position: right;
    }
  }
  svg {
    position: absolute;
    width: 90px;
    height: 80px;
    top: 40px;
    left: -45px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 1100px) {
      left: -10px;
    }
    &:last-child {
      width: 120px;
      height: 100px;
      left: -55px;
      top: 150px;
      @media (max-width: 1100px) {
        left: -20px;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 370px;
  padding: 90px 0;

  @media (max-width: 800px) {
    max-width: 260px;
    padding: 57px 0;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }

  .communication__link {
    @media (max-width: 500px) {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H48};
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag18};
    color: ${theme.colors.gray500};
  `}
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Item = styled.li`
  padding-left: 35px;
  ${({ theme }) => theme.fonts.inter500Ag18};
  position: relative;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
  &::before {
    position: absolute;
    content: "";
    background-image: url("images/decor/aim.svg");
    width: 20px;
    height: 20px;
    inset: 0;
    left: 0;
    top: 0;
  }
  &:not(:last-child) {
    margin-bottom: 15px;

    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 50px;

  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
`;
