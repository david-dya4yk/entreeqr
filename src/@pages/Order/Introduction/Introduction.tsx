import { FC, useRef, useState } from "react";
import * as S from "./Introduction.styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, EffectCoverflow]);

const Introduction: FC = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  return (
    <S.Section id='introduction'>
      <div className="container">
        <S.Wrapper>
          <Swiper
            loop={false}
            slidesPerView={1}
            effect="fade"
            autoplay={{ disableOnInteraction: false, delay: 3000 }}
            onSlideChange={(swiper) => {
              setActive(swiper.activeIndex);
            }}
            autoHeight
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, EffectFade, Pagination]}
          >
            <SwiperSlide>
              <div>
                <S.Item className="swiper-slide">
                  <S.Subtitle>Як це працює</S.Subtitle>
                  <S.Title>Клієнт сканує QR‑код</S.Title>
                  <S.Text className="text">
                    <p>
                      Відвідувачі можуть відсканувати QR-код з будь-якого
                      смартфона і за кілька секунд потрапити на сторінку
                      актуального меню
                    </p>
                  </S.Text>
                  <S.Image>
                    <img
                      src="images/content/order/introduction/iphone-peculiarity.png"
                      alt="телефон"
                    />
                  </S.Image>
                </S.Item>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <S.Item className="swiper-slide">
                  <S.Subtitle>Як це працює</S.Subtitle>
                  <S.Title>Клієнт обирає страви за смаком</S.Title>
                  <S.Text className="text">
                    <p>
                      На сторінці, що відкрилася, клієнти можуть вибрати
                      вподобані страви і створити замовлення. За необхідності
                      можна робити дозамовлення час від часу, а оплатити все
                      разом наприкінці відвідування.
                    </p>
                    <p>
                      Якщо будуть питання чи потрібна допомога, можна викликати
                      офіціанта сповіщенням.
                    </p>
                  </S.Text>
                  <S.Image>
                    <img
                      src="images/content/order/introduction/iphone-peculiarity.png"
                      alt="телефон"
                    />
                  </S.Image>
                </S.Item>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <S.Item className="swiper-slide">
                  <S.Subtitle>Як це працює</S.Subtitle>
                  <S.Title>Оплата замовлення та чайові</S.Title>
                  <S.Text className="text">
                    <p>
                      Коли клієнти будуть готові, вони зможуть оплатити
                      замовлення онлайн, за допомогою карти, Google Pay або
                      Apple Pay.
                    </p>
                    <p>
                      Також гості зможуть залишити чайові співробітникам.
                      Будь-яку зручну суму.
                    </p>
                  </S.Text>
                  <S.Image>
                    <img
                      src="images/content/order/introduction/iphone-peculiarity.png"
                      alt="телефон"
                    />
                  </S.Image>
                </S.Item>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <S.Item className="swiper-slide">
                  <S.Subtitle>Як це працює</S.Subtitle>
                  <S.Title>Відгук</S.Title>
                  <S.Text className="text">
                    <p>
                      Наприкінці замовлення, після оплати, клієнти зможуть
                      розповісти про свої враження про відвідування закладу і
                      передати їх вам у режимі реального часу.
                    </p>
                  </S.Text>
                  <S.Image>
                    <img
                      src="images/content/order/introduction/iphone-peculiarity.png"
                      alt="телефон"
                    />
                  </S.Image>
                </S.Item>
              </div>
            </SwiperSlide>
          </Swiper>
          <S.Pagination>
            <S.Dot
              type="button"
              onClick={() => swiperRef.current?.slideTo(0)}
              className={active === 0 ? "active" : ""}
            >
              <S.Number>01</S.Number>
            </S.Dot>
            <S.Dot
              type="button"
              onClick={() => swiperRef.current?.slideTo(1)}
              className={active === 1 ? "active" : ""}
            >
              <S.Number>02</S.Number>
            </S.Dot>
            <S.Dot
              type="button"
              onClick={() => swiperRef.current?.slideTo(2)}
              className={active === 2 ? "active" : ""}
            >
              <S.Number>03</S.Number>
            </S.Dot>
            <S.Dot
              type="button"
              onClick={() => swiperRef.current?.slideTo(3)}
              className={active === 3 ? "active" : ""}
            >
              <S.Number>04</S.Number>
            </S.Dot>
          </S.Pagination>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Introduction;
