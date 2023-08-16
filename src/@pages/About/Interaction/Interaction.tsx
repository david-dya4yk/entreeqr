import { FC } from "react";
import * as S from "./Interaction.styled";

const Interaction: FC = () => {
  return (
    <S.Section>
      <S.Title className="title">Замовлення за секунду</S.Title>
      <S.Subtitle>
        Ми віримо що в майбутньому всі взаємодії з бізнесом відбуватимуться
        онлайн, адже це зручно.
      </S.Subtitle>
      <S.Inner>
        <div className="container">
          <S.Box>
            <S.Content>
              <img
                src="images/content/interaction/laptop.png"
                alt="комп'ютер"
              />
            </S.Content>
            <S.Image>
              <img
                src="images/content/interaction/reservation.jpg"
                alt="вікно резервації"
              />
            </S.Image>
            <S.Img>
              <img
                src="images/content/interaction/order.jpg"
                alt="вікно бронювання"
              />
            </S.Img>
            <S.Messages>Зайшов на сайт закладу</S.Messages>
            <S.Messages bottom>Швидко замовив страви</S.Messages>
            <S.Iphone>
              <img
                src="images/content/interaction/iphone-about.png"
                alt="телефон"
              />
            </S.Iphone>
          </S.Box>
        </div>
      </S.Inner>
      <S.Wrapper>
        <div className="container">
          <S.Text>
            <p>
              <span>
                За декілька років світ повністю змінився, онлайн методи стали
                головним способом для спілкування та взаємодії бізнесу з
                клієнтами.
              </span>
            </p>
            <p>
              Ми хочемо надати клієнтам і закладам харчування найкращий спосіб
              зв&apos;язку та найпростіший спосіб взаємодії.
            </p>
            <p>
              Ми ґрунтуємось на простоті та клієнтському досвіді, та хочемо
              створити «замовлення за секунду», а інший час відвідувачі нехай
              витрачають на смакування :)
            </p>
          </S.Text>
        </div>
      </S.Wrapper>
    </S.Section>
  );
};

export default Interaction;
