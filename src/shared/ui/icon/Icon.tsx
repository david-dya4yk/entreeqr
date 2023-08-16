import React from "react";
import { css } from "@emotion/react";
import * as icons from "../icons";
import { Icons } from "../icons";

interface IIcon {
  name: Icons;
  width?: number;
  height?: number;
  size?: number;
  rotate?: number;
  className?: string;
}

const Icon: React.FC<IIcon> = ({
  name,
  width,
  height,
  size = 20,
  rotate,
  className,
}) => {
  const IconName = icons[name];

  return (
    <IconName
      css={css`
        min-width: ${width || size}px;
        width: ${width || size}px;
        min-height: ${height || size}px;
        height: ${height || size}px;
        transition: color 0.3s ease;

        ${rotate ? `transform: rotate(${rotate}deg)` : ""}
      `}
      className={className}
    />
  );
};

export default Icon;
