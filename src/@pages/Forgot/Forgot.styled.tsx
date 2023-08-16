import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  padding: 30px;

  @media (max-width: 800px) {
    border: none;
    padding: 0;
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const Icon = styled.div`
  margin: 0 auto 14px;
  width: 60px;
  height: 60px;
  background-color: #e0eaff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid #eef4ff;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.inter600Ag28};
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 432px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Label = styled.div`
  margin-bottom: 30px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-row-gap: 10px;

  button {
    width: 100%;
  }
`;
