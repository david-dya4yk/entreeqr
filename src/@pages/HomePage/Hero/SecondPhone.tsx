import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { MotionValue } from "framer-motion";
import { FC } from "react";
import * as S from "./Hero.styled";

interface SecondPhoneProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

const SecondPhone: FC<SecondPhoneProps> = ({ rotateX, rotateY }) => {
  return (
    <>
      <S.Phone>
        <img
          draggable="false"
          src="/images/content/phones/2/2x.png"
          alt="телефон"
        />
      </S.Phone>
      <S.Heart style={{ rotateX, rotateY, z: 10000 }}>
        <Icon name={Icons.HeartIcon} width={80} height={150} />
      </S.Heart>
      <S.Star style={{ rotateX, rotateY, z: 1000 }}>
        <Icon name={Icons.StarIcon} width={170} height={160} />
      </S.Star>
      <S.LeftBottomImg
        style={{
          rotateX,
          rotateY,
          z: 1,
        }}
        className="hero__img--top"
      >
        <img
          draggable="false"
          src="/images/content/phones/2/left-2x.jpg"
          alt="бургер з сиром"
        />
      </S.LeftBottomImg>
      <S.RightTopImg
        style={{
          rotateX,
          rotateY,
          z: 100,
        }}
      >
        <img
          draggable="false"
          src="/images/content/phones/2/right-2x.jpg"
          alt="дівчина кітайка"
        />
      </S.RightTopImg>
    </>
  );
};

export default SecondPhone;
