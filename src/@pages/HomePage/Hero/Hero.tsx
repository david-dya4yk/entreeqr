import {
  useMotionValue,
  motion,
  useTransform,
  animate,
  useCycle,
} from "framer-motion";
import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC, MouseEvent, useCallback, useEffect } from "react";
import * as S from "./Hero.styled";
import FirstPhone from "./FirstPhone";
import SecondPhone from "./SecondPhone";
import ThirdPhone from "./ThirdPhone";
import { useMedia } from "react-use";
import { useRouter } from "next/router";

const Hero: FC = () => {
  const isMobile = useMedia("(max-width: 1200px)", false);
  const firstImage = useCycle(
    {
      rotateY: 0,
      zIndex: 100,
      transition: {
        rotateY: {
          duration: 0,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 0,
      zIndex: 100,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
          delay: 0.2,
        },
        zIndex: {
          duration: 0,
        },
      },
    }
  );
  const secondImage = useCycle(
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 0,
      zIndex: 100,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
          delay: 0.2,
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    }
  );
  const thirdImage = useCycle(
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 0,
      zIndex: 100,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
          delay: 0.2,
        },
        zIndex: {
          duration: 0,
        },
      },
    },
    {
      rotateY: 90,
      zIndex: -1,
      transition: {
        rotateY: {
          duration: 0.2,
          ease: "easeOut",
        },
        zIndex: {
          duration: 0,
        },
      },
    }
  );

  const x = useMotionValue(1350);
  const y = useMotionValue(255);

  const rotateX = useTransform(y, [0, 510], [30, -30]);
  const rotateY = useTransform(x, [0, 2700], [-30, 30]);

  function handleMouse(event: MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const fn = useCallback(() => {
    firstImage[1]();
    secondImage[1]();
    thirdImage[1]();
  }, [firstImage, secondImage, thirdImage]);

  useEffect(() => {
    const timer = setInterval(() => fn(), 5000);
    return () => {
      clearInterval(timer);
    };
  }, [fn]);

  const router = useRouter();

  return (
    <S.Wrapper
      {...(isMobile
        ? {}
        : {
            onMouseMove: handleMouse,
            onMouseLeave: () => {
              animate(x, 1350);
              animate(y, 255);
            },
          })}
    >
      <div className="container">
        <S.Inner>
          <S.Content>
            <S.Title>
              Ваш бізнес може більше разом з <span>entree</span>
            </S.Title>
            <S.Subtitle>
              Спростіть процес онлайн-замовлень для себе та своїх клієнтів:
              працюйте швидше, отримуйте більше замовлень та головне —
              заощаджуйте свій час.
            </S.Subtitle>
            <S.Links>
              <Button
                size={ButtonSize.xxl}
                variant={ButtonVariant.Primary}
                onClick={() => router.push("/registration")}
              >
                Спробувати
              </Button>
              <Button
                size={ButtonSize.xxl}
                variant={ButtonVariant.Gray}
                onClick={() => {
                  const section = document.getElementById("possibilities");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Детальніше
                <Icon name={Icons.ArrowUp} rotate={180} size={16} />
              </Button>
            </S.Links>
          </S.Content>
          <motion.div
            onTap={fn}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: 700,
            }}
          >
            <S.Images
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                z: 10,
              }}
            >
              <S.Box animate={firstImage[0]}>
                <FirstPhone rotateX={rotateX} rotateY={rotateY} />
              </S.Box>
              <S.Box style={{ rotateY: 90 }} animate={secondImage[0]}>
                <SecondPhone rotateX={rotateX} rotateY={rotateY} />
              </S.Box>
              <S.Box style={{ rotateY: 90 }} animate={thirdImage[0]}>
                <ThirdPhone rotateX={rotateX} rotateY={rotateY} />
              </S.Box>
            </S.Images>
          </motion.div>
        </S.Inner>
      </div>
    </S.Wrapper>
  );
};

export default Hero;
