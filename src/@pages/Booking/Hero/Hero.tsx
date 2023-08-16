import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import * as S from "./Hero.styled";
import { useRouter } from "next/router";
import { FC } from "react";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";

const Hero: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container container--big">
        <S.Inner>
          <S.Content>
            <S.Title>Бронювання столів онлайн</S.Title>
            <S.Subtitle>
              Увімкніть віджет бронювань на сайті доставки entree та отримайте
              більшу відвідуваність
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
                  const element = document.getElementById("service");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Детальніше
                <Icon name={Icons.ArrowUp} rotate={180} size={16} />
              </Button>
            </S.Links>
          </S.Content>
          <S.Images>
            <img
              src="images/content/booking/reservation-phone.png"
              alt="телефон"
            />
            <S.Image>
              <img
                src="images/content/booking/bg-2.jpg"
                alt="барна стійка планшет"
              />
            </S.Image>
            <S.Message className="reservation">
              <span>8 липня 14:30</span>
              Бронь успішна!
            </S.Message>
          </S.Images>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Hero;
