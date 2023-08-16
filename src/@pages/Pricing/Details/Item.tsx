import { FC } from "react";
import * as S from "./Item.styled";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";

interface DetailsItemProps {
  name: string;
  lite?: boolean;
  basic?: boolean;
  smart?: boolean;
  pro?: boolean;
}

const DetailsItem: FC<DetailsItemProps> = ({
  name,
  lite,
  basic,
  smart,
  pro,
}) => {
  return (
    <S.Row>
      <S.Name>{name}</S.Name>

      <S.Icon>
        <Icon size={24} name={lite ? Icons.CheckThin : Icons.Dash} />
      </S.Icon>
      <S.Icon>
        <Icon size={24} name={basic ? Icons.CheckThin : Icons.Dash} />
      </S.Icon>
      <S.Icon>
        <Icon size={24} name={smart ? Icons.CheckThin : Icons.Dash} />
      </S.Icon>
      <S.Icon>
        <Icon size={24} name={pro ? Icons.CheckThin : Icons.Dash} />
      </S.Icon>
    </S.Row>
  );
};

export default DetailsItem;
