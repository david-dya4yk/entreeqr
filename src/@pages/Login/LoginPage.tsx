import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  useGetCurrentOwnerQuery,
  useLoginOwnerMutation,
} from "@/features/auth/hooks/auth.gen";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues, FieldType, validationSchema } from "./constants";
import * as S from "./LoginPage.styled";
import { Message } from "./Message";
import {
  OWNER_ACCESS_TOKEN,
  createLink,
} from "@/app/providers/apollo.provider";
import { useCookie } from "react-use";
import { useApolloClient } from "@apollo/client";
import { useOwnerContext } from "@/app/hooks/use-owner";

const LoginPage: FC = () => {
  const client = useApolloClient();
  const updateToken = useCookie(OWNER_ACCESS_TOKEN)[1];
  const firstRender = useRef(true);
  const [login, { loading }] = useLoginOwnerMutation();
  const router = useRouter();
  const { refetch, owner, loading: userLoading } = useOwnerContext();

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
    try {
      const { data } = await login({ variables: { input: values } });
      const token = data?.auth.loginOwner.accessToken || "";
      updateToken(token);
      await client.clearStore();
      client.setLink(createLink(undefined, token));
      await refetch();
    } catch (error) {}
  });

  useEffect(() => {
    if (firstRender.current && !userLoading) {
      firstRender.current = false;
    }
  }, [firstRender, userLoading]);

  if (firstRender.current && userLoading) {
    return null;
  }

  if (owner && !owner.emailVerified) {
    return <Message />;
  }

  if (owner) {
    router.push("/profile");
  }

  return (
    <S.Section>
      <div className="container container--small">
        <S.Wrapper>
          <S.Top>
            <S.Logo>
              <svg
                width="124"
                height="28"
                viewBox="0 0 124 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_340_5735"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="124"
                  height="28"
                >
                  <path d="M124 0H0V28H124V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_340_5735)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2794 27.9997C11.0476 27.9997 9.14715 27.6786 7.57798 27.0363C6.0088 26.4262 4.73602 25.5432 3.75964 24.3871C2.74839 23.2311 2.01611 21.8341 1.56279 20.1964C1.10948 18.5586 0.882812 16.7121 0.882812 14.6569V12.9229H27.4439C27.4508 13.177 27.4542 13.4339 27.4542 13.6936C27.4542 16.1341 27.123 18.2535 26.4605 20.0518C25.7631 21.8501 24.8041 23.3274 23.5836 24.4834C22.3283 25.6716 20.8288 26.5547 19.0853 27.1327C17.3418 27.7107 15.4064 27.9997 13.2794 27.9997ZM6.9503 16.5356H20.916C20.916 18.3981 20.2535 19.9395 18.9284 21.1598C17.5684 22.38 15.7726 22.9902 13.5408 22.9902C11.4486 22.9902 9.82711 22.4764 8.6764 21.4488C7.52567 20.4212 6.9503 18.7834 6.9503 16.5356Z"
                    fill="#444CE7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3136 10.7692H11.0352L13.5059 0H21.255L16.3136 10.7692Z"
                    fill="#444CE7"
                  />
                  <path
                    d="M46.517 7.41992C48.9923 7.41992 50.7779 8.11059 51.8738 9.49192C52.9697 10.8733 53.5177 12.8146 53.5177 15.3159V16.3239H42.6057C42.6057 17.0333 42.6718 17.7053 42.8041 18.3399C42.9364 18.9559 43.1442 19.4973 43.4277 19.9639C43.73 20.4119 44.1079 20.7759 44.5614 21.0559C45.0337 21.3173 45.6006 21.4479 46.2619 21.4479C47.1689 21.4479 47.8964 21.2426 48.4443 20.8319C49.0112 20.4213 49.4269 19.8706 49.6914 19.1799L53.1776 19.9639C52.6674 21.6066 51.7793 22.8199 50.5134 23.6039C49.2663 24.3879 47.8208 24.7799 46.1769 24.7799C43.7583 24.7799 41.8877 23.9959 40.565 22.4279C39.2613 20.8599 38.6094 18.6386 38.6094 15.7639C38.6094 13.0199 39.299 10.9479 40.6784 9.54792C42.0577 8.12926 44.0039 7.41992 46.517 7.41992ZM42.6624 14.0839H49.7481C49.7481 11.8626 48.6238 10.7519 46.3753 10.7519C45.8085 10.7519 45.2983 10.8359 44.8448 11.0039C44.3913 11.1719 44.0039 11.4053 43.6827 11.7039C43.3615 12.0026 43.1064 12.3573 42.9175 12.7679C42.7474 13.1599 42.6624 13.5986 42.6624 14.0839Z"
                    fill="black"
                  />
                  <path
                    d="M59.3061 7.67162L58.8243 10.9756H59.2778C59.5045 10.4343 59.8068 9.93962 60.1847 9.49162C60.5815 9.04362 61.0161 8.66095 61.4885 8.34362C61.9797 8.00762 62.5089 7.75562 63.0757 7.58762C63.6614 7.40095 64.2472 7.30762 64.833 7.30762C66.2878 7.30762 67.4027 7.80228 68.1774 8.79162C68.971 9.76225 69.3678 11.097 69.3678 12.7956V24.4996H65.3998V15.0356C65.3998 13.561 65.2014 12.4876 64.8046 11.8156C64.4267 11.125 63.7465 10.7796 62.7639 10.7796C62.2538 10.7796 61.7719 10.8916 61.3185 11.1156C60.865 11.3396 60.4682 11.685 60.1281 12.1516C59.7879 12.6183 59.5139 13.197 59.3061 13.8876C59.1171 14.5783 59.0227 15.3903 59.0227 16.3236V24.4996H55.0547V7.67162H59.3061Z"
                    fill="black"
                  />
                  <path
                    d="M72.3864 7.7V3.5H76.3544V7.7H80.1807V11.228C79.9351 11.2094 79.6328 11.1906 79.2737 11.172C78.9148 11.1534 78.5558 11.144 78.1967 11.144C77.8377 11.1254 77.4882 11.1066 77.148 11.088C76.8269 11.0694 76.5623 11.0506 76.3544 11.032V18.116C76.3544 19.2174 76.5056 19.992 76.8079 20.44C77.1292 20.888 77.6488 21.112 78.3668 21.112C78.6692 21.112 79.0565 21.0654 79.5288 20.972L80.0107 24.556C79.5761 24.6494 79.1604 24.7146 78.7636 24.752C78.3668 24.808 77.9795 24.836 77.6015 24.836C76.8268 24.836 76.1183 24.7334 75.4758 24.528C74.8334 24.3414 74.2854 24.0426 73.8319 23.632C73.3784 23.2214 73.0195 22.708 72.7549 22.092C72.5093 21.4574 72.3864 20.7106 72.3864 19.852V11.032C72.2731 11.0506 72.1125 11.0694 71.9046 11.088C71.7157 11.1066 71.5173 11.1254 71.3094 11.144C71.1015 11.1626 70.9032 11.1814 70.7142 11.2C70.5442 11.2186 70.4024 11.2374 70.2891 11.256V7.7H72.3864Z"
                    fill="black"
                  />
                  <path
                    d="M86.0171 7.69965L85.5352 10.7796H86.0171C86.2249 10.257 86.5462 9.78101 86.9807 9.35165C87.4153 8.90365 87.9255 8.53031 88.5112 8.23165C89.0972 7.91431 89.7296 7.69031 90.4098 7.55965C91.1096 7.42898 91.827 7.41031 92.5639 7.50365L91.5436 12.1516C90.92 11.9836 90.3346 11.8996 89.7863 11.8996C88.5959 11.8996 87.6232 12.273 86.8673 13.0196C86.1116 13.7476 85.7336 14.821 85.7336 16.2396V24.4996H81.7656V7.69965H86.0171Z"
                    fill="black"
                  />
                  <path
                    d="M100.244 7.41992C102.719 7.41992 104.505 8.11059 105.6 9.49192C106.696 10.8733 107.244 12.8146 107.244 15.3159V16.3239H96.3323C96.3323 17.0333 96.3987 17.7053 96.5307 18.3399C96.6627 18.9559 96.8708 19.4973 97.1542 19.9639C97.4563 20.4119 97.8345 20.7759 98.2879 21.0559C98.76 21.3173 99.3269 21.4479 99.9885 21.4479C100.895 21.4479 101.623 21.2426 102.171 20.8319C102.738 20.4213 103.153 19.8706 103.418 19.1799L106.904 19.9639C106.394 21.6066 105.506 22.8199 104.24 23.6039C102.993 24.3879 101.547 24.7799 99.9035 24.7799C97.4846 24.7799 95.614 23.9959 94.2916 22.4279C92.9878 20.8599 92.3359 18.6386 92.3359 15.7639C92.3359 13.0199 93.0259 10.9479 94.405 9.54792C95.784 8.12926 97.7308 7.41992 100.244 7.41992ZM96.389 14.0839H103.475C103.475 11.8626 102.351 10.7519 100.102 10.7519C99.535 10.7519 99.0249 10.8359 98.5714 11.0039C98.1179 11.1719 97.7308 11.4053 97.4093 11.7039C97.0878 12.0026 96.8327 12.3573 96.6441 12.7679C96.474 13.1599 96.389 13.5986 96.389 14.0839Z"
                    fill="black"
                  />
                  <path
                    d="M116.24 7.41992C118.715 7.41992 120.501 8.11059 121.596 9.49192C122.693 10.8733 123.24 12.8146 123.24 15.3159V16.3239H112.328C112.328 17.0333 112.395 17.7053 112.527 18.3399C112.66 18.9559 112.867 19.4973 113.15 19.9639C113.453 20.4119 113.831 20.7759 114.284 21.0559C114.757 21.3173 115.324 21.4479 115.985 21.4479C116.892 21.4479 117.62 21.2426 118.167 20.8319C118.734 20.4213 119.15 19.8706 119.414 19.1799L122.9 19.9639C122.39 21.6066 121.503 22.8199 120.236 23.6039C118.989 24.3879 117.543 24.7799 115.9 24.7799C113.482 24.7799 111.611 23.9959 110.288 22.4279C108.984 20.8599 108.332 18.6386 108.332 15.7639C108.332 13.0199 109.022 10.9479 110.401 9.54792C111.781 8.12926 113.727 7.41992 116.24 7.41992ZM112.385 14.0839H119.471C119.471 11.8626 118.347 10.7519 116.098 10.7519C115.531 10.7519 115.021 10.8359 114.567 11.0039C114.114 11.1719 113.727 11.4053 113.405 11.7039C113.085 12.0026 112.83 12.3573 112.64 12.7679C112.47 13.1599 112.385 13.5986 112.385 14.0839Z"
                    fill="black"
                  />
                </g>
              </svg>
              <svg fill="none" viewBox="0 0 48 50">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22.432 49.999c-3.937 0-7.29-.574-10.058-1.72-2.768-1.09-5.014-2.667-6.736-4.731-1.784-2.065-3.076-4.56-3.875-7.484-.8-2.924-1.2-6.222-1.2-9.892v-3.096H47.42c.012.453.018.912.018 1.376 0 4.358-.584 8.143-1.753 11.354-1.23 3.211-2.922 5.85-5.075 7.914-2.215 2.121-4.86 3.698-7.936 4.73C29.6 49.483 26.184 50 22.432 50ZM11.267 29.527h24.637c0 3.326-1.169 6.078-3.507 8.257-2.399 2.18-5.567 3.269-9.504 3.269-3.69 0-6.551-.917-8.581-2.752-2.03-1.836-3.045-4.76-3.045-8.774ZM27.782 19.23h-9.311L22.829 0H36.5l-8.717 19.23Z"
                  clipRule="evenodd"
                />
              </svg>
            </S.Logo>
            <Button onClick={() => {}} size={ButtonSize.sm}>
              Українська
            </Button>
          </S.Top>
          <S.Inner onSubmit={onSubmit}>
            <S.Title>Войти в систему entree</S.Title>
            <S.Subtitle>Пожалуйста, введите свои данные.</S.Subtitle>
            <S.Labels>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="email"
                    type="email"
                    value={value}
                    inputMode="email"
                    onChange={onChange}
                    label="Электронная почта"
                    placeholder="Введите почту"
                    error={errors.email?.message}
                    required
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="password"
                    type="password"
                    label="Пароль"
                    value={value}
                    onChange={onChange}
                    placeholder="Введите пароль"
                    maxLength={30}
                    error={errors.password?.message}
                    required
                  />
                )}
              />
            </S.Labels>
            <S.StyledLink href="/forgot">Не помню</S.StyledLink>
            <S.Buttons>
              <Button
                onClick={() => {}}
                variant={ButtonVariant.Primary}
                size={ButtonSize.lg}
                disabled={!isDirty || !isValid || loading}
                type="submit"
              >
                Продолжить
                <Icon name={Icons.ArrowLeft} rotate={180} />
              </Button>
              <Button
                onClick={() => router.push("/registration")}
                variant={ButtonVariant.Gray}
                size={ButtonSize.lg}
              >
                Создать аккаунт
              </Button>
            </S.Buttons>
            <S.Info>
              Если возникли проблемы со входом на платформу,{" "}
              <a href="#">напишите нам.</a>
            </S.Info>
          </S.Inner>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default LoginPage;
