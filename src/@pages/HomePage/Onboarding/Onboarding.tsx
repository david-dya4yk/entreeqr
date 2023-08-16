import { ButtonSize, ButtonVariant } from "@/components/Button";
import { useRouter } from "next/router";
import { FC } from "react";
import * as S from "./Onboarding.styled";

const Onboarding: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Inner>
          <S.Item>
            <S.Headline>Поспілкуємось?</S.Headline>

            <S.Subtitle>
              <span>Зв&apos;яжемося протягом 24 годин.</span>
              Менеджер відповість на ваші запитання, покаже демо-версію продукту
              та допоможе з першими кроками.
            </S.Subtitle>
            <S.Form>
              <S.Label>
                <S.Input type="number" />
              </S.Label>
              <S.Label>
                <S.Input />
              </S.Label>

              <S.Link
                size={ButtonSize.xxl}
                variant={ButtonVariant.Primary}
                onClick={() => {}}
                disabled
              >
                Залишити заявку
              </S.Link>
            </S.Form>
          </S.Item>
          <S.Item>
            <S.Icon>
              <svg fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.5 16.667c1.946-2.065 4.59-3.334 7.5-3.334s5.553 1.27 7.5 3.334M13.75 6.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </S.Icon>
            <S.Title>Або почніть самостійно</S.Title>
            <S.Text>
              <p>
                Створіть обліковий запис і почніть роботу з нашою системою. Ми
                завжди допоможемо, якщо у вас виникнуть питання.
              </p>
            </S.Text>
            <S.Link
              size={ButtonSize.xxl}
              variant={ButtonVariant.White}
              onClick={() => router.push("/registration")}
            >
              Створити профіль
            </S.Link>
          </S.Item>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Onboarding;
