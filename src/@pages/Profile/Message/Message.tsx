import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC } from "react";
import * as S from "./Message.styled";

const Message: FC = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Inner>
        <S.Icon>
          <Icon name={Icons.Mail} size={28} />
        </S.Icon>
        <S.Subtitle>Проверьте электронную почту</S.Subtitle>
        <S.Text className="text">
          <p>
            Мы отправили вам письмо с подтверждением регистрации. Перейдите по
            ссылке из письма.
          </p>
        </S.Text>
        <S.Buttons>
          <Button
            onClick={() => {}}
            variant={ButtonVariant.Primary}
            size={ButtonSize.xl}
          >
            Вернуться к регистрации
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant={ButtonVariant.White}
            size={ButtonSize.xl}
          >
            <Icon name={Icons.ArrowLeft} />
            На главную
          </Button>
        </S.Buttons>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Message;
