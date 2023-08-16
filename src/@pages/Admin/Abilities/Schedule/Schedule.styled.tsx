import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  svg {
    position: absolute;
  }

  @media (max-width: 900px) {
    background-color: #fff;
    border-radius: 8px;
    height: 280px;
    max-width: 280px;
    margin: 0 auto;
    width: 100%;

    svg {
      width: 146px;
    }
  }
`;

export const Inner = styled.div`
  width: 345px;
  height: 320px;
  border: 1px solid #d0d5dd;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  filter: drop-shadow(0px 5px 20px rgba(29, 41, 57, 0.1));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    width: 183px;
    height: 170px;
  }
`;
