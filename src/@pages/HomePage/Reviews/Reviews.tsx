import { FC, useRef, useState } from "react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./Reviews.styled";
import { EffectFade, Navigation } from "swiper";
import { Icons } from "@/shared/ui/icons";
import { Icon } from "@/shared/ui/icon";
import { Button, ButtonSize, ButtonVariant } from "@/components/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ClickIcon from "./ClickIcon";

SwiperCore.use([Pagination, EffectCoverflow]);

const Reviews: FC = () => {
  const swiperRef = useRef<SwiperCore>();
  const [active, setActive] = useState(0);

  return (
    <S.Section>
      <div className="container">
        <S.Title className="title">
          <span>Реальні</span> відгуки від наших клієнтів
        </S.Title>
        <S.Body>
          <S.Icon>
            <S.Click>Клац</S.Click>
            <ClickIcon />
          </S.Icon>
          <S.Inner>
            <Swiper
              loop={false}
              slidesPerView={1}
              effect={"fade"}
              navigation={false}
              onSlideChange={(swiper) => {
                setActive(swiper.activeIndex);
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[EffectFade, Navigation, Pagination]}
            >
              <SwiperSlide>
                <S.Item>
                  <S.Video active={active === 0}>
                    <img
                      src="/images/content/reviews-section/cover.jpg"
                      alt="жінка в ресторані"
                    />
                    <S.Play>
                      <svg fill="none" viewBox="0 0 32 32">
                        <path
                          fill="currentColor"
                          d="M10.667 25.333V6.667L25.333 16l-14.666 9.333Z"
                        />
                      </svg>
                    </S.Play>
                    <S.Time>2:34</S.Time>
                  </S.Video>
                  <S.Text active={active === 0}>
                    <p>
                      «entree допомогли зробити нашому закладу крутий, сучасний
                      сайт. Ще нам тепер не доводиться бігати між різними
                      сервісами, адже все зібрано в одному місці у швидкому
                      доступі!»
                    </p>
                    <span>
                      Аліна Рябікова, власниця мережі ресторанів Mimosa
                    </span>
                  </S.Text>
                  <S.Box active={active === 0}>
                    <span>+20%</span>
                    прибутку
                  </S.Box>
                  <S.Image active={active === 0}>
                    <img
                      src="/images/content/reviews-section/bg.jpg"
                      alt="ресторан"
                    />
                    <S.Link href="#">Одне із закладів мережі Mimosa</S.Link>
                  </S.Image>
                </S.Item>
              </SwiperSlide>
              <SwiperSlide>
                <S.Item>
                  <S.Video active={active === 1}>
                    <img
                      src="/images/content/reviews-section/2.jpg"
                      alt="жінка в ресторані"
                    />
                    <S.Play>
                      <svg fill="none" viewBox="0 0 32 32">
                        <path
                          fill="currentColor"
                          d="M10.667 25.333V6.667L25.333 16l-14.666 9.333Z"
                        />
                      </svg>
                    </S.Play>
                    <S.Time>2:34</S.Time>
                  </S.Video>
                  <S.Text active={active === 1}>
                    <p>
                      «entree допомогли зробити нашому закладу крутий, сучасний
                      сайт. Ще нам тепер не доводиться бігати між різними
                      сервісами, адже все зібрано в одному місці у швидкому
                      доступі!»
                    </p>
                    <span>
                      Аліна Рябікова, власниця мережі ресторанів Mimosa
                    </span>
                  </S.Text>
                  <S.Box active={active === 1}>
                    <span>+45%</span>
                    прибутку
                  </S.Box>
                  <S.Image active={active === 1}>
                    <img
                      src="/images/content/reviews-section/bg.jpg"
                      alt="ресторан"
                    />
                    <S.Link href="#">Одне із закладів мережі Mimosa</S.Link>
                  </S.Image>
                </S.Item>
              </SwiperSlide>
              <SwiperSlide>
                <S.Item>
                  <S.Video active={active === 2}>
                    <img
                      src="/images/content/reviews-section/1.avif"
                      alt="жінка в ресторані"
                    />
                    <S.Play>
                      <svg fill="none" viewBox="0 0 32 32">
                        <path
                          fill="currentColor"
                          d="M10.667 25.333V6.667L25.333 16l-14.666 9.333Z"
                        />
                      </svg>
                    </S.Play>
                    <S.Time>2:34</S.Time>
                  </S.Video>
                  <S.Text active={active === 2}>
                    <p>
                      «entree допомогли зробити нашому закладу крутий, сучасний
                      сайт. Ще нам тепер не доводиться бігати між різними
                      сервісами, адже все зібрано в одному місці у швидкому
                      доступі!»
                    </p>
                    <span>
                      Аліна Рябікова, власниця мережі ресторанів Mimosa
                    </span>
                  </S.Text>
                  <S.Box active={active === 2}>
                    <span>+15%</span>
                    прибутку
                  </S.Box>
                  <S.Image active={active === 2}>
                    <img
                      src="/images/content/reviews-section/bg.jpg"
                      alt="ресторан"
                    />
                    <S.Link href="#">Одне із закладів мережі Mimosa</S.Link>
                  </S.Image>
                </S.Item>
              </SwiperSlide>
            </Swiper>
          </S.Inner>

          <S.Pagination>
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              variant={ButtonVariant.GrayIcon}
              size={ButtonSize.iconLg}
              disabled={active === 0}
            >
              <Icon name={Icons.ArrowLeft} />
            </Button>
            <S.Number>{active + 1} із 3</S.Number>
            <Button
              onClick={() => swiperRef.current?.slideNext()}
              variant={ButtonVariant.GrayIcon}
              size={ButtonSize.iconLg}
              disabled={active === 2}
            >
              <Icon name={Icons.ArrowLeft} rotate={180} />
            </Button>
          </S.Pagination>
        </S.Body>
      </div>
    </S.Section>
  );
};

export default Reviews;
