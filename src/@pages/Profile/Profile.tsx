import { useGetCurrentOwnerQuery } from "@/features/auth/hooks/auth.gen";
import { useGetOwnerCompaniesQuery } from "@/features/company/hooks/company.gen";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Item from "./Item";
import { Message } from "./Message";
import * as S from "./Profile.styled";
import { useOwnerContext } from "@/app/hooks/use-owner";
import { Button, ButtonSize, ButtonVariant } from "@/components/Button";

const ProfilePage: FC = () => {
  const firstRender = useRef(true);
  const router = useRouter();

  const { owner, loading } = useOwnerContext();
  const { data } = useGetOwnerCompaniesQuery();
  const companies = data?.companies.owned ?? [];

  useEffect(() => {
    if (firstRender.current && !loading) {
      firstRender.current = false;
    }
  }, [firstRender, loading]);

  if (firstRender.current && loading) {
    return null;
  }

  if (owner && !owner.emailVerified) {
    return <Message />;
  }

  if (!owner) {
    router.push("/login");
    return null;
  }

  return (
    <S.Body>
      <Header />
      <S.Section>
        <div className="container container--medium">
          <S.Wrapper>
            {companies.map((c) => (
              <Item
                owned
                key={c.id}
                connected={false}
                name={c.name}
                domain={c.domain}
                status="online"
                logo={c.logo?.small}
                description={c.description}
              />
            ))}
            {owner.invitedCompanies.map((c) => (
              <Item
                owned={false}
                key={c.id}
                connected={false}
                name={c.name}
                domain={c.domain}
                status="online"
                logo={c.logo?.small}
                description={c.description}
              />
            ))}
            <S.Item>
              <S.Add onClick={() => router.push("/create")} type="button">
                <Icon size={24} name={Icons.Plus} />
              </S.Add>
              <S.Info>Добавить заведение</S.Info>
            </S.Item>
          </S.Wrapper>
          <S.Footer>
            <Button
              onClick={() => router.push("/create")}
              variant={ButtonVariant.Primary}
              size={ButtonSize.lg}
            >
              <Icon name={Icons.Plus} />
              Создать новое заведение
            </Button>
          </S.Footer>
        </div>
      </S.Section>
      <Footer />
    </S.Body>
  );
};

export default ProfilePage;
