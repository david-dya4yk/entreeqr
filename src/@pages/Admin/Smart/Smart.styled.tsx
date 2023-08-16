import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 75px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
    overflow: hidden;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 130px;
  margin-bottom: 100px;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    margin-bottom: 50px;
  }

  @media (max-width: 500px) {
    margin-bottom: 30px;
    grid-row-gap: 20px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.it500H48};
  max-width: 470px;

  @media (max-width: 800px) {
    font-size: 40px;
    max-width: 270px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 15px;

  @media (max-width: 500px) {
    grid-column-gap: 10px;

    button {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 130px;

  @media (max-width: 800px) {
    grid-column-gap: 100px;
  }

  @media (max-width: 768px) {
    grid-column-gap: 50px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const Images = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  height: 570px;
  position: relative;
  z-index: -1;

  @media (max-width: 800px) {
    min-width: 350px;
  }

  @media (max-width: 700px) {
    height: 500px;
  }

  @media (max-width: 500px) {
    min-width: 320px;
  }
`;

export const Image = styled.div`
  width: 790px;
  height: 570px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    width: 650px;
    height: 470px;
  }

  @media (max-width: 700px) {
    width: 550px;
    height: 400px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Inner = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;

  @media (max-width: 500px) {
    grid-row-gap: 20px;
  }
`;

export const Item = styled.li``;

export const Headline = styled.h3`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 15px;
  align-items: center;
  ${({ theme }) => theme.fonts.it500H24}

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Icon = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray500};
  padding-left: 65px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
