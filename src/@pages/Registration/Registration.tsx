import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  useGetCurrentOwnerQuery,
  useRegisterOwnerMutation,
} from "@/features/auth/hooks/auth.gen";
import { FC, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues, FieldType, validationSchema } from "./constants";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Registration.styled";
import { useRouter } from "next/router";
import { InputSize } from "@liaugust/ui-library";
import { Message } from "./Message";

const RegistrationPage: FC = () => {
  const firstRender = useRef(true);
  const [sent, setSent] = useState(false);
  const { data, loading: userLoading } = useGetCurrentOwnerQuery();
  const [register, { loading }] = useRegisterOwnerMutation();
  const router = useRouter();

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<FieldType>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (values) => {
    if (
      values.email !== "ivan.liaugust@gmail.com" ||
      values.password !== "qwerty12345"
    ) {
      return;
    }
    await register({ variables: { input: values } });
    setSent(true);
  });

  useEffect(() => {
    if (firstRender.current && !userLoading) {
      firstRender.current = false;
    }
  }, [firstRender, userLoading]);

  if (firstRender.current && userLoading) {
    return null;
  }

  if ((data?.auth.me && !data?.auth.me.emailVerified) || sent) {
    return <Message />;
  }

  if (data?.auth.me.emailVerified) {
    router.push("/profile");
    return null;
  }

  return (
    <S.Body>
      <Header />
      <S.Section>
        <div className="container container--medium">
          <S.Wrapper>
            <S.Image>
              <img
                src="images/content/registration/registration.jpg"
                alt="дві дівчини сидять в кафе"
              />
            </S.Image>
            <S.Right>
              <S.Form onSubmit={onSubmit}>
                <S.Title>Регистрация</S.Title>
                <S.Fields>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        label="Электронная почта"
                        placeholder="Введите почту"
                        inputMode="email"
                        maxLength={100}
                        onChange={onChange}
                        error={errors.email?.message}
                        value={value}
                        minLength={3}
                        size={InputSize.m}
                        type="email"
                        id="email"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        label="Номер телефона"
                        placeholder="+380 (00) 000-00-00"
                        inputMode="tel"
                        maxLength={20}
                        minLength={10}
                        onChange={onChange}
                        value={value}
                        size={InputSize.m}
                        type="tel"
                        id="tel"
                        error={errors.phone?.message}
                        required
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        label="Придумайте пароль"
                        placeholder="Введите пароль"
                        inputMode="text"
                        maxLength={50}
                        minLength={10}
                        onChange={onChange}
                        error={errors.password?.message}
                        size={InputSize.m}
                        value={value}
                        type="password"
                        id="password"
                        hint="Не менее 8 символов"
                        required
                      />
                    )}
                  />
                </S.Fields>

                <S.Buttons>
                  <Button
                    onClick={() => {}}
                    variant={ButtonVariant.Primary}
                    size={ButtonSize.lg}
                    disabled={!isDirty || !isValid || loading}
                    type="submit"
                  >
                    Продолжить
                  </Button>
                  <Button
                    onClick={() => router.push("/login")}
                    variant={ButtonVariant.Gray}
                    size={ButtonSize.lg}
                  >
                    Уже есть аккаунт, войти
                  </Button>
                </S.Buttons>

                <S.Info>
                  Если возникли проблемы со входом на платформу,{" "}
                  <a href="#">напишите нам.</a>
                </S.Info>
              </S.Form>
            </S.Right>
          </S.Wrapper>
        </div>
      </S.Section>
      <Footer />
    </S.Body>
  );
};

export default RegistrationPage;
