import { theme } from "@/shared/theme";
import { css, Global } from "@emotion/react";

import { normalize } from "./normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}

      #__next {
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        scroll-behavior: smooth;
      }

      body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: "Inter", sans-serif;
        ${theme.fonts.inter400Ag18};
        color: ${theme.colors.black};
        position: relative;
      }

      main {
        flex-grow: 1;
      }

      a {
        text-decoration: none;
        transition: color 0.2s ease;
        color: inherit;
      }

      button {
        cursor: pointer;
        border: transparent;
        font-size: 0;
        background-color: transparent;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      blockquote {
        margin: 0;
      }

      .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 15px;

        @media (max-width: 768px) {
          padding: 0 29px;
        }

        @media (max-width: 500px) {
          padding: 0 20px;
        }

        &--big {
          max-width: 1200px;
        }

        &--small {
          max-width: 420px;
        }

        &--medium {
          max-width: 1080px;
        }
      }

      .sr-hide {
        position: absolute;
        white-space: nowrap;
        width: 1px;
        height: 1px;
        overflow: hidden;
        border: 0;
        padding: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        margin: -1px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      button,
      p {
        padding: 0;
        margin: 0;
      }

      img {
        display: block;
      }

      input {
        outline: none;
        text-overflow: ellipsis;
      }

      .text {
        ${theme.fonts.inter400Ag16};
        color: ${theme.colors.gray500};
      }

      .title {
        ${theme.fonts.itt500H48};
        max-width: 770px;
        text-align: center;

        @media (max-width: 768px) {
          font-size: 39px;
        }

        @media (max-width: 500px) {
          font-size: 28px;
          line-height: 1.1;
        }

        span {
          color: ${theme.colors.primary};
        }
      }
    `}
  />
);
