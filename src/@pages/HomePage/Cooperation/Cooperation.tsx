import { ButtonSize, ButtonVariant } from "@/components/Button";
import { LinkSize, LinkVariant } from "@/components/Link/Link";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useCycle } from "framer-motion";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import * as S from "./Cooperation.styled";

const comments = [
  {
    name: "Иван Л.",
    text: "Додайте більше варіантів карток",
    id: 1,
  },
  {
    name: "Лена Л.",
    text: "Все супер! Але можливо ще банерів?",
    id: 2,
  },
  {
    name: "Лариса Л",
    text: "Добавьте варианты карточек блюд",
    id: 3,
  },
  {
    name: "Олег Л",
    text: "Добавите варианты главной",
    id: 4,
  },
];

const itemsA = [comments[0], comments[1], comments[2], comments[3]];
const itemsB = [comments[3], comments[0], comments[1], comments[2]];
const itemsC = [comments[2], comments[3], comments[0], comments[1]];
const itemsD = [comments[1], comments[2], comments[3], comments[0]];

const Cooperation: FC = () => {
  const [items, animate] = useCycle(itemsA, itemsB, itemsC, itemsD);

  const router = useRouter();

  useEffect(() => {
    setTimeout(animate, 2000);
  }, [items, animate]);

  return (
    <S.Section>
      <div className="container">
        <S.Inner>
          <S.Item>
            <S.Systems>
              <S.Pos>
                <S.Image>
                  <picture>
                    <source
                      media="(min-width: 801px)"
                      srcSet="../images/content/pos1.png"
                    />
                    <source
                      media="(max-width: 800px)"
                      srcSet="../images/content/pos1-s.png"
                    />
                    <img
                      src="../images/content/pos1.png"
                      alt="логотип приложения"
                    />
                  </picture>
                </S.Image>
              </S.Pos>
              <S.Pos>
                <picture>
                  <source
                    media="(min-width: 801px)"
                    srcSet="../images/content/pos2.png"
                  />
                  <source
                    media="(max-width: 800px)and (min-width: 600px)"
                    srcSet="../images/content/pos2-s.png"
                  />
                  <source
                    media="(max-width: 600px)"
                    srcSet="../images/content/pos2-xs.png"
                  />
                  <img
                    src="../images/content/pos2.png"
                    alt="логотип приложения"
                  />
                </picture>
              </S.Pos>
            </S.Systems>
            <S.Title>Працюємо з популярними POS-системами</S.Title>
            <S.StyledLink
              size={LinkSize.primaryXl}
              variant={LinkVariant.Primary}
              disabled
              href=""
            >
              Немає моєї POS
              <Icon name={Icons.ArrowUp} rotate={90} />
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.Comments>
              {items.map((item, index) => (
                <S.Comment
                  index={index}
                  key={item.id}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                  }}
                >
                  <span>{item.name}</span>
                  {item.text}
                </S.Comment>
              ))}
            </S.Comments>
            <S.Title>Підтримуємо та обговорюємо ваші ідеї</S.Title>
            <S.StyledLink
              size={LinkSize.primaryXl}
              variant={LinkVariant.Primary}
              href=""
              disabled
            >
              Запропонувати ідею
              <Icon name={Icons.ArrowUp} rotate={90} />
            </S.StyledLink>
          </S.Item>
        </S.Inner>
        <S.Content>
          <S.Text>
            <p>
              <span>Почніть прямо зараз</span>
              Збільште прибуток свого бізнесу та адаптуйте його під сучасні
              стандарти.
            </p>
          </S.Text>
          <S.Try
            onClick={() => router.push("/registration")}
            size={ButtonSize.xxl}
            variant={ButtonVariant.White}
          >
            Спробувати
          </S.Try>
        </S.Content>
      </div>
    </S.Section>
  );
};

export default Cooperation;
