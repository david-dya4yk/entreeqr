import { Link } from "@/components/Link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding-top: 150px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 50px 10px 0;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
  height: 750px;

  @media (max-width: 768px) {
    height: 650px;
  }
`;

export const Container = styled(motion.div)`
  transition: max-width 0.3s ease;
  max-width: 1440px;
`;

export const Box = styled.div`
  margin: 0 auto;
  max-width: 570px;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 30px;
  text-align: center;
  justify-items: center;

  .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 50px;
  }

  @media (max-width: 768px) {
    max-width: 530px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 20px;
    margin: 0 auto 175.5px;
  }
`;

export const Title = styled.h2`
  max-width: 440px;
  ${({ theme }) => theme.fonts.itt500H32};

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div``;

export const StyledLink = styled(Link)`
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 50px;

  @media (max-width: 800px) {
    grid-column-gap: 25px;
  }
`;

export const Item = styled.li`
  transform: translateY(120px);

  @media (max-width: 500px) {
    transform: translateY(20px);
  }

  &:nth-of-type(2n) {
    transform: translateY(220px);

    @media (max-width: 500px) {
      transform: translateY(-40px);
    }
  }
`;

export const Img = styled.img`
  height: 540px;
  width: 240px;
  border-radius: 12px;

  @media (max-width: 500px) {
    width: 160px;
    height: 350px;
  }
`;
