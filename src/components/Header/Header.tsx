import { useOwnerContext } from "@/app/hooks/use-owner";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Button, ButtonSize, ButtonVariant } from "../Button";
import { Head } from "../Head";
import { Link } from "../Link";
import { LinkSize, LinkVariant } from "../Link/Link";
import * as S from "./Header.styled";
import { Dropdown } from "../Dropdown";
import { DropList } from "./DropList";
import { useLockBodyScroll } from "react-use";

const abilities = [
  { label: "Адмін-панель", to: "/admin" },
  { label: "Замовлення до столу", to: "/order" },
  { label: "Доставка", to: "/delivery" },
  { label: "З собою", to: "/takeaway" },
  { label: "Дизайн", to: "/appearance" },
];

const about = [
  { label: "Наша місія", to: "/about" },
  { label: "Клієнти про нас", to: "/", disabled: true },
  { label: "Ваші ідеї", to: "/", disabled: true },
];

const Header: FC = () => {
  const { owner, loading } = useOwnerContext();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);

  return (
    <>
      <Head />
      <S.Wrapper>
        <div className="container container--big">
          <S.Nav>
            <S.Logo href="/">
              <img src="/images/content/logo.svg" alt="entree логотип" />
            </S.Logo>
            <S.Inner>
              <S.List>
                <Dropdown label="Можливості" options={abilities} />
                <Dropdown label="Про нас" options={about} />
                <Link
                  variant={LinkVariant.Secondary}
                  size={LinkSize.xxl}
                  href="/pricing"
                >
                  Тарифні плани
                </Link>
              </S.List>
              <S.Actions>
                {!loading && (
                  <>
                    {owner ? (
                      <Button
                        variant={ButtonVariant.GrayIcon}
                        size={ButtonSize.iconLg}
                        onClick={() => router.push("/profile")}
                      >
                        <Icon name={Icons.User} />
                      </Button>
                    ) : (
                      <S.Try
                        variant={ButtonVariant.Primary}
                        size={ButtonSize.xl}
                        onClick={() => router.push("/registration")}
                      >
                        Спробувати
                      </S.Try>
                    )}
                  </>
                )}
                <S.Language
                  label="UA"
                  options={[
                    {
                      label: "UA",
                      to: "ua",
                    },
                    {
                      label: "EN",
                      to: "en",
                    },
                  ]}
                />
              </S.Actions>
            </S.Inner>
            <S.Open onClick={() => setOpen((prev) => !prev)}>
              <Icon name={open ? Icons.Cross : Icons.Burger} />
            </S.Open>
          </S.Nav>
        </div>
      </S.Wrapper>
      {open && (
        <S.MobileMenu>
          <S.MobileList>
            <DropList label="Можливості" options={abilities} />
            <DropList label="Про нас" options={about} />
            <S.Label href="/pricing">Тарифні плани</S.Label>
          </S.MobileList>

          <S.Connect>
            <Button
              onClick={() => {}}
              size={ButtonSize.lg}
              variant={ButtonVariant.Primary}
            >
              Спробувати
            </Button>
            <Button
              onClick={() => {}}
              size={ButtonSize.lg}
              variant={ButtonVariant.Gray}
            >
              <Icon name={Icons.User} />
              Увійти
            </Button>
          </S.Connect>
        </S.MobileMenu>
      )}
    </>
  );
};

export default Header;
