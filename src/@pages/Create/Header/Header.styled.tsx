import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
`;

export const Inner = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: center;
    button {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  svg {
    width: 118px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary};
    &:last-child {
      display: none;
      width: 50px;
      height: 50px;

      @media (max-width: 500px) {
        display: block;
      }
    }
    @media (max-width: 500px) {
      width: 50px;
      height: 50px;
      display: none;
    }
  }
`;

export const Language = styled.div`
  padding: 10px 11px;

  @media (max-width: 500px) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
