import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter600Ag28};
  margin-bottom: 10px;
  text-align: center;
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

  &.check {
    color: #039855;
    border-color: #ecfdf3;
    background-color: #d1fadf;
  }
`;

export const Inner = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  max-width: 390px;
  padding: 30px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-row-gap: 10px;

  button {
    width: 100%;
  }
`;
