import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Title = styled.h2`
  margin: 0 auto 30px;

  @media (max-width: 500px) {
    margin: 0 auto 20px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20};
  max-width: 570px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 900px) {
    margin: 0 auto 70px;
    font-size: 18px;
  }

  @media (max-width: 500px) {
    margin: 0 auto 30px;
    font-size: 14px;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 100px;

  @media (max-width: 900px) {
    grid-row-gap: 70px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 50px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    grid-row-gap: 20px;
  }
`;

export const Images = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  width: 470px;
  height: 470px;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 320px;
    height: 320px;
  }

  &.color {
    padding: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;

    @media (max-width: 900px) {
      padding: 50px;
      grid-gap: 22px;
    }

    @media (max-width: 500px) {
      padding: 60px;
      grid-gap: 18px;
    }
  }

  &.background {
    background: center/contain no-repeat url("images/content/redaction/bg.jpg");
  }

  &.block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px;
    grid-gap: 30px;

    @media (max-width: 900px) {
      grid-gap: 21px;
    }

    @media (max-width: 500px) {
      grid-gap: 19px;
      padding: 45px;
    }
  }
`;

export const Icon = styled.div`
  border-radius: 40px;
  background-color: #e0eaff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-top: 26px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }

  @media (max-width: 500px) {
    border-radius: 30px;
    padding-top: 20px;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 900px) {
      height: 45px;
    }

    @media (max-width: 500px) {
      height: 36px;
    }
  }

  svg {
    height: 44px;
    width: 48px;

    @media (max-width: 900px) {
      width: 34px;
      height: 22px;
    }

    @media (max-width: 500px) {
      width: 27px;
      height: 17px;
    }
  }

  &:nth-child(2) {
    border-radius: 30px;
    background-color: #d1fadf;

    @media (max-width: 500px) {
      border-radius: 20px;
    }

    svg {
      height: 44px;
      width: 52px;

      @media (max-width: 900px) {
        width: 38px;
        height: 22px;
      }

      @media (max-width: 500px) {
        width: 30px;
        height: 17px;
      }
    }

    &::after {
      background-color: #039855;
    }
  }
  &:nth-child(3) {
    border-radius: 4px;
    background-color: #fdead7;
    padding-top: 18px;

    @media (max-width: 500px) {
      padding-top: 15px;
    }

    svg {
      height: 53px;
      width: 62px;

      @media (max-width: 900px) {
        width: 48px;
        height: 29px;
      }

      @media (max-width: 500px) {
        width: 38px;
        height: 23px;
      }
    }

    &::after {
      background-color: #e04f16;
    }
  }
  &:nth-child(4) {
    border-radius: 15px;
    background-color: #e6e3ff;

    svg {
      height: 44px;
      width: 48px;

      @media (max-width: 900px) {
        width: 38px;
        height: 24px;
      }

      @media (max-width: 500px) {
        width: 30px;
        height: 19px;
      }
    }

    &::after {
      background-color: #6938ef;
    }
  }
`;

export const Content = styled.div`
  max-width: 370px;

  @media (max-width: 800px) {
    max-width: 260px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => theme.fonts.it500H32};
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div``;

export const Img = styled.div`
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  position: absolute;
  width: 160px;
  height: 310px;
  left: -115px;
  top: -146px;

  @media (max-width: 900px) {
    top: -109px;
    left: -86px;
    width: 120px;
    height: 230px;
  }

  @media (max-width: 500px) {
    width: 109px;
    height: 211px;
    left: -78px;
    top: -99px;
  }

  &:nth-child(2) {
    left: 75px;

    @media (max-width: 900px) {
      left: 56px;
    }

    @media (max-width: 500px) {
      left: 51px;
    }
  }

  &:nth-child(3) {
    width: 220px;
    top: -64px;
    left: 265px;

    @media (max-width: 900px) {
      width: 164px;
      top: -48px;
      left: 197px;
    }

    @media (max-width: 500px) {
      width: 150px;
      top: -43.5px;
      left: 180px;
    }
  }

  &:nth-child(4) {
    width: 240px;
    top: 194px;
    left: -5px;

    @media (max-width: 900px) {
      left: -10px;
      height: 231px;
      width: 185px;
      top: 144px;
    }

    @media (max-width: 500px) {
      width: 169px;
      height: 211px;
      left: -9px;
      top: 132px;
    }
  }

  &:nth-child(5) {
    width: 205px;
    height: 194px;
    left: unset;
    top: unset;
    right: 0;
    bottom: 0;
    img {
      border-radius: 12px 0 0 0;
    }

    @media (max-width: 900px) {
      width: 153px;
      height: 144px;
    }

    @media (max-width: 500px) {
      width: 139px;
      height: 132px;
    }
  }
`;

