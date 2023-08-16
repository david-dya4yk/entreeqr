import { FC } from "react";
import * as S from "./TakeOrders.styled";

const TakeOrders: FC = () => {
  return (
    <S.Section id='take-orders'>
      <div className="container">
        <S.Wrapper>
          <S.Inner>
            <S.Item>
              <S.Heading>Приймайте замовлення</S.Heading>
            </S.Item>
            <S.Item>
              <S.Text>
                <span>Доставка</span>
                <p>
                  Заробіть більше і будьте на хвилі сучасності. Онлайн
                  замовлення це зручно та комфортно для усіх клієнтів.
                </p>
              </S.Text>
            </S.Item>
            <S.Item>
              <S.Text>
                <span>З собою</span>
                <p>
                  Дозвольте клієнтам забирати замовлення самим. Витрачайте менше
                  сил, але отримуйте більше прибутку та клієнтів.
                </p>
              </S.Text>
            </S.Item>
          </S.Inner>
          <S.Picture>
            <img
              src="images/content/delivery/background-delivery.jpg"
              alt="бариста дає коктель клієнтці"
            />
          </S.Picture>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default TakeOrders;
