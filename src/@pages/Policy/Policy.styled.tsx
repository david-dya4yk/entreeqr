import styled from "@emotion/styled";

export const Section = styled.section``;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 100px 0;
  height: 100vh;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    min-height: 600px;
  }

  @media (max-width: 600px) {
    min-height: 400px;
    padding: 71% 0 100px;
    justify-content: unset;
  }
`;

export const Title = styled.h1`
  max-width: 970px;
  margin: 0 auto 30px;
  ${({ theme }) => theme.fonts.it500H96};

  @media (max-width: 1000px) {
    font-size: 64px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20};

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 18.5%;

  @media (max-width: 600px) {
    bottom: 25%;
  }
`;

export const Inner = styled.div`
  padding: 150px 0 170px;

  @media (max-width: 800px) {
    padding: 150px 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
    .policy__btn {
      padding: 17.5px 15px;
      font-size: 14px;
    }
  }
`;

export const Headline = styled.h2`
  margin-bottom: 50px;
  ${({ theme }) => theme.fonts.it500H48};

  @media (max-width: 800px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag16};

  @media (max-width: 600px) {
    font-size: 14px;
  }
  margin-bottom: 70px;

  span {
    display: block;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

export const Name = styled.h3`
  ${({ theme }) => theme.fonts.it500H32};
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Body = styled.div`
  margin-bottom: 30px;
  ${({ theme }) => theme.fonts.inter400Ag16}

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  margin-bottom: 30px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Item = styled.li`
  ${({ theme }) => theme.fonts.inter400Ag16}

  @media (max-width: 600px) {
    font-size: 14px;
  }
  list-style: inside;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  margin-bottom: 100px;
  ${({ theme }) => theme.fonts.inter400Ag16};

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    margin-bottom: 70px;
  }
`;

export const Box = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag16}

  @media (max-width: 600px) {
    font-size: 14px;
  }
  margin-bottom: 70px;
  p:not(:last-child) {
    margin-bottom: 15px;
  }
  span {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;
