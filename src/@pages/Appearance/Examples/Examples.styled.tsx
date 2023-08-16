import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";

export const Section = styled.section`
  padding: 200px 0 75px;

  @media (max-width: 900px) {
    padding: 140px 0 75px;
  }

  @media (max-width: 600px) {
    padding: 125px 0 50px;
  }

  .swiper {
    overflow: hidden;
    padding: 100px 20px 20px;
    margin: 0 -20px -20px;

    @media (max-width: 1000px) {
      padding: 70px 20px 20px;
    }

    @media (max-width: 600px) {
      padding: 50px 20px 20px;
    }
  }

  .swiper-wrapper {
    height: 530px;

    @media (max-width: 900px) {
      height: 360px;
    }

    @media (max-width: 700px) {
      height: 300px;
    }

    @media (max-width: 600px) {
      height: 250px;
    }

    @media (max-width: 500px) {
      height: 200px;
    }
  }

  .my-slide {
    font-size: 0;
    filter: drop-shadow(0 0 10px rgba(12, 13, 38, 0.15));
    width: calc(70.9% - 12.5px);

    @media (max-width: 700px) {
      width: calc(70.9% - 10px);
    }

    @media (max-width: 432px) {
      width: 300px;
    }

    &:nth-of-type(2n) {
      width: calc(29.1% - 12.5px);

      @media (max-width: 700px) {
        width: calc(29.1% - 10px);
      }

      @media (max-width: 432px) {
        width: 100px;
      }
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64};
  max-width: 770px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-column-gap: 20px;
  align-items: center;

  @media (max-width: 500px) {
    button {
      padding: 17.5px 15px;
      font-size: 14px;
      grid-column-gap: 10px;
    }
  }
  @media (max-width: 432px) {
    position: relative;
  }
`;

export const Item = styled.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  font-size: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    object-position: top center;
    user-select: none;
  }
`;
