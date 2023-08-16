import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Input } from "@/components/Input";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC } from "react";
import * as S from "./Forgot.styled";

const ForgotPage: FC = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <div className="container container--small">
        <S.Form>
          <S.Icon>
            <Icon name={Icons.Key} size={21} />
          </S.Icon>
          <S.Title>Забыли пароль?</S.Title>
          <S.Text className="text">
            <p>Не переживайте, мы вам поможем.</p>
          </S.Text>
          <S.Label>
            <Input
              label="Электронная почта"
              type="email"
              inputMode="email"
              placeholder="Введите вашу почту"
              onChange={() => {}}
              id="email"
              value=""
              required
            />
          </S.Label>
          <S.Buttons>
            <Button
              onClick={() => {}}
              variant={ButtonVariant.Primary}
              size={ButtonSize.md}
              type="submit"
            >
              Восстановить пароль
            </Button>
            <Button
              onClick={() => router.push("/login")}
              variant={ButtonVariant.White}
              size={ButtonSize.md}
            >
              <Icon name={Icons.ArrowLeft} /> Вернуться к авторизации
            </Button>
          </S.Buttons>
        </S.Form>
      </div>
    </S.Wrapper>
  );
};

export default ForgotPage;
