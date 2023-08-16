import { Button } from "@/components/Button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 200px;

  @media (max-width: 900px) {
    padding-top: 150px;
  }

  @media (max-width: 600px) {
    padding-top: 100px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 370px;
  grid-column-gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 12px;
  }
`;

export const Item = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray100};

    &:nth-of-type(2) {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}

  padding: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 25px;
  }
`;

export const Headline = styled.h3`
  ${({ theme }) => theme.fonts.itt500H32}
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20}
  margin-bottom: 40px;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.gray500};
  }

  @media (max-width: 900px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:nth-of-type(2) {
    margin-bottom: 77px;

    @media (max-width: 900px) {
      margin-bottom: 92px;
    }

    @media (max-width: 600px) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 12px;
  height: 60px;

  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const Link = styled(Button)`
  margin-top: auto;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.1;
    max-width: 100%;
    width: 100%;
    padding: 17.5px 15px;
  }
`;

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.itt500H32}
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.inter400Ag20}
  margin-bottom: 162px;

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 189px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 43px;
  }
`;
