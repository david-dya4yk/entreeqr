import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 150px;

  @media (max-width: 750px) {
    .swiper {
      margin: 0 -29px;
      padding: 0 29px;
    }
  }

  @media (max-width: 500px) {
    .swiper {
      margin: 0 -20px;
      padding: 0 20px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 100px;
  }
`;

export const Wrapper = styled.div`
  background: url(images/content/capability/about-capability-bg.jpg) no-repeat
    center / cover;
  height: 700px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  padding: 50px;
  margin-bottom: 150px;

  @media (max-width: 900px) {
    padding: 25px;
  }

  @media (max-width: 600px) {
    height: 600px;
    margin-bottom: 100px;
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 30px;

  @media (max-width: 600px) {
    padding: 25px;
  }
`;

export const Swiper = styled.div`
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    padding: 0 29px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Headline = styled.div`
  ${({ theme }) => theme.fonts.it500H32};
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    ${theme.fonts.inter400Ag20};
  `}
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0 auto 100px;

  @media (max-width: 900px) {
    margin: 0 auto 70px;
  }

  @media (max-width: 600px) {
    margin: 0 auto 30px;
  }
`;

export const Name = styled.h3`
  ${({ theme }) => theme.fonts.it500H28};

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  height: 300px;
  grid-row-gap: 20px;
  grid-template-rows: repeat(2, max-content) 1fr max-content;

  @media (max-width: 800px) {
    height: 235px;
  }

  @media (max-width: 750px) {
    height: 300px;
  }
`;

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
`;

export const Pagination = styled.div``;
