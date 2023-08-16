import { CropperModal } from "@/components/CropperModal";
import { FilePicker } from "@/components/FilePicker";
import { FC, memo, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FieldType } from "../constants";

interface UploaderProps {
  control: Control<FieldType, any>;
  setValue: (name: "logo", value: File | null) => void;
}

// eslint-disable-next-line react/display-name
const Uploader: FC<UploaderProps> = memo(({ control, setValue }) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <Controller
        name="logo"
        control={control}
        render={({ field: { value } }) => (
          <FilePicker
            value={value ? URL.createObjectURL(value) : null}
            onChange={(f) => (f ? setFile(f) : setValue("logo", null))}
          />
        )}
      />
      {file && (
        <CropperModal
          open
          image={URL.createObjectURL(file)}
          filename={file.name}
          cropType="logo"
          onClose={() => setFile(null)}
          onCrop={(v) => {
            setValue("logo", v);
            setFile(null);
          }}
        />
      )}
    </>
  );
});

export default Uploader;
