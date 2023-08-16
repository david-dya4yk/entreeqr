import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC } from "react";
import * as S from "./Possibilities.styled";
import RaysIcon from "./RaysIcon";

const Possibilities: FC = () => {
  const router = useRouter();
  return (
    <S.Section id="possibilities">
      <div className="container">
        <S.Headline className="title">
          <span>
            Сучасне
            <RaysIcon />
          </span>{" "}
          рішення для взаємодії з клієнтами та збільшення прибутку
        </S.Headline>
        <S.Subtitle>
          <p>
            Налаштуйте меню для свого бренду, яке буде комфортним для
            використання вашими клієнтами з будь‑якої точки світу та
            обов&apos;язково їх здивує.
          </p>
        </S.Subtitle>
        <S.Inner>
          <S.Item>
            <S.Image>
              <img src="/images/content/phones/1/2x.png" alt="телефон айфон" />
            </S.Image>
            <S.Hover>Наведіть</S.Hover>
          </S.Item>
          <S.Item>
            <S.Title>Створіть власний сайт доставки</S.Title>
            <S.Text>
              <p>
                <span>Швидко та просто.</span> Ви отримаєте унікальний сайт для
                вашого закладу, який дозволить клієнтам легко ознайомитися з
                меню, вибрати улюблені страви і відразу їх сплатити.
              </p>
            </S.Text>
            <Button
              onClick={() => router.push("/delivery")}
              variant={ButtonVariant.Primary}
              size={ButtonSize.xxl}
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={90} />
            </Button>
          </S.Item>
          <S.Item>
            <S.Title>Приймайте замовлення до столу</S.Title>
            <S.Text>
              <p>
                <span>Збільште прибуток.</span> Клієнти зможуть зробити
                замовлення або дозамовлення до столу самостійно через QR-код, що
                збільшить середній чек. А ви зможете зменшити витрати на
                співробітників або перерозподілити їх час більш практично.
              </p>
            </S.Text>
            <Button
              onClick={() => router.push("/order")}
              variant={ButtonVariant.Primary}
              size={ButtonSize.xxl}
            >
              Детальніше
              <Icon name={Icons.ArrowUp} rotate={90} />
            </Button>
          </S.Item>
          <S.Item>
            <S.Image>
              <img src="/images/content/phones/2/2x.png" alt="телефон айфон" />
            </S.Image>
            <S.Hover>Наведіть</S.Hover>
          </S.Item>
        </S.Inner>
        <S.Wrapper>
          <S.Box>
            <S.Title>
              Лояльність. <br />
              Своя база клієнтів. <br />
              Більше замовлень
            </S.Title>

            <S.Text>
              <p>
                <span>Всі дані замовлень та клієнтів залишаються у вас.</span>
                Контролюйте якість замовлень, вирішуйте спірні ситуації та
                запускайте промокоди та промо‑матеріали.
              </p>
            </S.Text>
          </S.Box>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Possibilities;
