import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  padding-top: 224px;
  overflow: hidden;

  @media (max-width: 800px) {
    padding-top: 140px;
  }

  @media (max-width: 600px) {
    padding-top: 125px;
  }
`;

export const Inner = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  display: grid;
  grid-template-columns: 1fr 270px;
  align-items: center;
  column-gap: 100px;
  padding-bottom: 105px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 145px;
    padding-bottom: 100px;
  }

  @media (max-width: 600px) {
    padding-bottom: 50px;
    grid-row-gap: 30px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.itt500H64};

    span {
      ${theme.fonts.makesans500}
    }
  `}
  margin-bottom: 30px;
  max-width: 500px;

  span {
    @media (max-width: 1000px) {
      font-size: 44px;
    }

    @media (max-width: 600px) {
      font-size: 36px;
    }
  }

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 800px) {
    max-width: 530px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Content = styled.div`
  max-width: 490px;
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag18};
    color: ${theme.colors.gray600};
  `}
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    max-width: 620px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 20px;
  button {
    @media (max-width: 600px) {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    column-gap: 10px;
  }
`;

export const Images = styled(motion.div)`
  margin: 0 auto;
  position: relative;
  height: 550px;
  width: 270px;

  @media (max-width: 600px) {
    width: 160px;
    height: 380px;
  }
`;

export const Box = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

export const Phone = styled.div`
  position: relative;
  max-width: 270px;
  min-height: 550px;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-height: 330px;
    padding-top: 55px;
  }
`;

const imageCss = css`
  filter: drop-shadow(0 5px 20px rgba(29, 41, 57, 0.1));
  position: absolute;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RightBottomText = styled(motion.div)`
  ${imageCss};
  right: -97px;
  bottom: 45px;
`;

export const LeftTopImg = styled(motion.div)`
  ${imageCss};
  top: 70px;
  left: -110px;
  width: 160px;
  height: 120px;

  @media (max-width: 600px) {
    width: 95px;
    height: 70px;
    top: 97px;
    left: -67px;
  }
`;

export const LeftMiddleImg = styled(motion.div)`
  ${imageCss};
  top: 105px;
  left: -110px;
  width: 160px;
  height: 200px;

  @media (max-width: 600px) {
    left: -80px;
    width: 100px;
    height: 120px;
  }
`;

export const LeftBottomImg = styled(motion.div)`
  ${imageCss};
  left: -110px;
  bottom: 105px;
  width: 160px;
  height: 120px;

  @media (max-width: 600px) {
    width: 95px;
    height: 70px;
    left: -80px;
  }
`;

export const RightTopImg = styled(motion.div)`
  ${imageCss};
  top: 90px;
  right: -120px;
  width: 180px;
  height: 140px;

  @media (max-width: 600px) {
    width: 95px;
    height: 70px;
    right: -60px;
  }
`;

export const RightMiddleImg = styled(motion.div)`
  ${imageCss};
  bottom: 156px;
  right: -120px;
  width: 180px;
  height: 140px;

  @media (max-width: 600px) {
    width: 110px;
    height: 85px;
    bottom: 88px;
    right: -72px;
  }
`;

export const RightBottomImg = styled(motion.div)`
  ${imageCss};
  bottom: 145px;
  right: -80px;
  width: 140px;
  height: 160px;

  @media (max-width: 600px) {
    right: -80px;
    width: 90px;
    height: 100px;
    bottom: 45px;
  }
`;

export const SunLights = styled(motion.div)`
  position: absolute;
  top: -110px;
  left: -80px;

  @media (max-width: 600px) {
    top: 0;
    left: -50px;

    svg {
      min-width: 95px;
      min-height: 95px;
      width: 95px;
      height: 95px;
    }
  }
`;

export const Sun = styled(motion.div)`
  position: absolute;
  right: -50px;
  top: -40px;

  @media (max-width: 600px) {
    right: -30px;
    top: 20px;

    svg {
      min-width: 95px;
      min-height: 95px;
      width: 95px;
      height: 95px;
    }
  }
`;

export const Line = styled(motion.div)`
  position: absolute;
  bottom: 50px;
  left: -80px;

  @media (max-width: 600px) {
    bottom: 40px;
    left: -50px;

    svg {
      min-width: 70px;
      min-height: 70px;
      width: 70px;
      height: 70px;
    }
  }
`;

export const Heart = styled(motion.div)`
  position: absolute;
  top: 30px;
  left: -55px;

  @media (max-width: 600px) {
    svg {
      min-width: 95px;
      min-height: 95px;
      width: 95px;
      height: 95px;
    }
  }
`;

export const Star = styled(motion.div)`
  position: absolute;
  bottom: 76px;
  right: -90px;

  @media (max-width: 600px) {
    right: -30px;

    svg {
      min-width: 70px;
      min-height: 70px;
      width: 70px;
      height: 70px;
    }
  }
`;

export const Hat = styled(motion.div)`
  ${imageCss};
  bottom: 105px;
  left: -90px;
  z-index: -1;

  @media (max-width: 600px) {
    bottom: 55px;
    left: -58px;

    svg {
      min-width: 70px;
      min-height: 70px;
      width: 70px;
      height: 70px;
    }
  }
`;

export const StyledBlock = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #3f51b5;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
