import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import { Link } from "../Link";
import { LinkSize, LinkVariant } from "../Link/Link";
import * as S from "./Footer.styled";
import { useOwnerContext } from "@/app/hooks/use-owner";

const Footer: FC = () => {
  const { owner, loading } = useOwnerContext();

  return (
    <S.Section>
      <div className="container">
        <S.Inner>
          <h2 className="sr-hide">додаткова інформація</h2>
          <S.Content>
            <S.Logo>
              <img src="images/content/logo.svg" alt="entree логотип" />
            </S.Logo>
            <S.Subtitle>Найкраще рішення у сфері HoReCA</S.Subtitle>
            <S.Mail href="mailto:hello@entree.com">hello@entree.com</S.Mail>
          </S.Content>
          <S.Wrapper>
            <S.Item>
              <S.Title>Можливості</S.Title>
              <S.List>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/delivery"
                  >
                    Сайт доставки
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/order"
                  >
                    Замовлення до столу
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/booking"
                  >
                    Резервації столів
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/reviews"
                  >
                    Відгуки
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/admin"
                  >
                    Адмін. панель
                  </Link>
                </li>
              </S.List>
            </S.Item>
            <S.Item>
              <S.Title>Про нас</S.Title>
              <S.List>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/about"
                  >
                    Наша місія
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/pricing"
                  >
                    Тарифні плани
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    disabled
                    href=""
                  >
                    Клієнти про нас
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    disabled
                    href=""
                  >
                    Запропонувати ідею
                  </Link>
                </li>
              </S.List>
            </S.Item>
            <S.Item>
              <S.Title>Інше</S.Title>
              <S.List>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    disabled
                    href=""
                  >
                    База знань
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href={owner ? "/profile" : "/login"}
                    disabled={loading}
                  >
                    Профіль
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    disabled
                    href=""
                  >
                    Зв’язатися з нами
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/policy"
                  >
                    Умови користування
                  </Link>
                </li>
                <li>
                  <Link
                    size={LinkSize.xl}
                    variant={LinkVariant.Secondary}
                    href="/policy"
                  >
                    Політика та cookies
                  </Link>
                </li>
              </S.List>
            </S.Item>
          </S.Wrapper>
        </S.Inner>
        <S.Bottom>
          <S.Links>
            <S.Icon>
              <a href="#">
                <Icon name={Icons.Instagram} size={28} />
              </a>
            </S.Icon>
            <S.Icon>
              <a href="#">
                <Icon name={Icons.Facebook} size={28} />
              </a>
            </S.Icon>
            <S.Icon>
              <a href="#">
                <Icon name={Icons.Linkedin} size={28} />
              </a>
            </S.Icon>
          </S.Links>
          <S.Copy>© 2023 entree company</S.Copy>
          <S.Love>
            With love
            <Icon name={Icons.Heart} size={16} />
          </S.Love>
        </S.Bottom>
      </div>
    </S.Section>
  );
};

export default Footer;
