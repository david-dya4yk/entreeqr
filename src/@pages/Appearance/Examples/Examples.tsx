import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC, useRef, useState } from "react";
import { Navigation } from "swiper";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./Examples.styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";

SwiperCore.use([Pagination]);

const Examples: FC = () => {
  const swiperRef = useRef<SwiperCore>();
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Title>Створіть ідеальний сайт для вашого закладу</S.Title>

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
            onClick={() => {}}
            disabled
          >
            Детальніше
            <Icon name={Icons.ArrowUp} rotate={180} size={16} />
          </Button>
        </S.Links>
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
            300: {
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            432: {
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerGroup: 2,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/1.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/2.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/3.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/4.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/5.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
          <SwiperSlide className="my-slide">
            <S.Item>
              <img src="images/content/appearance/6.jpg" alt="" />
            </S.Item>
          </SwiperSlide>
        </Swiper>
      </div>
    </S.Section>
  );
};

export default Examples;
