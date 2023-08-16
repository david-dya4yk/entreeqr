import { FC, memo, MouseEvent } from "react";
import { useDropzone } from "react-dropzone";

import * as S from "./FilePicker.styled";
import { Icons } from "@/shared/ui/icons";
import { Icon } from "@/shared/ui/icon";

interface FilePickerProps {
  src?: string;
  onChange?: (file: File | null) => void;
  error?: string;
  className?: string;
  defaultSrc?: string | null;
  value?: any;
}

// eslint-disable-next-line react/display-name
const FilePicker: FC<FilePickerProps> = memo(
  ({ onChange = () => {}, error, className, value }) => {
    const onDrop = ([file]: File[]) => {
      onChange(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [".jpeg", ".jpg", ".png", ".webp", ".avif"],
        "image/jpg": [".jpeg", ".jpg", ".png", ".webp", ".avif"],
        "image/png": [".jpeg", ".jpg", ".png", ".webp", ".avif"],
        "image/webp": [".jpeg", ".jpg", ".png", ".webp", ".avif"],
        "image/avif": [".jpeg", ".jpg", ".png", ".webp", ".avif"],
      },
    });

    return (
      <S.Wrapper>
        <S.Preview>
          {value ? (
            <img src={value} alt="" />
          ) : (
            <Icon name={Icons.Image} size={32} />
          )}
        </S.Preview>
        <S.Inner
          {...getRootProps()}
          $error={error}
          $hover={isDragActive}
          className={className}
        >
          <input {...getInputProps()} />
          <div>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isDragActive ? (
              <>
                <S.Icon $drag>
                  <span>
                    <Icon name={Icons.Cloud2} />
                  </span>
                </S.Icon>
                <S.Label>Перетащите файл</S.Label>
              </>
            ) : error ? (
              <S.Error>Формат файла не подходит</S.Error>
            ) : (
              <>
                <S.Upload {...getRootProps()} type="button">
                  Загрузить
                </S.Upload>
                <S.Hint>SVG, PNG, JPG</S.Hint>
                <S.Hint>(макс. 1024x1024px)</S.Hint>
              </>
            )}
          </div>
        </S.Inner>
      </S.Wrapper>
    );
  }
);

export default FilePicker;
