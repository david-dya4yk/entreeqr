import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { MotionValue } from "framer-motion";
import { FC } from "react";
import * as S from "./Hero.styled";

interface ThirdPhoneProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

const ThirdPhone: FC<ThirdPhoneProps> = ({ rotateX, rotateY }) => {
  return (
    <>
      <S.Phone>
        <img
          draggable="false"
          src="/images/content/phones/3/2x.png"
          alt="телефон"
        />
      </S.Phone>
      <S.Sun style={{ rotateX, rotateY, z: 1000 }}>
        <Icon name={Icons.Sun} width={155} height={160} />
      </S.Sun>
      <S.Line style={{ rotateX, rotateY, z: 1000 }}>
        <Icon name={Icons.Line} width={160} height={170} />
      </S.Line>
      <S.LeftMiddleImg
        style={{
          rotateX,
          rotateY,
          z: 1,
        }}
        className="hero__img--top"
      >
        <img
          draggable="false"
          src="/images/content/phones/3/left-2x.jpg"
          alt="бургер з сиром"
        />
      </S.LeftMiddleImg>
      <S.RightBottomImg
        style={{
          rotateX,
          rotateY,
          z: 100,
        }}
      >
        <img
          draggable="false"
          src="/images/content/phones/3/right-2x.jpg"
          alt="дівчина кітайка"
        />
      </S.RightBottomImg>
    </>
  );
};

export default ThirdPhone;
