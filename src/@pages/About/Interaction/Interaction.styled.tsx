import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 auto 30px;

  @media (max-width: 700px) {
    margin: 0 auto 20px;
  }
`;

const imgCss = css`
  img {
    filter: drop-shadow(0 5px 20px rgba(29, 41, 57, 0.1));
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const Subtitle = styled.div`
  max-width: 570px;
  margin: 0 auto;
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag20};
  `}

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Inner = styled.div`
  padding: 110px 0 57px;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 66px 0 58px;
  }
`;

export const Box = styled.div`
  max-width: 630px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 700px) {
    max-width: 305px;
  }
`;

export const Content = styled.div`
  ${imgCss};
  max-width: 630px;
  height: 378px;
  position: relative;
  z-index: 2;

  @media (max-width: 700px) {
    max-width: 306px;
    height: 185px;
  }
`;

export const Image = styled.div`
  ${imgCss};

  max-width: 170px;
  height: 270px;
  position: absolute;
  top: 19px;
  left: -126px;
  z-index: 1;
  transform: rotate(-5deg);

  @media (max-width: 700px) {
    max-width: 82px;
    height: 132px;
    top: 9px;
    left: -61px;
  }
`;

export const Img = styled.div`
  ${imgCss};

  max-width: 300px;
  height: 200px;
  position: absolute;
  top: -60px;
  left: -73px;
  z-index: 2;
  transform: rotate(10deg);

  @media (max-width: 700px) {
    max-width: 145px;
    height: 98px;
    top: -20px;
    left: -35px;
  }
`;

export const Wrapper = styled.div`
  background-color: $gray100;
  margin-top: -275px;
  padding: 330px 0 150px;

  @media (max-width: 800px) {
    padding: 345px 0 150px;
    margin-top: -290px;
  }

  @media (max-width: 700px) {
    padding: 210px 0 100px;
    margin-top: -180px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.gray500};
    }
    ${theme.fonts.it400H24};
  `}
  max-width: 790px;
  margin: 0 auto;
  p:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Messages = styled.div<{ bottom?: boolean }>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    ${theme.fonts.inter500Ag16};
    color: ${theme.colors.white};
  `}
  padding: 15px;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  transform: rotate(5deg);
  right: -121px;
  top: -17px;
  position: absolute;
  z-index: 3;

  @media (max-width: 900px) {
    right: -61px;
  }

  @media (max-width: 700px) {
    font-size: 10px;
    padding: 10px;
    right: -30px;
    top: -9px;
  }

  @media (max-width: 500px) {
    padding: 6px;
    font-size: 8px;
    border-radius: 7px;
  }

  ${({ bottom }) =>
    bottom &&
    css`
      z-index: 2;
      right: -137px;
      top: 32px;
      transform: rotate(-5deg);

      @media (max-width: 900px) {
        right: -77px;
      }

      @media (max-width: 700px) {
        right: -37px;
        top: 16px;
      }
    `}
`;

export const Iphone = styled.div`
  ${imgCss};

  max-width: 150px;
  height: 270px;
  position: absolute;
  z-index: 2;
  bottom: -50px;
  right: -25px;
  transform: rotate(5deg);

  @media (max-width: 700px) {
    max-width: 75px;
    height: 127px;
    right: -13px;
    bottom: -26px;
  }
`;
