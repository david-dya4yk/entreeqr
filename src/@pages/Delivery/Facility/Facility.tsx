import { Link } from "@/components/Link";
import { LinkSize, LinkVariant } from "@/components/Link/Link";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useTransform, useScroll } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import * as S from "./Facility.styled";

const items = [
  {
    title: "Бронювання",
    text: "Клієнти зможуть зробити резервацію столів онлайн через головну сторінку сайту.",
    image: "images/content/facility/iphone-reservation.png",
    link: "/booking",
  },
  {
    title: "Відгуки",
    text: "Отримуйте реальні враження про ваш заклад одразу через сайт, або після замовлення.",
    image: "images/content/facility/iphone-reviews.png",
    link: "/reviews",
  },
  {
    title: "Історія замовлень",
    text: "Створіть свою базу клієнтів. Авторизовані користувачі зможуть бачити детальну історію своїх замовлень",
    image: "images/content/facility/iphone-history.png",
    link: "",
  },
];

const Facility: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const steps = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 3]);

  useEffect(() => {
    function updateOpacity(prev: number) {
      if (prev < 1.5) {
        setActive(1);
      }
      if (prev >= 1.5 && prev < 2) {
        setActive(2);
      }
      if (prev >= 2.5) {
        setActive(3);
      }
    }

    const unsubscribe = steps.on("change", updateOpacity);

    return () => unsubscribe();
  }, [steps]);

  return (
    <S.Section ref={ref}>
      <S.SectionInner>
        <div className="container">
          <S.Title className="title">Додаткові можливості</S.Title>
          <S.Inner>
            <S.Wrapper>
              {items.map((item, index) => (
                <S.Item key={index} active={active === index + 1}>
                  <S.Content>
                    <S.Image>
                      <img src={item.image} alt={item.title} />
                    </S.Image>
                  </S.Content>
                  <S.Headline>{item.title}</S.Headline>
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                  {item.link && (
                    <Link
                      size={LinkSize.primaryXl}
                      variant={LinkVariant.Primary}
                      href={item.link}
                    >
                      Детальніше
                      <Icon name={Icons.ArrowUp} rotate={90} />
                    </Link>
                  )}
                </S.Item>
              ))}
            </S.Wrapper>
            <S.Content>
              {items.map((item, index) => (
                <S.Image key={index} active={active === index + 1}>
                  <img src={item.image} alt={item.title} />
                </S.Image>
              ))}
            </S.Content>
          </S.Inner>
        </div>
      </S.SectionInner>
    </S.Section>
  );
};

export default Facility;
