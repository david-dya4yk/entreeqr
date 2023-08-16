import { FC } from "react";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import * as S from "./Hero.styled";
import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { useRouter } from "next/router";

const Hero: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container container--big">
        <S.Inner>
          <S.Content>
            <S.Title>Отримуйте реальні відгуки про ваш заклад</S.Title>
            <S.Subtitle>
              Дізнавайтеся про враження ваших відвідувачів за допомогою оцінок і
              написання відгуку в режимі реального часу
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
                  const element = document.getElementById("reviews-service");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Детальніше
                <Icon name={Icons.ArrowUp} rotate={180} size={16} />
              </Button>
            </S.Links>
          </S.Content>
          <S.Images>
            <img src="images/content/reviews/rewiews-phone.png" alt="телефон" />
            <S.Image>
              <img src="images/content/reviews/bg.jpg" alt="дівчина бариста" />
            </S.Image>
            <S.Message>
              <span>Анастасія К.</span>
              Мені все дуже сподобалося :)
            </S.Message>
            <S.Message>
              <span>Захар Л.</span>
              Суп холодний...
            </S.Message>
            <S.Message>
              <span>Олександра Т.</span>
              4/5 ставлю
            </S.Message>
            <S.Message>
              <span>Михайло Х.</span>
              Це вау! Буду ще
            </S.Message>
          </S.Images>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Hero;
