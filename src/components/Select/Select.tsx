import { CSSProperties, FC } from "react";
import ReactSelect from "react-select";

import * as S from "./Select.styled";

interface SelectProps {
  value:
    | { id: string | number; name: string }
    | { id: string | number; name: string }[]
    | null;
  label?: string | null;
  srLabel?: string | null;
  placeholder?: string | null;
  onChange: (option: any) => void;
  options: { id: string | number; name: string }[];
  id?: string;
  size?: InputSize;
  required?: boolean;
  isMulti?: boolean;
  disabled?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  iconSize?: number;
  selectStyles?: {
    control?: CSSProperties;
    indicatorsContainer?: CSSProperties;
    input?: CSSProperties;
    placeholder?: CSSProperties;
    valueContainer?: CSSProperties;
    singleValue?: CSSProperties;
    dropdownIndicator?: CSSProperties;
    option?: CSSProperties;
    menuList?: CSSProperties;
    menu?: CSSProperties;
  };
  showSelected?: boolean;
}

export enum InputSize {
  xxs = "xxs",
  xs = "xs",
  s = "s",
  m = "m",
}

const Select: FC<SelectProps> = ({
  label,
  srLabel,
  value,
  placeholder,
  onChange,
  options,
  required,
  disabled,
  isMulti,
  size = InputSize.xs,
  hint,
  error,
  id,
  className,
  iconSize,
  showSelected = true,
  selectStyles = {},
}) => {
  const isActive = (optionId: string | number) => {
    if (Array.isArray(value)) {
      return value.some((i) => i.id === optionId);
    }
    return value?.id === optionId;
  };
  return (
    <S.Wrapper className={className}>
      {Boolean(label || srLabel) && (
        <S.Label $size={size} $hide={Boolean(srLabel)} htmlFor={id}>
          {label ?? srLabel}
          {required && <span>*</span>}
        </S.Label>
      )}
      <ReactSelect
        instanceId="react-select-instance-id"
        isDisabled={disabled}
        styles={{
          control: (styles, { isFocused, getValue }) => ({
            ...styles,
            background: "#FFFFFF",
            border: "1px solid #D0D5DD",
            borderRadius: 12,
            padding: "11px 13px",
            minHeight: "max-content",
            ...(isFocused
              ? {
                  boxShadow: "0 0 0 4px #ebecff",
                  border: "1px solid #a4bcfd",
                  outline: "transparent",
                }
              : {}),
            ...(size === InputSize.s || size === InputSize.xs
              ? {
                  padding: 11,
                }
              : {}),
            ...(size === InputSize.m
              ? {
                  padding: 13,
                }
              : {}),
            ...(isMulti && getValue().length > 0
              ? { paddingTop: 9, paddingBottom: 9 }
              : {}),
            ...(selectStyles.control ?? {}),
          }),
          placeholder: (styles) => ({
            ...styles,
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "125%",
            margin: 0,
            padding: 0,
            color: "#667085",
            ...(selectStyles.placeholder ?? {}),
          }),
          singleValue: (styles) => ({
            ...styles,
            ...(selectStyles.singleValue ?? {}),
          }),
          input: (styles) => ({
            ...styles,
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "125%",
            margin: 0,
            padding: 0,
            ...(size === InputSize.s
              ? {
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "125%",
                }
              : {}),
            ...(size === InputSize.m
              ? {
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "125%",
                }
              : {}),
            ...(size === InputSize.xs
              ? {
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "110%",
                }
              : {}),
            ...(selectStyles.input ?? {}),
          }),
          valueContainer: (styles) => ({
            ...styles,
            padding: 0,
            ...(selectStyles.valueContainer ?? {}),
          }),
          indicatorSeparator: () => ({ display: "none" }),
          indicatorsContainer: (styles, props) => ({
            ...styles,
            transition: "transform 0.3s ease",
            alignItems: "center",
            justifyContent: "center",
            "& > div": {
              padding: 0,
            },
            ...(props.selectProps.menuIsOpen
              ? { transform: "rotate(180deg)" }
              : {}),
            // ...(iconSize
            //   ? {
            //       width: iconSize,
            //       height: iconSize,
            //     }
            //   : {}),
            ...(selectStyles.indicatorsContainer ?? {}),
          }),
          dropdownIndicator: (styles) => ({
            ...styles,
            padding: 0,
            ...(iconSize
              ? {
                  width: iconSize,
                  height: iconSize,
                  svg: { height: iconSize, width: iconSize },
                }
              : {}),
            ...(selectStyles.dropdownIndicator ?? {}),
          }),
          menu: (styles) => ({
            ...styles,
            background: "#ffffff",
            border: "1px solid #e1e5ef",
            boxShadow: "0px 2px 10px rgba(29, 41, 57, 0.2)",
            borderRadius: 12,
            zIndex: 5,
            ...(selectStyles.menu ?? {}),
          }),
          menuList: (styles) => ({
            ...styles,
            padding: 6,
            maxHeight: 320,
            ...(selectStyles.menuList ?? {}),
          }),
          option: (styles, props) => ({
            ...styles,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "125%",
            color: "#000000",
            borderRadius: 12,
            padding: "10px 8px",
            "&:hover": {
              background: "#F9FAFB",
            },
            ...(isActive(props.data.id)
              ? {
                  background: "#F9FAFB",
                }
              : {}),
            ...(selectStyles.option ?? {}),
          }),
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: "#FFFFFF",
            border: "1px solid #D0D5DD",
            padding: "4px 4px 4px 5px",
            borderRadius: 6,
            margin: 0,
            "&:not(:last-of-type)": {
              marginRight: 5,
            },
            "& > div": {
              padding: 0,
            },
          }),
          multiValueLabel: (styles) => ({
            ...styles,
            padding: 0,
            minWidth: 20,
          }),
          multiValueRemove: (styles) => ({
            ...styles,
            color: "#98A2B3",
            transition: "color 0.3s ease",
            padding: 0,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
            },
          }),
        }}
        // components={{ Option: CustomOption }}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        isMulti={isMulti}
        value={value}
        hideSelectedOptions={false}
        getOptionValue={(option) => option.id.toString()}
        getOptionLabel={(option) => option.name}
        options={options}
        backspaceRemovesValue
        controlShouldRenderValue={showSelected}
        name={id}
        id={id}
      />
      {Boolean(hint) && !error && <S.Hint $size={size}>{hint}</S.Hint>}
      {Boolean(error) && <S.Error $size={size}>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Select;
