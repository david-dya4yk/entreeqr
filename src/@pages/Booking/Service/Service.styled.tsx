import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 1000px) {
    margin: 0 auto 70px;
  }

  @media (max-width: 768px) {
    margin: 0 auto 30px;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 350px);
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: 700px) {
    grid-template-columns: 320px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  padding: 50px;
  height: 470px;

  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 370px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    height: 320px;
  }

  &:last-child {
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 1000px) {
      height: 470px;
    }

    @media (max-width: 700px) {
      grid-column: unset;
    }
  }

  &.contact {
    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 120px;
      height: 120px;
      top: 118px;
      left: 40px;
      border-radius: 50%;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23444CE7FF' strokeWidth='4' stroke-dasharray='7' stroke-dashoffset='65' strokeLinecap='butt'/%3e%3c/svg%3e");

      @media (max-width: 1000px) {
        width: 100px;
        height: 100px;
        top: 57.7px;
        left: 25px;
      }

      @media (max-width: 768px) {
        top: 60px;
      }
    }

    &::after {
      left: unset;
      right: 40px;

      @media (max-width: 1000px) {
        right: 25px;
      }
    }
  }
`;

export const Content = styled.div`
  min-height: 270px;

  @media (max-width: 1000px) {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    min-height: 180px;
  }

  &.reservation {
    min-height: 235px;

    @media (max-width: 1000px) {
      min-height: 135px;
    }
  }
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    ${theme.fonts.it500H32};
  `}
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: absolute;
  top: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  left: 50px;

  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 1000px) {
    width: 90px;
    height: 90px;
    top: 60px;
    left: 25px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
    top: 65px;
  }

  &:nth-child(2) {
    border-radius: 12px;
    left: 180px;
    ${({ theme }) => css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    `}

    @media (max-width: 1000px) {
      left: 130px;
    }

    @media (max-width: 768px) {
      left: 120px;
    }
  }

  &:nth-child(3) {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
    left: 310px;

    @media (max-width: 1000px) {
      left: 235px;
    }

    @media (max-width: 768px) {
      left: 215px;
    }
  }
`;

export const Cloud = styled.div`
  width: 251px;
  height: 235px;
  position: absolute;
  right: -55px;
  top: -12px;
`;

export const Boxes = styled.div`
  display: grid;
  grid-row-gap: 15px;
  height: 100%;
  grid-template-rows: repeat(3, max-content);

  @media (max-width: 1000px) {
    grid-row-gap: 11px;
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  height: 65px;
  position: relative;
  filter: drop-shadow(0 5px 20px rgba(29, 41, 57, 0.1));

  @media (max-width: 1000px) {
    height: 48px;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.colors.mystic};
  }
  &::before {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 13px;
    left: 20px;

    @media (max-width: 1000px) {
      width: 29px;
      height: 29px;
      top: 9.5px;
      left: 14.5px;
    }
  }

  &::after {
    width: 100px;
    border-radius: 12px;
    height: 20px;
    left: 75px;
    top: 23px;

    @media (max-width: 1000px) {
      height: 15px;
      left: 54.5px;
      top: 17px;
      width: 73px;
    }
  }

  &:nth-child(2):after {
    width: 140px;

    @media (max-width: 1000px) {
      width: 102px;
    }
  }
  &:nth-child(3):after {
    width: 200px;

    @media (max-width: 1000px) {
      width: 145px;
    }
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => theme.fonts.it500H32};
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 24px;
  }
`;

export const Text = styled.div`
  max-width: 370px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Image = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    svg {
      color: ${theme.colors.white};
    }
  `}
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50px;
  top: 128px;

  svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1000px) {
    height: 80px;
    width: 80px;
    top: 67.7px;
    left: 35px;
  }

  @media (max-width: 768px) {
    top: 70px;
  }

  &:nth-child(2) {
    left: 320px;

    @media (max-width: 1000px) {
      left: unset;
      right: 35px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Line = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 110px;
  left: 141px;

  @media (max-width: 1000px) {
    top: 50px;
    left: 120px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 2px;
    top: 110px;
    left: 125px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23444CE7FF' strokeWidth='4' stroke-dasharray='5' stroke-dashoffset='0' strokeLinecap='butt'/%3e%3c/svg%3e");
  }

  svg {
    width: 180px;
    height: 105px;

    @media (max-width: 1000px) {
      width: 117px;
      height: 102.5px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Img = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1000px) {
  }
  svg {
    width: 40px;
    height: 40px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 110px);
  grid-gap: 15px;
  grid-template-rows: repeat(2, max-content);
  height: 100%;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 80px);
  }
`;

export const Phone = styled.div`
  max-width: 370px;
  height: 410px;
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    right: -94px;
  }

  @media (max-width: 700px) {
    max-width: 225px;
    height: 250px;
    right: 0;
    top: 35px;
  }
`;

