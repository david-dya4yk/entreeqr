import { css, SerializedStyles } from "@emotion/react";

export const media = (width: number, content: SerializedStyles) => css`
  @media (max-width: ${width}px) {
    ${content}
  }
`;
