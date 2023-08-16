import { FC, ReactNode } from "react";

import { Icon } from "../../shared/ui/icon";
import { Icons } from "../../shared/ui/icons";

import * as S from "./Link.styled";

export enum LinkSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",

  primarySm = "primarySm",
  primaryMd = "primaryMd",
  primaryLg = "primaryLg",
  primaryXl = "primaryXl",
  primaryXxl = "primaryXxl",
}

export enum LinkVariant {
  Primary = "Primary",
  Secondary = "Secondary",
}

type LinkProps = {
  children?: ReactNode;
  variant?: LinkVariant;
  className?: string;
  size?: LinkSize;
  leftIcon?: Icons;
  rightIcon?: Icons;
  disabled?: boolean;
  iconSize?: number;
  href: string;
};

const Link: FC<LinkProps> = ({
  children,
  variant = LinkVariant.Primary,
  className,
  size = LinkSize.md,
  leftIcon,
  disabled,
  rightIcon,
  href,
  iconSize = 20,
  ...rest
}) => {
  return (
    <S.Link
      href={href}
      size={size}
      variant={variant}
      className={className}
      disabled={disabled}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} />}
    </S.Link>
  );
};

export default Link;
