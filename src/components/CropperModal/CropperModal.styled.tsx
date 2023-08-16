import styled from "@emotion/styled";
import { Modal } from "../Modal";

export const CropperContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  height: 520px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: #000000;
  margin-bottom: 25px;
`;

export const ZoomContainer = styled.div`
  width: 100%;
  max-width: 36.9rem;
  margin: 0 auto;
  display: flex;
  margin-bottom: 2.5rem;
`;

export const ZoomRange = styled.input`
  width: 100%;
  & {
    -webkit-appearance: none;
    background: #2d3282;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-ms-track {
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #2d3282;
    cursor: pointer;
    margin-top: -0.5rem;
  }
  &::-moz-range-thumb {
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    background: #2d3282;
    cursor: pointer;
  }
  &::-ms-thumb {
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    background: #2d3282;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 0.4rem;
    cursor: pointer;

    background: #2d3282;
    border-radius: 0.6rem;
  }
  &::-moz-range-track {
    height: 0.4rem;
    cursor: pointer;
    background: #2d3282;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  &::-ms-track {
    height: 0.4rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 1.6rem 0;
    color: transparent;
  }
`;
ZoomRange.defaultProps = {
  type: "range",
};

export const ActionWrapper = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

export const StyledModal = styled(Modal)`
  width: 520px;
  height: 770px;
  border-radius: 12px;
`;
