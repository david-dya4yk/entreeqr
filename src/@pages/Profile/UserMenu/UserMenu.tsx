import { FC, useState } from "react";
import * as S from "./UserMenu.styled";
import { useGetCurrentOwnerQuery } from "@/features/auth/hooks/auth.gen";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useUpdateOwnerMutation } from "@/features/owners/hooks/owners.gen";
import { Controller, useForm } from "react-hook-form";
import { defaultValues, FieldType, validationSchema } from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { Input } from "@/components/Input";
import { Button, ButtonVariant } from "@/components/Button";

const UserMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const [update, { loading }] = useUpdateOwnerMutation();
  const { data } = useGetCurrentOwnerQuery();
  const router = useRouter();
  const user = data?.auth.me;

  const displayName = user?.firstName
    ? `${user.firstName} ${user.lastName}`
    : `Пользователь #${user?.id}`;

  const {
    control,
    setValue,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<FieldType>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phone || "",
      email: user?.email,
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  if (!user) {
    router.push("/login");
    return null;
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      await update({
        variables: {
          input: { ...values },
        },
      });
    } catch (e) {}
  });

  return (
    <>
      <S.Wrapper>
        <S.Headline>
          <span>{displayName}</span>
          {user?.email}
        </S.Headline>
        <S.User>
          <Icon name={Icons.User} size={24} />
        </S.User>
        <S.Btn onClick={() => setOpen(true)}>
          <Icon name={Icons.ChevronDown} size={16} rotate={open ? 180 : 0} />
        </S.Btn>
      </S.Wrapper>

      <S.StyledModal onClose={() => setOpen(false)} open={open}>
        <S.Title>Аккаунт</S.Title>
        <form onSubmit={onSubmit}>
          <S.Head>
            <S.Avatar>
              <img src="" alt="" />
            </S.Avatar>
            <S.Fields>
              <Controller
                name="firstName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="firstName"
                    value={value}
                    onChange={onChange}
                    label="Имя"
                    placeholder="Введите имя"
                    error={errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="lastName"
                    value={value}
                    onChange={onChange}
                    label="Фамилия"
                    placeholder="Введите фамилию"
                    error={errors.lastName?.message}
                  />
                )}
              />
            </S.Fields>
          </S.Head>

          <S.Hr />

          <S.Fields>
            <S.Field $error={errors.phone?.message}>
              <Controller
                name="phone"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    inputMode="tel"
                    label="Номер телефона"
                    placeholder="Введите номер телефона"
                    error={errors.phone?.message}
                    disabled
                    id="phone"
                  />
                )}
              />
              <S.Edit onClick={() => {}} variant={ButtonVariant.Gray}>
                <Icon name={Icons.Edit} />
              </S.Edit>
            </S.Field>
            <S.Field $error={errors.email?.message}>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    inputMode="email"
                    label="Электронная почта"
                    placeholder="Введите электронную почту"
                    error={errors.email?.message}
                    id="email"
                    disabled
                  />
                )}
              />
              <S.Edit onClick={() => {}} variant={ButtonVariant.Gray}>
                <Icon name={Icons.Edit} />
              </S.Edit>
            </S.Field>
            <S.Field $error={errors.password?.message}>
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    label="Пароль"
                    placeholder="Введите пароль"
                    error={errors.password?.message}
                    id="password"
                    disabled
                  />
                )}
              />
              <S.Edit onClick={() => {}} variant={ButtonVariant.Gray}>
                <Icon name={Icons.Edit} />
              </S.Edit>
            </S.Field>
          </S.Fields>

          <S.Hr />

          <S.Buttons>
            <Button
              onClick={() => {}}
              disabled={!isDirty}
              variant={ButtonVariant.Gray}
            >
              Отменить
            </Button>
            <Button
              disabled={!isDirty || !isValid || loading}
              variant={ButtonVariant.Primary}
              onClick={() => {}}
              type="submit"
            >
              Сохранить
            </Button>
          </S.Buttons>
        </form>
      </S.StyledModal>
    </>
  );
};

export default UserMenu;
