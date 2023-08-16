import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-bottom: 150px;
`;

export const Inner = styled.div`
  max-width: 570px;
  text-align: center;
  margin: 0 auto;
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 15px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.it400H24};
  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Name = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.inter400Ag16};
    color: ${theme.colors.gray500};
    span {
      display: block;
      margin-bottom: 5px;
      color: ${theme.colors.black};
      ${theme.fonts.inter500Ag16};
    }
  `}
`;