export const Image = styled.div`
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  position: absolute;
  width: 270px;
  height: 464px;
  left: -70px;
  top: -358px;

  @media (max-width: 900px) {
    width: 200px;
    height: 346px;
    left: -52px;
    top: -267px;
  }

  @media (max-width: 500px) {
    width: 183px;
    height: 316px;
    left: -47px;
    top: -244px;
  }

  &:nth-child(2) {
    width: 420px;
    height: 220px;
    top: -113px;
    left: 230px;

    @media (max-width: 900px) {
      width: 312px;
      height: 163px;
      top: -84px;
      left: 172px;
    }

    @media (max-width: 500px) {
      width: 285px;
      height: 149px;
      top: -77px;
      left: 157px;
    }
  }

  &:nth-child(3) {
    left: -70px;
    top: 136px;

    @media (max-width: 900px) {
      top: 102px;
      left: -52px;
    }

    @media (max-width: 500px) {
      left: -47px;
      top: 93px;
    }
  }

  &:nth-child(4) {
    left: 120px;
    top: 361px;
    width: 420px;
    height: 220px;

    @media (max-width: 900px) {
      width: 312px;
      height: 163px;
      top: 269px;
      left: 90px;
    }

    @media (max-width: 500px) {
      width: 285px;
      height: 149px;
      left: 82px;
      top: 246px;
    }
  }

  &:nth-child(5) {
    width: 270px;
    height: 194px;
    top: 136px;
    left: 230px;

    @media (max-width: 900px) {
      width: 200px;
      height: 144px;
      top: 102px;
      left: 172px;
    }

    @media (max-width: 500px) {
      width: 183px;
      height: 132px;
      left: 157px;
      top: 93px;
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  width: 175px;
  height: 210px;
  display: grid;
  padding: 15px 20px;
  top: 170px;
  left: 52px;
  border-radius: 12px;
  grid-row-gap: 15px;

  @media (max-width: 900px) {
    width: 130px;
    height: 156px;
    grid-row-gap: 10px;
    padding: 11px 15px;
    top: 137px;
    left: 40.5px;
  }

  @media (max-width: 500px) {
    width: 119px;
    height: 143px;
    left: 37px;
    top: 115px;
  }

  span {
    background-color: #e1e5ef;
    border-radius: 12px;
    width: 100%;
    height: 100%;

    @media (max-width: 900px) {
      border-radius: 9px;
    }
  }

  &:first-child {
    grid-column-gap: 10px;
    left: 52px;
    top: 90px;
    width: 365px;
    height: 65px;
    padding: 13px 17px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 900px) {
      grid-column-gap: 7px;
      left: 40.5px;
      top: 66.5px;
      padding: 10px 13px;
      width: 272px;
      height: 48.5px;
    }

    @media (max-width: 500px) {
      top: 61px;
      width: 248.5px;
      height: 44px;
      left: 37px;
      padding: 8px 12px;
    }
  }

  &:last-child {
    grid-row-gap: 10px;
    padding: 20px;
    left: 244px;

    @media (max-width: 900px) {
      left: 182px;
      padding: 15px;
      grid-row-gap: 7.5px;
    }

    @media (max-width: 500px) {
      left: 166px;
      padding: 13.5px;
      grid-row-gap: 7px;
    }
  }
`;

export const Picture = styled.div`
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  position: absolute;
  width: 240px;
  height: 520px;
  top: 50px;
  left: 30px;

  @media (max-width: 900px) {
    width: 170px;
    height: 370px;
    left: 25px;
  }

  @media (max-width: 500px) {
    width: 140px;
    height: 300px;
  }

  &:last-child {
    top: 100px;
    left: 300px;

    @media (max-width: 900px) {
      left: 220px;
    }

    @media (max-width: 500px) {
      left: 190px;
    }
  }
`;

export const Pic = styled.div`
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  width: 170px;
  height: 170px;
  position: relative;

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 500px) {
    width: 106px;
    height: 106px;
  }

  span {
    position: absolute;
    z-index: 1;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: -10px;
    right: -10px;
    filter: drop-shadow(0 0 40px rgba(12, 13, 38, 0.15));

    @media (max-width: 900px) {
      width: 45px;
      height: 45px;
    }

    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
      bottom: -6px;
      right: -6px;
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.colors.black};
    z-index: 2;
    border-radius: 2px;
  }

  &::before {
    width: 2px;
    height: 18px;
    bottom: 13.25px;
    right: 21px;

    @media (max-width: 900px) {
      height: 12px;
      right: 12px;
      bottom: 7px;
    }

    @media (max-width: 500px) {
      height: 11px;
      bottom: 9px;
      right: 12.5px;
    }
  }

  &::after {
    width: 18px;
    height: 2px;
    bottom: 21.5px;
    right: 13.25px;

    @media (max-width: 900px) {
      width: 12px;
      right: 14px;
      bottom: 8px;
    }

    @media (max-width: 500px) {
      right: 8px;
      bottom: 14px;
      width: 11px;
    }
  }

  &:last-child {
    grid-column: 1 / 3;
    width: 100%;
  }
`;
