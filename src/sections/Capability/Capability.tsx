import Link, { LinkSize, LinkVariant } from "@/components/Link/Link";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC, useRef, useState } from "react";
import * as S from "./Capability.styled";
import { Navigation } from "swiper";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

interface CapabilityProps {
  hide?: boolean;
  items: {
    id: number;
    title: string;
    text: string;
    to: string;
  }[];
}

const Capability: FC<CapabilityProps> = ({ hide, items }) => {
  const swiperRef = useRef<SwiperCore>();
  const [active, setActive] = useState(0);

  return (
    <S.Section>
      <div className="container">
        {!hide && (
          <S.Wrapper>
            <S.Box>
              <S.Headline>Слухаємо кожного</S.Headline>
              <S.Subtitle>
                Власники закладів, підключених до entree, можуть запропонувати
                свої ідеї та покращення для сервісу. Ми відповідаємо на кожну
                пропозицію. А найпопулярніші та важливі ідеї — реалізуємо.
              </S.Subtitle>
              <Link
                size={LinkSize.primaryXl}
                variant={LinkVariant.Primary}
                href=""
                disabled
              >
                Запропонувати ідею
                <Icon name={Icons.ArrowUp} rotate={90} />
              </Link>
            </S.Box>
          </S.Wrapper>
        )}
        <S.Title className="title">Знайомтесь з усіма можливостями</S.Title>
        <Swiper
          loop={false}
          slidesPerView={4}
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
              slidesPerView: 1.57,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            750: {
              enabled: false,
              spaceBetween: 30,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <S.Item>
                <S.Icon>
                  <svg fill="none" viewBox="0 0 28 28">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M8.834 24.5a11.92 11.92 0 0 1 5.167-1.167c1.855 0 3.609.42 5.166 1.167M7.934 19.833h12.133c1.96 0 2.94 0 3.69-.381a3.5 3.5 0 0 0 1.529-1.53c.381-.748.381-1.729.381-3.689V9.1c0-1.96 0-2.94-.381-3.689a3.5 3.5 0 0 0-1.53-1.53c-.748-.381-1.729-.381-3.689-.381H7.934c-1.96 0-2.94 0-3.689.381a3.5 3.5 0 0 0-1.53 1.53c-.381.749-.381 1.729-.381 3.689v5.133c0 1.96 0 2.94.381 3.69a3.5 3.5 0 0 0 1.53 1.529c.749.381 1.729.381 3.689.381Z"
                    />
                  </svg>
                </S.Icon>
                <S.Name>{item.title}</S.Name>
                <S.Text className="text">
                  <p>{item.text}</p>
                </S.Text>
                <Link
                  size={LinkSize.primaryXl}
                  variant={LinkVariant.Primary}
                  href={item.to}
                >
                  Детальніше
                  <Icon name={Icons.ArrowUp} rotate={90} />
                </Link>
              </S.Item>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.Pagination className="swiper-pagination"></S.Pagination>
      </div>
    </S.Section>
  );
};

export default Capability;
