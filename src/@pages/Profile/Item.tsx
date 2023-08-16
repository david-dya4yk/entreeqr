import { Button, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import * as S from "./Profile.styled";

interface ItemProps {
  name: string;
  domain: string;
  description: string;
  owned: boolean;
  logo?: string | null;
  connected: boolean;
  status: "online" | "offline";
}

const Item: FC<ItemProps> = ({
  logo,
  owned,
  connected,
  name,
  status,
  domain,
  description,
}) => {
  const goToAdmin = () => {
    const link =
      process.env.NODE_ENV === "production"
        ? `https://${domain}.entreeqr.com/admin`
        : "http://localhost:3000/admin";
    // @ts-ignore
    window.location = link;
  };
  return (
    <S.Item>
      <S.Img className={`${status === "online" ? "online" : ""}`}>
        {logo ? <img src={logo} alt={name} /> : <Icon name={Icons.Building} />}
      </S.Img>
      <S.Title>{name}</S.Title>
      <S.Text>
        <p>{description || "Описание не добавлено..."}</p>
      </S.Text>
      <S.Buttons>
        {!connected && (
          <Button onClick={goToAdmin} variant={ButtonVariant.Gray}>
            <Icon name={Icons.CircleArrow} />
            Подключиться
          </Button>
        )}
        {connected && (
          <Button onClick={() => {}} variant={ButtonVariant.Gray}>
            <Icon name={Icons.CrossArrows} />
            Переключиться
          </Button>
        )}
        {owned && (
          <S.Icon>
            <Icon name={Icons.CircleStar} />
          </S.Icon>
        )}
      </S.Buttons>
    </S.Item>
  );
};

export default Item;
