import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import * as S from "./Design.styled";
import { wrap } from "@motionone/utils";
import { LinkSize, LinkVariant } from "@/components/Link/Link";

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
          columnGap: "30px",
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

interface DesignProps {
  title: string;
  subTitle: string;
}

const Design: FC<DesignProps> = ({ title, subTitle }) => {
  return (
    <S.Section>
      <S.Container
        className="container"
        whileInView={{ maxWidth: 1440 }}
        initial={{ maxWidth: 1000 }}
        transition={{
          duration: 0.3,
          delay: 0.4,
        }}
      >
        <S.Wrapper>
          <S.Inner>
            <S.Box>
              <S.Title>{title}</S.Title>
              <S.Subtitle>{subTitle}</S.Subtitle>
              <S.StyledLink
                size={LinkSize.primaryXl}
                variant={LinkVariant.Primary}
                href="/appearance"
              >
                Детальніше про кастомізацію
                <Icon name={Icons.ArrowUp} rotate={90} />
              </S.StyledLink>
            </S.Box>
            <ParallaxText baseVelocity={10}>
              <S.List>
                <S.Item>
                  <S.Img src="/images/content/design/1-2x.jpg" alt="телефон" />
                </S.Item>
                <S.Item>
                  <S.Img src="/images/content/design/2-2x.jpg" alt="телефон" />
                </S.Item>
                <S.Item>
                  <S.Img src="/images/content/design/3-2x.jpg" alt="телефон" />
                </S.Item>
                <S.Item>
                  <S.Img src="/images/content/design/4-2x.jpg" alt="телефон" />
                </S.Item>
                <S.Item>
                  <S.Img src="/images/content/design/5-2x.jpg" alt="телефон" />
                </S.Item>
                <S.Item>
                  <S.Img src="/images/content/design/6-2x.jpg" alt="телефон" />
                </S.Item>
              </S.List>
            </ParallaxText>
          </S.Inner>
        </S.Wrapper>
      </S.Container>
    </S.Section>
  );
};

export default Design;
