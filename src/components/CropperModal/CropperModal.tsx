import React, { useCallback, useState } from "react";
import Cropper, { CropperProps } from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import { Button, ButtonSize, ButtonVariant } from "@liaugust/ui-library";

import getCroppedImg from "./cropImage";
import * as S from "./CropperModal.styled";

type CropType = "logo";

const cropperProps: {
  [key in CropType]: Pick<CropperProps, "cropShape" | "aspect">;
} = {
  logo: {
    cropShape: "rect",
    aspect: 1,
  },
};

interface CropperModalProps {
  cropType: CropType;
  open: boolean;
  image: string;
  filename: string;
  onCrop?: (file: File) => void;
  onClose?: () => void;
}

const toFile = (theBlob: Blob, fileName: string): File => {
  const b: any = theBlob;
  // A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  // Cast to a File() type
  return new File([b], fileName, { type: b.type });
};

const CropperModal: React.FC<CropperModalProps> = ({
  open,
  onClose = () => {},
  image,
  filename,
  cropType,
  onCrop = () => {},
}) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<null | Area>(null);
  const onCropComplete = useCallback((_: any, pxls: Area) => {
    setCroppedAreaPixels(pxls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCropImage = async () => {
    if (croppedAreaPixels && image) {
      const cropImage = await getCroppedImg(image, croppedAreaPixels);
      const file = toFile(cropImage, filename);
      onCrop(file);
      onClose();
    }
  };

  return (
    <S.StyledModal open={open} onClose={onClose}>
      <S.Title>Обрезка изображения</S.Title>
      <S.CropperContainer data-crop-type={cropType}>
        <Cropper
          objectFit="horizontal-cover"
          image={image}
          zoom={zoom}
          crop={crop}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          {...cropperProps[cropType]}
        />
      </S.CropperContainer>
      <S.ZoomContainer>
        <S.ZoomRange
          max="3"
          min="1"
          step="0.01"
          value={zoom}
          onChange={(e) => setZoom(+e.target.value)}
        />
      </S.ZoomContainer>
      <S.ActionWrapper>
        <Button
          variant={ButtonVariant.Outline}
          size={ButtonSize.l}
          onClick={onClose}
        >
          Отмена
        </Button>
        <Button
          variant={ButtonVariant.Filled1}
          size={ButtonSize.l}
          onClick={handleCropImage}
        >
          Применить
        </Button>
      </S.ActionWrapper>
    </S.StyledModal>
  );
};

export default CropperModal;
