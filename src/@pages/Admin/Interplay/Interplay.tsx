import { FC } from "react";
import * as S from "./Interplay.styled";

const Interplay: FC = () => {
  return (
    <S.Section>
      <div className="container">
        <S.Wrapper>
          <S.Title>Взаємодійте з клієнтами</S.Title>
          <S.Text>
            <p>
              Ми надаємо великі налаштування лояльності з клієнтами. Додавайте
              промокоди, новини та промо-банери — у майбутньому кількість
              функцій взаємодії поповниться.
            </p>
          </S.Text>
        </S.Wrapper>
        <S.Image>
          <img
            src="images/content/admin/bg-interplay.jpg"
            alt="2 дівчини в кафе"
          />
        </S.Image>
      </div>
    </S.Section>
  );
};

export default Interplay;
