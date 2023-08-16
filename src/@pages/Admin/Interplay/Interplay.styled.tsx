import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 260px 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H48};

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20};

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Image = styled.div`
  height: 570px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 700px) {
    height: 370px;
  }
`;
