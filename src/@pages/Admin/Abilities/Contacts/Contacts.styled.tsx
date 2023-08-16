import styled from "@emotion/styled";
import { Icon } from "@/shared/ui/icon";

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
    background: white;
    padding: 60px 20px 20px;
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
    border-radius: 8px;
  }
`;

export const Inner = styled.div`
  width: 250px;
  height: 200px;
  transform: translateY(30px);

  @media (max-width: 900px) {
    transform: unset;
    width: 150px;
    height: 120px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Telegram = styled(Icon)`
  top: 150px;
  right: 30px;

  @media (max-width: 900px) {
    right: 15px;
    top: 50px;
    min-width: 17px !important;
    min-height: 17px !important;
    width: 17px !important;
    height: 17px !important;
  }
`;

export const Facebook = styled(Icon)`
  right: 110px;
  top: 90px;

  @media (max-width: 900px) {
    right: 60px;
    top: 15px;
    min-width: 30px !important;
    min-height: 30px !important;
    width: 30px !important;
    height: 30px !important;
  }
`;

export const Instagram = styled(Icon)`
  right: 90px;
  top: calc(50% - 10px);

  @media (max-width: 900px) {
    right: 50px;
    min-width: 26px !important;
    min-height: 26px !important;
    width: 26px !important;
    height: 26px !important;
  }
`;

export const Tiktok = styled(Icon)`
  left: 50px;
  bottom: 90px;

  @media (max-width: 900px) {
    bottom: 15px;
    left: 30px;
    min-width: 14px !important;
    min-height: 15px !important;
    width: 14px !important;
    height: 15px !important;
  }
`;

export const Linkedin = styled(Icon)`
  left: 30px;
  top: 50%;
  transform: translateY(50%);

  @media (max-width: 900px) {
    bottom: 60px;
    left: 15px;
    transform: translateY(0);
    min-width: 30px !important;
    min-height: 30px !important;
    width: 30px !important;
    height: 30px !important;
  }
`;
