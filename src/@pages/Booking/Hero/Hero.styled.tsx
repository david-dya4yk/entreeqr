import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 270px 0 75px;
  overflow: hidden;

  @media (max-width: 1100px) {
    padding: 170px 0 75px;
  }

  @media (max-width: 600px) {
    padding: 125px 0 50px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 570px 475px;
  grid-gap: 120px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 480px);
    grid-gap: 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: max-content;
    grid-gap: 120px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    grid-gap: 200px;
  }
`;

export const Content = styled.div`
  padding-left: 100px;

  @media (max-width: 1400px) {
    padding-left: 0;
  }

  @media (max-width: 1100px) {
    max-width: 620px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64}
  margin-bottom: 30px;

  @media (max-width: 1100px) {
    font-size: 48px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${theme.inter400Ag18};
    color: ${theme.colors.gray600};
  `}
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    margin-bottom: 20px;

    font-size: 14px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 20px;
  a {
    @media (max-width: 600px) {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    column-gap: 10px;
  }
`;

export const Images = styled.div`
  max-width: 475px;
  height: 620px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    height: 530px;
    max-width: 370px;
    margin-left: auto;
  }

  @media (max-width: 900px) {
    margin-left: 80px;
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }

  @media (max-width: 600px) {
    max-width: 320px;
    height: 395px;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  position: absolute;
  max-width: 475px;
  height: 620px;
  right: -212px;
  top: -100px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 1400px) {
    max-width: 530px;
    height: 530px;
  }

  @media (max-width: 1100px) {
    top: -70px;
    right: -258px;
  }

  @media (max-width: 600px) {
    width: 340px;
    height: 340px;
    right: -20px;
    top: -153px;
  }
`;

export const Message = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag18};
    background-color: ${theme.colors.white};

    span {
      color: ${theme.colors.gray500};
    }
  `}
  position: absolute;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(29, 41, 57, 0.1);

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 15px;
    border-radius: 20px;
  }

  &.reservation {
    &:nth-child(3) {
      top: 60px;
      left: 70px;
      right: unset;
      max-width: 176px;

      @media (max-width: 1100px) {
        left: -30px;
      }

      @media (max-width: 600px) {
        top: 35px;
        left: -15px;
      }
    }
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      margin-bottom: 5px;
    }
  }
  &:nth-child(3) {
    right: -136px;
    top: 112px;

    @media (max-width: 600px) {
      max-width: 157px;
      top: 33px;
      right: 0;
    }
  }

  &:nth-child(4) {
    right: -36px;
    top: 202px;

    @media (max-width: 600px) {
      max-width: 139px;
      top: 110px;
      right: 0;
    }
  }

  &:nth-child(5) {
    top: 284px;
    left: 4px;
    right: unset;
    z-index: -1;

    @media (max-width: 600px) {
      top: 167px;
      left: 13px;
    }
  }

  &:nth-child(6) {
    z-index: -1;
    top: 374px;
    left: -20px;
    right: unset;

    @media (max-width: 600px) {
      left: 0px;
      top: 237px;
    }
  }
`;
