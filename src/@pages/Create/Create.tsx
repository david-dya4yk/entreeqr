import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import * as S from "./Create.styled";
import { Input } from "@/components/Input";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  useCreateCompanyMutation,
  useGetOwnerCompaniesQuery,
} from "@/features/company/hooks/company.gen";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import {
  currencies,
  defaultValues,
  FieldType,
  languages,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { Uploader } from "./Uploader";
import { Select } from "@/components/Select";
import { InputSize } from "@/components/Input/Input";
import { useGetCurrentOwnerQuery } from "@/features/auth/hooks/auth.gen";

const CreatePage: FC = () => {
  const { refetch } = useGetOwnerCompaniesQuery();
  const { data, loading: userLoading } = useGetCurrentOwnerQuery();
  const [create, { loading }] = useCreateCompanyMutation();
  const router = useRouter();

  const {
    control,
    setValue,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<FieldType>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  if (userLoading) {
    return null;
  }

  if (!data?.auth.me) {
    router.push("/login");
    return null;
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      await create({
        variables: {
          input: { ...values, ownerId: data.auth.me.id, currency: 980 },
        },
      });

      await refetch();

      router.push("/profile");
    } catch (e) {}
  });

  return (
    <S.Body>
      <Header />
      <S.Section>
        <div className="container container--medium">
          <S.Wrapper>
            <S.Image>
              <img
                src="images/content/registration/registration.jpg"
                alt="гарячі страви на столі"
              />
            </S.Image>
            <S.Right>
              <S.Form onSubmit={onSubmit}>
                <S.Title>Ваше заведение</S.Title>
                <Uploader control={control} setValue={setValue} />
                <S.Fields>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        onChange={onChange}
                        label="Название заведения"
                        value={value}
                        placeholder="Например, Ла паста"
                        error={errors.name?.message}
                        id="name"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="domain"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        onChange={onChange}
                        label="Ваш адрес в entree"
                        value={value}
                        error={errors.domain?.message}
                        placeholder="example.entreeqr.com"
                        id="domain"
                        required
                      />
                    )}
                  />
                  <S.Labels>
                    <Controller
                      name="language"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Select
                          onChange={(option) => onChange(option.id)}
                          options={languages}
                          value={
                            languages.find((l) => l.id === value) ??
                            languages[0]
                          }
                          error={errors?.language?.message}
                          size={InputSize.xs}
                          id="language"
                          label="Язык"
                          required
                        />
                      )}
                    />
                    <Select
                      onChange={() => {}}
                      options={currencies}
                      value={currencies[0]}
                      error={errors?.currency?.message}
                      size={InputSize.xs}
                      id="currency"
                      label="Валюта"
                      disabled
                      required
                    />
                  </S.Labels>
                </S.Fields>
                <S.Buttons>
                  <Button
                    type="submit"
                    onClick={() => {}}
                    size={ButtonSize.xl}
                    variant={ButtonVariant.Primary}
                    disabled={!isValid || !isDirty || loading || userLoading}
                  >
                    Создать заведение
                    <Icon name={Icons.ArrowLeft} rotate={180} />
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

export default CreatePage;
