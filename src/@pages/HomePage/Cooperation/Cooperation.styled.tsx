import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 200px 0;

  @media (max-width: 800px) {
    padding: 150px 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    grid-column-gap: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 10%;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  &:nth-of-type(1) {
    padding-right: 0;
  }

  @media (max-width: 800px) {
    padding: 6.5%;
  }

  @media (max-width: 600px) {
    &:nth-of-type(2) {
      height: 320px;
    }
  }
`;

export const Systems = styled.ul`
  overflow-x: scroll;
  display: grid;
  grid-auto-columns: 170px;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  margin-bottom: 55px;

  @media (max-width: 800px) {
    grid-auto-columns: 130px;
    margin-bottom: 37px;
  }

  @media (max-width: 500px) {
    grid-auto-columns: 110px;
    margin-bottom: 47px;
  }
`;

export const Pos = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  border-radius: 8px;

  @media (max-width: 800px) {
    height: 130px;
  }

  @media (max-width: 500px) {
    height: 110px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.itt500H32};
  max-width: 270px;
  margin: auto 0 20px;

  @media (max-width: 800px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    margin: auto 0 15px;
    max-width: 200px;
  }
`;

export const StyledLink = styled(Link)`
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const Comments = styled.ul`
  margin-bottom: 50px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: center/contain no-repeat url("/images/decor/cloud.svg");
    width: 200px;
    height: 200px;
    top: -15px;
    right: -30px;

    @media (max-width: 800px) {
      right: -55px;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 37px;
  }
`;

export const Comment = styled(motion.li)<{ index: number }>`
  ${({ theme, index }) => css`
    background-color: ${theme.colors.white};
    ${theme.fonts.inter400Ag16};
    position: absolute;

    span {
      color: ${theme.colors.gray500};
    }

    /* &:not(:last-of-type):not(:first-of-type) {
      margin: -30px 0 0 ${20 * index}px;
    } */

    &:not(:first-of-type):not(:last-of-type) {
      /* margin: -30px 0 0 ${20 * index}px; */
      top: ${10 * index}px;
      left: ${10 * index}px;
    }

    &:last-of-type {
      top: 120px;
      left: 45px;

      @media (max-width: 800px) {
        top: 80px;
      }
    }
  `}
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);
  border-radius: 12px;
  padding: 15px;
  display: inline-block;
  /* position: relative; */
  z-index: 1;

  span {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }

  /* &:not(:last-child) {
    margin-bottom: 25px;

    @media (max-width: 800px) {
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      margin-bottom: 10px;
    }
  }

  &:last-child {
    margin-left: 12%;

    @media (max-width: 800px) {
      margin-left: 7%;
    }

    @media (max-width: 600px) {
      margin-left: 0;
    }
  } */

  @media (max-width: 800px) {
    font-size: 14px;
    padding: 10px 15px;
    line-height: 1.1;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 60% max-content;
  justify-content: space-between;
  padding: 30px 50px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  @media (max-width: 800px) {
    padding: 25px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag20};
    color: ${theme.colors.white};

    span {
      ${theme.fonts.itt500H32};
    }
  `}

  span {
    display: block;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      font-size: 28px;
      margin-bottom: 15px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Try = styled(Button)`
  max-width: 100%;
  width: 100%;
`;
