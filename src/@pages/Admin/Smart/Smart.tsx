import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { FC } from "react";
import * as S from "./Smart.styled";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";

const Smart: FC = () => {
  const router = useRouter();

  return (
    <S.Section>
      <div className="container">
        <S.Top>
          <S.Title>Створіть смарт‑меню</S.Title>
          <S.Links>
            <Button
              size={ButtonSize.xxl}
              variant={ButtonVariant.Primary}
              onClick={() => router.push("/registration")}
            >
              Спробувати
            </Button>
            <Button
              size={ButtonSize.xxl}
              variant={ButtonVariant.Gray}
              onClick={() => {}}
              disabled
            >
              Консультація
              <Icon name={Icons.ArrowLeft} rotate={180} size={16} />
            </Button>
          </S.Links>
        </S.Top>
        <S.Wrapper>
          <S.Images>
            <S.Image>
              <img src="images/content/admin/ipad-admin.png" alt="планшет" />
            </S.Image>
          </S.Images>
          <S.Inner>
            <S.Item>
              <S.Headline>
                <S.Icon>
                  <svg fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.4 3H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3Zm11 0h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 10 15.04 10 15.6 10h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3Zm0 11h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 14.76 14 15.04 14 15.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 21 15.04 21 15.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 14 19.96 14 19.4 14Zm-11 0H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.76 3 15.04 3 15.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.24 10 19.96 10 19.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14Z"
                    />
                  </svg>
                </S.Icon>
                Налаштування позицій
              </S.Headline>
              <S.Text className="text">
                <p>
                  Налаштовуйте страви інформативно, імпортуйте меню, додавайте
                  фото, редагуйте доступність страви або приховуйте її без
                  видалення зі списку
                </p>
              </S.Text>
            </S.Item>
            <S.Item>
              <S.Headline>
                <S.Icon>
                  <svg fill="none" viewBox="0 0 28 28">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.5 3.5v11.9c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53C6.16 21 7.14 21 9.1 21h8.4m0 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0ZM3.5 9.333h14m0 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"
                    />
                  </svg>
                </S.Icon>
                Модифікатори та добавки
              </S.Headline>
              <S.Text className="text">
                <p>
                  Скористайтеся інструментами кастомізації страв: ще один напій,
                  подвійний сир або більше салямі...
                </p>
              </S.Text>
            </S.Item>
            <S.Item>
              <S.Headline>
                <S.Icon>
                  <svg fill="none" viewBox="0 0 28 28">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.084 13.417h-1.167l-1.75 3.5-2.333-7-1.75 3.5H9.917m4.075-7.425c-2.332-2.727-6.222-3.46-9.145-.964-2.922 2.497-3.334 6.673-1.039 9.626 1.734 2.23 6.659 6.709 8.965 8.767.424.378.636.567.884.642.215.064.455.064.67 0 .249-.075.46-.264.884-.642 2.307-2.058 7.231-6.537 8.965-8.767 2.295-2.954 1.934-7.155-1.039-9.626-2.973-2.47-6.812-1.763-9.145.964Z"
                    />
                  </svg>
                </S.Icon>
                Алергени та лейбли
              </S.Headline>
              <S.Text className="text">
                <p>
                  Додайте до страви алергени або спеціальні лейбли, які
                  допоможуть клієнтам орієнтуватися в меню
                </p>
              </S.Text>
            </S.Item>
          </S.Inner>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};

export default Smart;
