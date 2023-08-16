import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H40};
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  background-color: #f2f4f7;
  display: grid;
  grid-template-columns: max-content 1fr;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  position: sticky;
  top: 100px;
  right: 0;
  left: 0;

  .swiper {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: block;
    position: unset;
    top: 0;
    position: relative;
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag16};
  `}
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    grid-area: b;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  margin-bottom: 30px;
  ${({ theme }) => theme.fonts.it500H23}

  @media (max-width: 1000px) {
    grid-area: c;
  }

  @media (max-width: 500px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Offer = styled.div`
  padding: 23px 40px 23px 20px;
  background-color: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr max-content;
    display: grid;
    grid-template-areas:
      "a b"
      "a c";
    align-items: center;
    padding: 20px 15px 25px;
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "b c"
      "a a";
    align-items: center;
    grid-gap: 15px 78px;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    padding: 20px 15px 12.5px;
  }

  ${Price} {
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    margin-bottom: 24px;
    padding-right: 10px;
    svg {
      position: absolute;
      width: 20px;
      height: 15px;
      right: 0;
      top: -5px;
    }
    @media (max-width: 600px) {
      margin-bottom: unset;
    }
  }

  ${Headline} {
    @media (max-width: 600px) {
      margin-bottom: unset;
    }
  }
`;

export const Buttons = styled.div`
  max-width: 150px;
  padding: 5px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1000px) {
    grid-area: a;
    max-width: 355px;
  }
`;

export const Btn = styled.button`
  padding: 15px 10px;
  text-align: center;
  width: 70px;
  ${({ theme }) => theme.fonts.inter500Ag14};
  border-radius: 12px;
  background-color: transparent;
  border: transparent;
  transition: color 0.3s ease, background-color 0.3s ease, font-weight 0.3s ease;

  ${({ theme }) => css`
    @media (any-hover: hover) {
      &:hover {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        font-weight: 600;
      }
    }

    &.active {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      font-weight: 600;
    }
  `}

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Wrapper = styled.ul``;

export const Item = styled.li`
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 1000px) {
    padding: 25px 15px;
  }

  @media (max-width: 750px) {
    padding: 12.5px 15px 50px;
  }

  button {
    width: 100%;
    padding: 14px;
  }

  ${({ theme }) => css`
    &.accent {
      background-color: ${theme.colors.primary};
      border-radius: 12px;
      ${Headline} {
        color: ${theme.colors.white};
        opacity: 0.9;
      }

      ${Price} {
        color: ${theme.colors.white};
      }

      button {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
      }

      @media (max-width: 750px) {
        border-radius: 0;
      }
    }
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.it400H24};
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Inner = styled.ul`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Text = styled.div``;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    justify-content: flex-end;
    padding-right: 15px;
  }

  svg {
    width: 24px;
    height: 24px;
    &:nth-child(2) {
      display: none;
    }
  }

  span {
    background-color: ${({ theme }) => theme.colors.gray300};
    height: 2px;
    width: 14px;
    border-radius: 12px;
  }

  &:nth-child(3),
  &:nth-child(4) {
    @media (max-width: 750px) {
      display: none;
    }
  }

  &:nth-child(2) {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const Row = styled.div`
  border-radius: 12px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: 210px 1fr 1fr 1fr 1fr;
  min-height: 70px;
  align-items: center;

  &:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Name = styled.div`
  padding-left: 20px;
  ${({ theme }) => theme.fonts.inter400Ag16};
  max-width: 210px;

  @media (max-width: 1000px) {
    grid-column: 1/ 5;
    margin-bottom: 10px;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    grid-column: unset;
    font-size: 16px;
    margin-bottom: 0;
    padding-left: 15px;
  }
`;
