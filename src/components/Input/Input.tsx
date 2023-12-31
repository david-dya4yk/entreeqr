import { ChangeEvent, FC, ReactElement } from "react";

import * as S from "./Input.styled";

export enum InputSize {
  xxs = "xxs",
  xs = "xs",
  s = "s",
  m = "m",
}

export interface InputProps {
  className?: string;
  placeholder?: string | null;
  required?: boolean;
  disabled?: boolean;
  label?: string | null;
  srLabel?: string | null;
  error?: string;
  hint?: string | null;
  inputMode?: "numeric" | "decimal" | "text" | "email" | "tel";
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string | number;
  defaultValue?: string | number;
  id?: string;
  as?: "input" | "textarea";
  size?: InputSize;
  maxLength?: number;
  minLength?: number;
  type?: "number" | "text" | "tel" | "email" | "password";
  onFocused?: () => void;
  onBlurred?: () => void;
  iconConfig?:
    | {
        leftIcon: ReactElement;
        size?: number;
        width?: number;
        height?: number;
      }
    | {
        rightIcon: ReactElement;
        size?: number;
        width?: number;
        height?: number;
      };
}

const Input: FC<InputProps> = ({
  placeholder,
  className,
  label,
  error,
  srLabel,
  required,
  disabled,
  onChange,
  value,
  hint,
  inputMode = "text",
  defaultValue,
  type = "text",
  as = "input",
  size = InputSize.xs,
  maxLength = 1000,
  minLength = 0,
  onFocused = () => {},
  onBlurred = () => {},
  iconConfig,
  id,
}) => (
  <S.Wrapper>
    {Boolean(label || srLabel) && (
      <S.Label $size={size} $hide={Boolean(srLabel)} htmlFor={id}>
        {label ?? srLabel}
        {required && <span>*</span>}
      </S.Label>
    )}
    <S.Field data-input>
      {iconConfig && "leftIcon" in iconConfig && (
        <S.LeftIcon
          icon={iconConfig.leftIcon}
          size={iconConfig.size}
          width={iconConfig.width}
          height={iconConfig.height}
        />
      )}
      {as === "input" && (
        <S.Input
          $iconConfig={iconConfig}
          $size={size}
          $error={Boolean(error)}
          className={className}
          inputMode={inputMode}
          placeholder={placeholder ?? ""}
          onChange={onChange}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onFocus={onFocused}
          onBlur={onBlurred}
          type={type}
          name={id}
          id={id}
        />
      )}
      {as === "textarea" && (
        <S.Textarea
          $size={size}
          $error={Boolean(error)}
          className={className}
          placeholder={placeholder ?? ""}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          onFocus={onFocused}
          onBlur={onBlurred}
          value={value}
          defaultValue={defaultValue}
          name={id}
          id={id}
        />
      )}
      {iconConfig && "rightIcon" in iconConfig && (
        <S.RightIcon
          icon={iconConfig.rightIcon}
          size={iconConfig.size}
          width={iconConfig.width}
          height={iconConfig.height}
        />
      )}
    </S.Field>
    {Boolean(hint) && !error && <S.Hint $size={size}>{hint}</S.Hint>}
    {Boolean(error) && <S.Error $size={size}>{error}</S.Error>}
  </S.Wrapper>
);

export default Input;
