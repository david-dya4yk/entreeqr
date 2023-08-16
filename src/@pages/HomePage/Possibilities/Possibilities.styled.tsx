import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 200px;

  @media (max-width: 900px) {
    padding-top: 150px;
  }
`;

export const Headline = styled.h2`
  margin: 0 auto 50px;
  max-width: 680px;

  span {
    position: relative;

    svg {
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-47%, -59%);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag20};
    color: ${theme.colors.gray600};
  `}
  max-width: 570px;
  text-align: center;
  margin: 0 auto 200px;

  @media (max-width: 768px) {
    margin: 0 auto 150px;
  }

  @media (max-width: 700px) {
    margin: 0 auto 100px;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  transform: translateY(110px);
  transition: transform 0.3s ease;
  max-width: 270px;
  margin: 0 auto;
  z-index: 1;

  img {
    width: 100%;
    height: 550px;
    object-fit: contain;

    @media (max-width: 900px) {
      height: 465px;
    }

    @media (max-width: 700px) {
      height: 352px;
    }
  }

  @media (max-width: 900px) {
    transform: translateY(0);
  }
`;

export const Hover = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag12};
    color: ${theme.colors.gray500};
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray100};
  `}
  max-width: 570px;
  padding: 50px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 500px;
  position: relative;
  border-radius: 12px;
  grid-row-gap: 30px;

  @media (any-hover: hover) {
    &:hover {
      overflow: visible;
      ${Image} {
        transform: translateY(-130px);
      }
    }
  }

  &:nth-of-type(1) {
    grid-column: 1/3;
  }

  &:nth-of-type(2) {
    grid-column: 3/6;
  }

  &:nth-of-type(3) {
    grid-column: 1/4;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    z-index: 2;

    &::after {
      content: "";
      background-color: white;
      position: absolute;
      width: 100%;
      height: 30px;
      top: -30px;
      left: 0;
      right: 0;
      z-index: 2;

      @media (max-width: 768px) {
        height: 10px;
        top: -10px;
      }
    }
  }

  &:nth-of-type(4) {
    grid-column: 4/6;
    z-index: 2;
    ${Hover} {
      right: 15px;
      left: unset;
    }
  }

  @media (max-width: 900px) {
    height: 450px;
    padding: 25px;

    &:nth-of-type(1),
    &:nth-of-type(4) {
      padding: 50px 10px;
    }

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4) {
      grid-row-gap: 20px;
    }
  }

  @media (max-width: 768px) {
    &:nth-of-type(1) {
      grid-column: 1/4;
    }

    &:nth-of-type(2) {
      grid-column: 4/9;
    }

    &:nth-of-type(3) {
      grid-column: 1/6;
      grid-row: 4/5;
      z-index: 5;
    }

    &:nth-of-type(4) {
      grid-column: 6/9;
    }
  }

  @media (max-width: 700px) {
    height: max-content;
    min-height: 320px;

    &:nth-of-type(1),
    &:nth-of-type(4) {
      height: 320px;
    }
  }

  @media (max-width: 600px) {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4) {
      grid-column: unset;
      padding: 25px;
    }

    &:nth-of-type(4) ${Hover}, ${Hover} {
      right: unset;
      left: 15px;
    }

    .possibilities__link {
      padding: 17.5px 0;
      min-width: 100%;
    }
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.itt500H32};

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag20};
    span {
      color: ${theme.colors.gray500};
    }
  `}

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  background: center / cover no-repeat
    url("/images/content/possibilities-bg.jpg");
  max-width: 100%;
  height: 600px;
  padding: 138px 0;
  border-radius: 12px;
  position: relative;
  z-index: 2;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    left: 0%;
    right: 0;
    top: -30px;
    height: 30px;
    background-color: #fff;

    @media (max-width: 768px) {
      height: 10px;
      top: -10px;
    }
  }

  @media (max-width: 700px) {
    height: 320px;
    padding: 53px 0;
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px 30px;
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  border-radius: 8px;
  text-align: center;
  width: 630px;
  margin: 0 auto;
  height: 325px;

  @media (max-width: 900px) {
    width: 525px;
    height: 295px;
  }

  @media (max-width: 700px) {
    width: 90%;
    max-width: 280px;
    height: max-content;
    padding: 20px 10px;
  }
`;
