import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.gray100};

  @media (min-width: 1000px) {
    margin-bottom: -85px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 470px 370px;
  align-items: center;
  grid-gap: 0 130px;
  min-height: 100vh;

  @media (max-width: 1100px) {
    grid-gap: 0 50px;
  }

  @media (max-width: 1000px) {
    padding-top: 140px;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 150px 0;
  }

  @media (max-width: 500px) {
    padding-top: 125px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64}
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
    font-size: 40px;
    max-width: 320px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag18}
  margin-bottom: 30px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 20px;

  @media (max-width: 500px) {
    button {
      font-size: 14px;
      padding: 17.5px 15px;
    }
  }
`;

export const Images = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.div`
  max-width: 370px;
  position: relative;
  height: 370px;

  @media (max-width: 500px) {
    max-width: 260px;
    max-height: 260px;
  }
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Img = styled.div`
  max-width: 150px;
  height: 150px;
  position: absolute;
  bottom: -70px;
  right: 50px;
  box-shadow: 0 5px 20px rgba(29, 41, 57, 0.1);

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    max-width: 100px;
    height: 100px;
    right: 35px;
    bottom: -30px;
  }

  &:nth-of-type(2) {
    max-width: 170px;
    height: 170px;
    top: -80px;
    right: -70px;

    @media (max-width: 600px) {
      max-width: 120px;
      height: 120px;
      top: -40px;
      right: -20px;
    }
  }

  &:nth-of-type(3) {
    max-width: 120px;
    height: 120px;
    bottom: 80px;
    left: -60px;

    @media (max-width: 600px) {
      max-width: 80px;
      height: 80px;
      left: -30px;
      bottom: 45px;
    }
  }
`;
