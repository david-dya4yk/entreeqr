import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const Wrapper = styled.div`
  padding: 180px 0;
  display: grid;
  grid-template-columns: 470px 520px;
  align-items: center;
  grid-gap: 0 130px;
  min-height: 100vh;

  @media (max-width: 1350px) {
    grid-gap: 0 30px;
  }

  @media (max-width: 1100px) {
    padding-top: 140px;
    grid-template-columns: 1fr;
    grid-gap: 70px 0;
    grid-auto-rows: max-content;
    min-height: 1250px;
  }

  @media (max-width: 700px) {
    padding-top: 125px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.it500H64};
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag18};
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
  /* .order__link {
    @media (max-width: 500) {
      font-size: 14px;
      padding: 17.5px 15px;
    }
  } */
`;

export const Images = styled.div`
  position: relative;
  height: 580px;

  @media (max-width: 1100px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    height: 370px;
    max-width: 320px;
  }
`;

export const Img = styled.div`
  position: absolute;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  top: 0;
  left: 0;
  max-width: 300px;
  height: 300px;
  z-index: 1;

  @media (max-width: 700px) {
    max-width: 200px;
    height: 200px;
  }
`;

export const Image = styled.div`
  position: absolute;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  bottom: 90px;
  right: 0;
  max-width: 270px;
  height: 270px;
  z-index: 3;

  @media (max-width: 700px) {
    width: 170px;
    height: 170px;
    bottom: 50px;
  }
`;

export const Qr = styled.div`
  position: absolute;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  max-width: 170px;
  height: 170px;
  left: 100px;
  bottom: 0;
  z-index: 2;

  @media (max-width: 700px) {
    max-width: 120px;
    height: 120px;
    left: 50px;
  }
`;

export const Hearts = styled.div`
  position: absolute;
  top: 48px;
  right: 73px;
  color: ${({ theme }) => theme.colors.primary};
  width: 90px;
  height: 110px;

  @media (max-width: 700px) {
    max-width: 70px;
    height: 85px;
    top: 15px;
    right: 15px;
  }
`;

export const Decor = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 43px;
  bottom: 85px;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    left: 15px;
    bottom: 65px;
  }
`;
