import { ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import * as S from "./Faq.styled";
import Questions from "./Questions";

const Faq: FC = () => {
  return (
    <S.Section>
      <div className="container">
        <S.Inner>
          <S.Content>
            <S.Title>Популярні запитання</S.Title>
            <S.Subtitle>
              Можливо, відповіді на ваші запитання є у цьому списку чи нашій
              базі знань.
            </S.Subtitle>
            <S.Link
              size={ButtonSize.xl}
              variant={ButtonVariant.Gray}
              onClick={() => {}}
              disabled
            >
              <Icon name={Icons.LifeBounce} />
              База знань
            </S.Link>
          </S.Content>
          <Questions />
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Faq;
