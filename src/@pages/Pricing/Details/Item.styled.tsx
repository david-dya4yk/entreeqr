import styled from "@emotion/styled";

export const Row = styled.li`
  border-radius: 12px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: 210px 1fr 1fr 1fr 1fr;
  min-height: 70px;
  align-items: center;

  &:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag16};
  padding-left: 20px;
  max-width: 210px;

  @media (max-width: 1000px) {
    grid-column: 1/ 5;
    margin-bottom: 10px;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    grid-column: unset;
    font-size: 16px;
    margin-bottom: 0;
    padding-left: 15px;
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    justify-content: flex-end;
    padding-right: 15px;
  }

  span {
    background-color: ${({ theme }) => theme.colors.gray300};
    height: 2px;
    width: 14px;
    border-radius: 12px;
  }

  &:nth-child(3),
  &:nth-child(4) {
    @media (max-width: 750px) {
      display: none;
    }
  }

  &:nth-child(2) {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
