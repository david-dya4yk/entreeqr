import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 20px;
  margin-bottom: 20px;
`;

export const Inner = styled.div<{
  $src: string | null;
  $hover: boolean;
  $error?: string;
}>`
  width: 100%;
  max-height: 100%;
  border: 1px dashed #98a2b3;
  border-radius: 12px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  ${({ $hover, $error, $src }) => css`
    ${$hover &&
    css`
      border-color: #2d31a6;
      cursor: move; /* fallback if grab cursor is unsupported */
      cursor: grabbing;
    `}

    ${!$error &&
    css`
      &:hover {
        border-color: #2d31a6;
      }
    `}

    ${$error &&
    !$hover &&
    css`
      background-color: #fffbfa;
      border: 1px dashed #d92d20;
    `}

    ${$src &&
    !$error &&
    css`
      background-image: url(${$src});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
  `}
`;

export const Upload = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  color: #2d31a6;
  margin-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

export const Hint = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  color: #475467;
`;

export const Icon = styled.div<{
  $drag?: boolean;
  $error?: boolean;
  $default?: boolean;
}>`
  ${({ $error, $default, $drag }) => {
    if ($drag) {
      return css`
        background: #e0eaff;
        border: 6px solid #eef4ff;

        span {
          background-color: #e0eaff;
          color: #2d31a6;
        }
      `;
    }

    if ($error) {
      return css`
        background: #fee4e2;
        border: 6px solid #fef3f2;

        span {
          background-color: #fee4e2;
          color: #d92d20;
        }
      `;
    }

    if ($default) {
      return css`
        background: #e0eaff;

        span {
          background-color: #e0eaff;
          color: #2d31a6;
        }
      `;
    }

    return css``;
  }}

  border-radius: 28px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;

  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  color: #2d3282;
`;

export const Error = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  color: #d92d20;
`;

export const Preview = styled.div`
  background: #f2f4f7;
  border-radius: 50%;
  color: #475467;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
