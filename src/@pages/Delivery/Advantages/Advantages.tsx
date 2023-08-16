import { FC, ReactElement } from "react";
import * as S from "./Advantages.styled";

interface AdvantagesProps {
  items: {
    title: ReactElement;
    text: string;
  }[];
}

const Advantages: FC<AdvantagesProps> = ({ items }) => {
  return (
    <S.Section>
      <div className="container">
        <S.Title className="title">Реальні результати</S.Title>
        <S.Inner>
          {items.map(({ title, text }, index) => (
            <S.Item key={index}>
              <S.Headline>{title}</S.Headline>
              <S.Text className="text">
                <p>{text}</p>
              </S.Text>
            </S.Item>
          ))}
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Advantages;
