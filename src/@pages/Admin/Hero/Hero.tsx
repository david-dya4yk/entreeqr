import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import * as S from "./Hero.styled";
import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { useRouter } from "next/router";
import { FC } from "react";

const Hero: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Content>
          <S.Title>
            Панель управління.
            <br />
            Усе необхідне в одному місці
          </S.Title>
          <S.SubTitle>
            Дивіться замовлення, статистику, налаштовуйте бронювання, сайт
            доставки та сторінку замовлення біля столика за допомогою однієї
            панелі, без переходів на інші сайти та додатки
          </S.SubTitle>
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
                const element = document.getElementById("abilities");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={180} size={16} />
            </Button>
          </S.Links>
        </S.Content>
        <S.Image>
          <img src="images/content/admin/hero.jpg" alt="візуал адмін панелі" />
        </S.Image>
      </div>
    </S.Section>
  );
};

export default Hero;
