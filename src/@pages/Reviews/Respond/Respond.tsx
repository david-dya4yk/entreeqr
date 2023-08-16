import { FC } from "react";
import * as S from "./Respond.styled";

const Respond: FC = () => {
  return (
    <S.Section>
      <h2 className="sr-hide">відгук клієнта</h2>
      <div className="container">
        <S.Inner>
          <S.Images>
            <S.Image>
              <img src="images/content/respond/rest-logo.jpg" alt="логотип" />
            </S.Image>
            <S.Image>
              <img src="images/content/respond/user.jpg" alt="людина" />
            </S.Image>
          </S.Images>
          <S.Text>
            <p>
              «Завдяки відгукам від entree, ми стали отримувати понад 100
              відгуків на місяць про наш ресторан. Тепер реагувати на бажання
              клієнтів, спілкуватися з ними стало набагато простіше»
            </p>
          </S.Text>
          <S.Name>
            <span>Аліна Рябікова</span>
            власниця ресторану Mimosa
          </S.Name>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Respond;
