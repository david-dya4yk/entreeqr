import { FC } from "react";
import * as S from "./Remote.styled";

const Remote: FC = () => {
  return (
    <S.Section>
      <div className="container">
        <S.Wrapper>
          <S.Image>
            <img
              src="images/content/admin/remote.jpg"
              alt="дві людини сидять в кафе"
            />
          </S.Image>
          <S.Content>
            <S.Title>Керуйте завжди і всюди</S.Title>
            <S.Text>
              <p>
                Панель управління завжди буде у вас під рукою — налаштовуйте і
                керуйте вашим закладом як з ноутбука або комп&apos;ютера, так і
                мобільного телефону
              </p>
            </S.Text>
            <S.Img>
              <img src="images/content/admin/remote2.jpg" alt="" />
            </S.Img>
          </S.Content>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Remote;
