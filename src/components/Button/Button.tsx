import { FC, MouseEvent, ReactNode } from "react";

import { Icon } from "../../shared/ui/icon";
import { Icons } from "../../shared/ui/icons";

import * as S from "./Button.styled";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",

  iconSm = "iconSm",
  iconMd = "iconMd",
  iconLg = "iconLg",
  iconXl = "iconXl",
  iconXxl = "iconXxl",
}

export enum ButtonVariant {
  White = "White",
  Primary = "Primary",
  Gray = "Gray",
  GrayIcon = "GrayIcon",
  LightIcon = "LightIcon",
}

type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  leftIcon?: Icons;
  rightIcon?: Icons;
  disabled?: boolean;
  type?: "submit" | "button";
};
// TODO Add aria-label
export const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.White,
  className,
  onClick,
  size = ButtonSize.md,
  leftIcon,
  disabled,
  rightIcon,
  type = "button",
  ...rest
}) => {
  return (
    <S.Button
      size={size}
      onClick={onClick}
      $variant={variant}
      className={className}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} />}
      {children}
      {rightIcon && <Icon name={rightIcon} />}
    </S.Button>
  );
};
