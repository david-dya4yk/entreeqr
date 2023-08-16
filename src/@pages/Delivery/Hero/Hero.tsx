import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC } from "react";
import * as S from "./Hero.styled";

const Hero: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Wrapper>
          <S.Content>
            <S.Title>Повноцінний сайт доставки — це легко</S.Title>
            <S.Subtitle>
              Без скачувань, працює на будь-яких пристроях, оплата і чайові
              онлайн, бронювання, відгуки, промокоди та багато іншого.
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
                  const element = document.getElementById("take-orders");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Детальніше
                <Icon name={Icons.ArrowUp} rotate={180} size={16} />
              </Button>
            </S.Links>
          </S.Content>
          <S.Images>
            <S.Image>
              <img
                src="images/content/delivery/delivery1.jpg"
                alt="чоловік та жінка сидять в кафе"
              />
              <S.Img>
                <img
                  src="images/content/delivery/delivery-icon1.jpg"
                  alt="тост з яйцем"
                />
              </S.Img>
              <S.Img>
                <img
                  src="images/content/delivery/check.jpg"
                  alt="галочка фіолетова"
                />
              </S.Img>
              <S.Img>
                <img
                  src="images/content/delivery/browsers.jpg"
                  alt="інтернет браузери хром сафарі фаєр-фокс опера"
                />
              </S.Img>
            </S.Image>
          </S.Images>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Hero;
