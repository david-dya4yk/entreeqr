import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 900px) {
    background-color: #fff;
    border-radius: 8px;
    height: 270px;
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Location = styled.div`
  z-index: 2;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;

  &:nth-of-type(1) {
    top: 86px;
    left: 21px;

    @media (max-width: 900px) {
      left: 15.5px;
      top: 42px;
    }
  }

  &:nth-of-type(2) {
    top: 41px;
    right: 21px;

    @media (max-width: 900px) {
      right: 15.5px;
      top: 15.5px;
    }
  }

  &:nth-of-type(3) {
    right: 50%;
    bottom: 21px;
    transform: translateX(50%);

    @media (max-width: 900px) {
      bottom: 15.5px;
      left: 50%;
      transform: translateX(-20%);
      right: unset;
    }
  }
`;

export const Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  svg {
    position: absolute;
  }

  @media (max-width: 900px) {
    width: 70px;
    height: 70px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Center = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  width: 80px;
  height: 80px;

  @media (max-width: 900px) {
    width: 47px;
    height: 47px;
  }
`;

export const Lines = styled.div`
  svg {
    position: absolute;

    &:nth-of-type(1) {
      top: 140px;
      left: 29%;

      @media (max-width: 900px) {
        width: 54px;
        height: 32px;
        top: 80px;
      }
    }

    &:nth-of-type(2) {
      right: 19%;
      top: 152px;

      @media (max-width: 900px) {
        width: 64px;
        height: 49px;
        top: 85px;
        right: 22%;
      }
    }

    &:nth-of-type(3) {
      top: 50%;
      right: 56%;

      @media (max-width: 900px) {
        width: 58px;
        height: 81px;
        right: 51%;
      }
    }
  }
`;
