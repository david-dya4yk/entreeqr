import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { FC, ReactNode, useRef } from "react";
import * as S from "./Invite.styled";
import { useRouter } from "next/router";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-14.8, -40, v)}%`);
  // const x = useTransform(baseX, (v) => `${wrap(-11.35, -40, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 6000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div
      className="parallax"
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <motion.div
        className="scroller"
        style={{
          x,
          display: "flex",
          columnGap: "50px",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const Invite: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Wrapper>
          <ParallaxText baseVelocity={5}>
            <S.Inner>
              <S.Item>
                <img
                  src="images/content/invite/img-1.jpg"
                  alt="дві дівчини їдять в кафе"
                />
              </S.Item>
              <S.Item>
                <img
                  src="images/content/invite/img-2.jpg"
                  alt="дівчина посміхається"
                />
              </S.Item>
              <S.Item>
                <img
                  src="images/content/invite/img-3.jpg"
                  alt="кафе в середині"
                />
              </S.Item>
              <S.Item>
                <img
                  src="images/content/invite/img-4.jpg"
                  alt="хтопець та дівчина прцюють баристою"
                />
              </S.Item>
              <S.Item>
                <img
                  src="images/content/invite/img-5.jpg"
                  alt="повар доробляє страви"
                />
              </S.Item>
              <S.Item>
                <img
                  src="images/content/invite/img-6.jpg"
                  alt="кафе в середині"
                />
              </S.Item>
            </S.Inner>
          </ParallaxText>
          <S.Bottom>
            <div>
              <S.Title>Приєднуйтесь до entree</S.Title>
              <S.Subtitle>
                Ваш заклад отримає більше можливостей для стрімкого розвитку.
              </S.Subtitle>
            </div>
            <Button
              size={ButtonSize.xxl}
              variant={ButtonVariant.Primary}
              onClick={() => router.push("/registration")}
            >
              Спробувати
            </Button>
          </S.Bottom>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Invite;
