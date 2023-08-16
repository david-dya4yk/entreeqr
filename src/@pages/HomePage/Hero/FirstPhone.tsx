import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { MotionValue } from "framer-motion";
import { FC } from "react";
import * as S from "./Hero.styled";

interface FirstPhoneProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

const FirstPhone: FC<FirstPhoneProps> = ({ rotateX, rotateY }) => {
  return (
    <>
      <S.Phone>
        <img
          draggable="false"
          src="/images/content/phones/1/2x.png"
          alt="телефон"
        />
      </S.Phone>
      <S.SunLights style={{ rotateX, rotateY, z: 10000 }}>
        <Icon name={Icons.Rays} size={160} />
      </S.SunLights>
      <S.Hat style={{ rotateX, rotateY, z: 1000 }}>
        <Icon name={Icons.UserIcon} size={120} />
      </S.Hat>
      <S.LeftTopImg
        style={{
          rotateX,
          rotateY,
          z: 1,
        }}
        className="hero__img--top"
      >
        <img
          draggable="false"
          src="/images/content/phones/1/left-2x.jpg"
          alt="бургер з сиром"
        />
      </S.LeftTopImg>
      <S.RightMiddleImg
        style={{
          rotateX,
          rotateY,
          z: 100,
        }}
      >
        <img
          draggable="false"
          src="/images/content/phones/1/right-2x.jpg"
          alt="дівчина кітайка"
        />
      </S.RightMiddleImg>
      <S.RightBottomText style={{ rotateX, rotateY, z: 1000 }}>
        <Icon name={Icons.Text} size={75} />
      </S.RightBottomText>
    </>
  );
};

export default FirstPhone;
