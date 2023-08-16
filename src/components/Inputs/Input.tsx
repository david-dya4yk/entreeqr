import { FC, ReactElement, useState } from "react";
import * as S from "./Input.styled";

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  type?: "email" | "password" | "text" | "number" | "search" | "tel";
  inputMode?: "numeric" | "decimal" | "text" | "email" | "tel";
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  hint?: string;
  error?: string;
  onChange: () => void;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
  type: defaultType = "text",
  inputMode = "text",
  maxLength = 100,
  minLength = 2,
  required,
  error,
  hint,
}) => {
  const [type, setType] = useState(defaultType);

  return (
    <S.Label>
      <span>
        {label}
        {required && <sup>*</sup>}
      </span>
      <S.Input
        type={type}
        value={value}
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        className={defaultType}
        required={required}
      />
      {defaultType === "password" && (
        <S.Icon
          type="button"
          onClick={() =>
            setType((prev) => (prev === "password" ? "text" : "password"))
          }
        >
          <svg fill="none" viewBox="0 0 16 16">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1.333 8s2-4.667 6.667-4.667S14.667 8 14.667 8s-2 4.667-6.667 4.667S1.333 8 1.333 8Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            />
          </svg>
        </S.Icon>
      )}
      {error && <S.Error>{hint}</S.Error>}
      {hint && !error && <S.Hint>{hint}</S.Hint>}
    </S.Label>
  );
};

export default Input;
