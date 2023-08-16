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

  &.rate {
    svg {
      width: 85px;
      height: 85px;
      top: 35px;
      left: -35px;

      @media (max-width: 800px) {
        left: -25px;
      }

      @media (max-width: 700px) {
        top: 25px;
        left: -20px;
      }

      &:last-child {
        top: unset;
        left: unset;
        right: -25px;
        bottom: 35px;
        width: 100px;
        height: 100px;

        @media (max-width: 700px) {
          bottom: 25px;
          right: -20px;
        }
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

  &.rate {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 700px) {
      padding-top: 30px;
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
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag18};
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
