import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 297px;
    background-color: ${({ theme }) => theme.colors.gray100};
    z-index: -1;

    @media (max-width: 1000px) {
      height: 450px;
    }

    @media (max-width: 800px) {
      height: 600px;
    }

    @media (max-width: 500px) {
      height: 515px;
    }
  }

  @media (max-width: 1000px) {
    padding-top: 180px;
  }

  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  /* margin-top: -85px; */
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 370px 270px 270px;
  grid-column-gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-gap: 30px 10px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    grid-gap: 20px 0;
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  &:first-child {
    @media (max-width: 800px) {
      grid-column: 1 / 3;
    }

    @media (max-width: 500px) {
      grid-column: unset;
    }
  }
`;

export const Heading = styled.h3`
  ${({ theme }) => theme.fonts.it500H48};

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    max-width: 300px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 10px;
    max-width: 100%;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    ${theme.fonts.inter400Ag16};

    span {
      color: ${theme.colors.black};
      ${theme.fonts.it500H24};
    }
  `};

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  span {
    display: block;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const Picture = styled.div`
  height: 400px;
  max-width: 100%;

  @media (max-width: 600px) {
    height: 270px;
  }

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
