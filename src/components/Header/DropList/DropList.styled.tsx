import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
`;

export const List = styled.ul``;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  color: #000000;
  position: relative;

  a::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 110%;
  color: #000000;
`;

export const Open = styled.button`
  display: none;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: flex;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;