export const Svg = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;

  &.telegram {
    width: 45px;
    height: 45px;
    top: 111px;
    right: 709px;

    @media (max-width: 1000px) {
      top: 116px;
      right: 615px;
    }

    @media (max-width: 700px) {
      top: 116px;
      right: 296px;
    }
  }

  &.linkin {
    width: 40px;
    height: 40px;
    top: 77px;
    right: 618px;

    @media (max-width: 1000px) {
      top: 82px;
      right: 524px;
    }

    @media (max-width: 700px) {
      top: 81.5px;
      right: 205.5px;
    }
  }

  &.whatsapp {
    width: 54px;
    height: 54px;
    top: 151px;
    right: 610px;

    @media (max-width: 1000px) {
      top: 156px;
      right: 516px;
    }

    @media (max-width: 700px) {
      top: 156px;
      right: 197.5px;
    }
  }

  &.tiktok {
    width: 38px;
    height: 45px;
    right: 523px;
    top: 111px;

    @media (max-width: 1000px) {
      top: 116px;
      right: 426px;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  &.facebook {
    width: 54px;
    height: 54px;
    right: 422px;
    top: 65px;

    @media (max-width: 1000px) {
      top: 70px;
      right: 328px;
    }

    @media (max-width: 700px) {
      top: 70px;
      right: 9px;
    }
  }

  &.instagram {
    width: 40px;
    height: 40px;
    top: 163px;
    right: 429px;

    @media (max-width: 1000px) {
      top: 168px;
      right: 335px;
    }

    @media (max-width: 700px) {
      top: 168px;
      right: 16px;
    }
  }

  &.twitter {
    width: 45px;
    height: 36px;
    top: 115px;
    right: 332px;

    @media (max-width: 1000px) {
      top: 116px;
      right: 238px;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Picture = styled.div`
  width: 250px;
  height: 150px;
  position: absolute;
  top: -50px;
  left: -30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 1000px) {
    top: -82px;
    left: -22px;
    width: 188px;
    height: 110px;
  }

  @media (max-width: 768px) {
    width: 170px;
    top: -68px;
    left: -20.5px;
  }

  &:nth-child(2) {
    width: 170px;
    height: 100px;
    top: 115px;
    left: 100px;

    @media (max-width: 1000px) {
      width: 126.5px;
      height: 73.5px;
      top: 39.5px;
      left: 74.5px;
    }

    @media (max-width: 768px) {
      width: 115px;
      top: 54.5px;
      left: 68px;
    }
  }

  &:nth-child(3) {
    left: 235px;
    width: 150px;

    @media (max-width: 1000px) {
      width: 112px;
      left: 175px;
    }

    @media (max-width: 768px) {
      width: 102px;
      left: 160px;
    }
  }

  &:nth-child(4) {
    width: 100px;
    height: 100px;
    left: 285px;
    top: 115px;

    @media (max-width: 1000px) {
      width: 74.5px;
      height: 73.5px;
      top: 39.5px;
      left: 212px;
    }

    @media (max-width: 768px) {
      width: 68px;
      height: 73.5px;
      left: 194px;
      top: 54.5px;
    }
  }

  &:nth-child(5) {
    width: 150px;
    left: 400px;

    @media (max-width: 1000px) {
      width: 112px;
      left: 298px;
    }

    @media (max-width: 768px) {
      width: 102px;
      left: 272px;
    }
  }

  &:nth-child(6) {
    width: 150px;
    left: 400px;
    top: 115px;

    @media (max-width: 1000px) {
      width: 112px;
      top: 39.5px;
      left: 298px;
    }

    @media (max-width: 768px) {
      top: 54.5px;
      left: 272px;
      width: 102px;
    }
  }
`;

export const Map = styled.div`
  width: 370px;
  height: 235px;
  position: absolute;
  right: 0;
  top: -15px;

  @media (max-width: 1000px) {
    top: 0;
    width: 250px;
    height: 126px;
  }
  span {
    width: 395px;
    height: 260px;
    position: absolute;
    left: -15px;
    bottom: -15px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23444CE7FF' strokeWidth='4' stroke-dasharray='9' stroke-dashoffset='0' strokeLinecap='round'/%3e%3c/svg%3e");
    border-radius: 12px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  svg {
    width: 40px;
    height: 40px;
    color: $primary;
    position: absolute;
    top: 100px;
    right: 215px;

    @media (max-width: 1000px) {
      top: 51px;
      right: 145px;
    }
  }
`;

export const Pic = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    span {
      color: ${theme.colors.black};
      ${theme.fonts.inter500Ag18};
    }
  `}
  position: absolute;
  width: 90px;
  height: 90px;

  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 65px;
  left: 78px;
  z-index: 3;

  @media (max-width: 1000px) {
    top: 35px;
    left: 70px;
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    top: 40px;
    left: 55px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media (max-width: 1000px) {
      width: 25px;
      width: 25px;
    }
  }

  span {
    text-align: center;
    max-width: 120px;
    padding-top: 15px;

    @media (max-width: 1000px) {
      padding-top: 10px;
      font-size: 12px;
    }
  }

  &:nth-child(2) {
    width: 170px;
    height: 170px;
    color: #039855;
    top: 50px;
    left: 148px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 2;

    @media (max-width: 1000px) {
      top: 25px;
      left: 116.5px;
      width: 113px;
      height: 113px;
    }

    @media (max-width: 768px) {
      top: 30px;
      left: 102px;
    }

    svg {
      width: 45px;
      height: 45px;

      @media (max-width: 1000px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    top: 135px;
    left: 293px;
    z-index: 1;

    @media (max-width: 1000px) {
      width: 66.5px;
      height: 66.5px;
      top: 81.5px;
      left: 213px;
    }

    @media (max-width: 768px) {
      top: 86.5px;
      left: 198px;
    }
  }
`;
