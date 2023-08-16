import { ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import * as S from "./Hero.styled";

const Hero: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const steps = useTransform(scrollYProgress, [0, 1], [-2, 1.5]);

  useEffect(() => {
    const handler = (v: number) => setValue(v);
    const unsubscribe = steps.on("change", handler);
    return () => unsubscribe();
  }, [steps]);

  return (
    <>
      <S.Section value={value}>
        <div className="container container--big">
          <S.Inner>
            <S.Title>Створюємо сучасні заклади</S.Title>
            <S.Subtitle>
              Ми вирішили змінити звичний вигляд меню для ресторанів, кафе,
              піцерій, фудкортів та інших закладів і вивести їх на новий рівень.
              Ми вдосконалюємо способи замовлення та оплати, заощаджуючи
              незліченну кількість часу для власників, співробітників та
              клієнтів. А ще робимо всіх трошки щасливіше.
            </S.Subtitle>
            <S.StyledButton
              size={ButtonSize.xxl}
              variant={ButtonVariant.Gray}
              onClick={() => {
                const element = document.getElementById("objectives");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={180} size={16} />
            </S.StyledButton>
            <S.Decor>
              <svg fill="none" viewBox="0 0 31 42">
                <path
                  fill="currentColor"
                  d="m19.487 41.176-.9-.678c-.602-.452-1.538-1.251-2.81-2.397-1.272-1.145-2.56-2.496-3.865-4.053a67.088 67.088 0 0 1-3.819-5.038 78.902 78.902 0 0 1-3.297-5.18c-.958-1.653-1.744-3.222-2.358-4.709-.615-1.487-1.05-2.903-1.304-4.249-.254-1.345-.352-2.582-.296-3.71.057-1.127.352-2.317.886-3.569.534-1.252 1.247-2.206 2.14-2.862.892-.656 2.011-.809 3.358-.458 1.348.35 2.476 1 3.387 1.948.91.95 1.727 2 2.451 3.154a40.88 40.88 0 0 1 2.078 3.755 79.257 79.257 0 0 1 1.454 3.09c.308.712.476 1.113.502 1.204a1.21 1.21 0 0 1-.195 1.073 1.142 1.142 0 0 1-.692.425 1.097 1.097 0 0 1-.793-.16 1.14 1.14 0 0 1-.383-.403c-.047-.082.02-.856.201-2.32.181-1.465.527-2.949 1.038-4.45.51-1.503 1.08-2.768 1.708-3.795a24.625 24.625 0 0 1 2.004-2.833 25.839 25.839 0 0 1 2.47-2.584C23.39 1.515 24.505.974 25.8.753c1.294-.22 2.304.424 3.03 1.935.727 1.512 1.225 2.923 1.495 4.235.27 1.311.412 2.7.425 4.168a26.939 26.939 0 0 1-.331 4.438 43.397 43.397 0 0 1-.937 4.436 57.793 57.793 0 0 1-1.338 4.338 59.989 59.989 0 0 1-1.554 3.981 101.857 101.857 0 0 1-1.552 3.41 83.36 83.36 0 0 1-1.704 3.339 165.448 165.448 0 0 0-1.727 3.303c-.518 1.02-.981 1.517-1.39 1.488l-.615-.043-.41-.492c-.275-.327-.141-1.018.4-2.072.542-1.054 1.125-2.16 1.752-3.318a78.956 78.956 0 0 0 1.671-3.257 94.57 94.57 0 0 0 1.501-3.286 55.856 55.856 0 0 0 1.491-3.825 55.243 55.243 0 0 0 1.273-4.138c.368-1.386.66-2.77.879-4.149.217-1.38.321-2.721.313-4.026a19.17 19.17 0 0 0-.374-3.721 6.58 6.58 0 0 0-1.6-3.138c-.827-.915-1.658-.992-2.492-.231-.835.76-1.727 1.753-2.677 2.977a19.293 19.293 0 0 0-2.337 3.844 22.619 22.619 0 0 0-1.425 4.173c-.342 1.443-.499 2.21-.472 2.301a1.21 1.21 0 0 1-.195 1.074 1.14 1.14 0 0 1-.692.424 1.09 1.09 0 0 1-.543-.04 1.125 1.125 0 0 1-.464-.297 1.157 1.157 0 0 1-.168-.225 12.683 12.683 0 0 1-.356-.763c-.19-.427-.523-1.167-.998-2.219a48.737 48.737 0 0 0-1.546-3.119 24.648 24.648 0 0 0-1.918-2.996 8.697 8.697 0 0 0-2.696-2.375c-1.074-.613-2.025-.474-2.854.418-.829.893-1.325 1.992-1.488 3.299a12.487 12.487 0 0 0 .073 3.744c.21 1.189.596 2.47 1.155 3.843.558 1.373 1.299 2.858 2.223 4.456a73.566 73.566 0 0 0 3.198 5.018 65.714 65.714 0 0 0 3.673 4.839c1.24 1.477 2.462 2.76 3.666 3.849 1.205 1.089 2.107 1.86 2.707 2.313.6.454.932.712.997.773a1.115 1.115 0 0 1 .286.453 1.154 1.154 0 0 1-.321 1.233 1.072 1.072 0 0 1-.727.262 1.08 1.08 0 0 1-.503-.144 24.34 24.34 0 0 0-.116-.067Z"
                />
              </svg>
              <span>З любов’ю</span>
            </S.Decor>
          </S.Inner>
        </div>
      </S.Section>
      <div ref={ref} />
    </>
  );
};

export default Hero;
