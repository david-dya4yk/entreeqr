import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import * as S from "./Details.styled";
import DetailsItem from "./Item";
import { FC, Fragment, useRef, useState } from "react";
import { Navigation } from "swiper";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";

enum Period {
  Month,
  Year,
}

const items = [
  {
    section: "Сайт доставки",
    items: [
      {
        name: "Щось, щось, щось",
        smart: true,
        basic: true,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: true,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: false,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: false,
        lite: false,
        pro: true,
      },
    ],
  },
  {
    section: "Адмін. панель",
    items: [
      {
        name: "Щось, щось, щось",
        smart: true,
        basic: true,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: true,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: false,
        lite: true,
        pro: true,
      },
      {
        name: "Щось, щось, щось",
        smart: false,
        basic: false,
        lite: false,
        pro: true,
      },
    ],
  },
];

const Details: FC = () => {
  const [period, setPeriod] = useState(Period.Month);
  const swiperRef = useRef<SwiperCore>();
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <S.Section className="details">
      <div className="container">
        <S.Title>Детально про кожен план</S.Title>
        <S.Content>
          <S.Offer>
            <S.Headline>У річній підписці</S.Headline>
            <S.Price>
              15% знижка
              <svg fill="none" viewBox="0 0 20 15">
                <g fill="#444CE7" clipPath="url(#a)">
                  <path d="M10.572 10.005c.874-1.625 1.866-3.168 3.044-4.594 1.089-1.314 2.457-2.39 3.508-3.726.442-.563-.092-1.446-.802-1.05-3.095 1.718-5.462 5.559-7.039 8.612-.442.854.833 1.608 1.29.758Zm2.673 4.825c.86-.598 1.778-1.067 2.79-1.352.853-.24 1.902-.182 2.575-.809.305-.286.17-.702-.117-.923-.815-.63-2.184-.209-3.073.068a10.77 10.77 0 0 0-3.044 1.516c-.897.636-.05 2.137.869 1.5ZM3.411 7.603c.24-1.02.337-2.046.23-3.092-.092-.88-.532-1.836-.197-2.692.154-.39.59-.416.901-.23.887.525 1 1.953 1.069 2.881a10.769 10.769 0 0 1-.288 3.388c-.262 1.068-1.969.834-1.715-.255Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h20v15H0z" />
                  </clipPath>
                </defs>
              </svg>
            </S.Price>
            <S.Buttons>
              <S.Btn
                type="button"
                onClick={() => setPeriod(Period.Month)}
                className={period === Period.Month ? "active" : ""}
              >
                Місяць
              </S.Btn>
              <S.Btn
                type="button"
                onClick={() => setPeriod(Period.Year)}
                className={period === Period.Year ? "active" : ""}
              >
                Рік
              </S.Btn>
            </S.Buttons>
          </S.Offer>

          <Swiper
            loop={false}
            slidesPerView="auto"
            // navigation={false}
            onSlideChange={(swiper) => {
              setActive(swiper.activeIndex);
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              200: {
                slidesPerGroup: 1,
                slidesPerView: 1,
              },
              501: {
                slidesPerView: 2,
              },
              751: {
                slidesPerView: 4,
                enabled: false,
              },
            }}
          >
            <SwiperSlide className="my-slide">
              <S.Item>
                <S.Headline>Lite</S.Headline>
                <S.Price>₴400 / міс.</S.Price>
                <Button
                  size={ButtonSize.lg}
                  variant={ButtonVariant.Primary}
                  onClick={() => router.push("/registration")}
                >
                  Спробувати
                </Button>
              </S.Item>
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <S.Item>
                <S.Headline>Basic</S.Headline>
                <S.Price>₴800 / міс.</S.Price>
                <Button
                  size={ButtonSize.lg}
                  variant={ButtonVariant.Primary}
                  onClick={() => router.push("/registration")}
                >
                  Спробувати
                </Button>
              </S.Item>
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <S.Item className="accent">
                <S.Headline>Smart</S.Headline>
                <S.Price>₴1500 / міс.</S.Price>
                <Button
                  size={ButtonSize.lg}
                  variant={ButtonVariant.Primary}
                  onClick={() => router.push("/registration")}
                >
                  Спробувати
                </Button>
              </S.Item>
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <S.Item>
                <S.Headline>Pro</S.Headline>
                <S.Price>₴2500 / міс.</S.Price>
                <Button
                  size={ButtonSize.lg}
                  variant={ButtonVariant.Primary}
                  onClick={() => router.push("/registration")}
                >
                  Спробувати
                </Button>
              </S.Item>
            </SwiperSlide>
          </Swiper>
        </S.Content>

        {items.map((item, index) => (
          <Fragment key={index}>
            <S.Subtitle>{item.section}</S.Subtitle>

            <S.Inner>
              {item.items.map((it, index) => (
                <DetailsItem
                  key={index}
                  name={it.name}
                  smart={it.smart}
                  lite={it.lite}
                  basic={it.basic}
                  pro={it.pro}
                />
              ))}
            </S.Inner>
          </Fragment>
        ))}
      </div>
    </S.Section>
  );
};

export default Details;
