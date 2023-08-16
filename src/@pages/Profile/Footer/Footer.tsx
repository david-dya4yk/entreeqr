import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { FC } from "react";
import * as S from "./Footer.styled";

const Footer: FC = () => {
  return (
    <S.Footer>
      <div className="container container--medium">
        <S.Inner>
          <S.List>
            <S.Item>© entree 2023</S.Item>
            <S.Item>Условия использования</S.Item>
            <S.Item>Политика конфиденциальности</S.Item>
          </S.List>
          <S.Wrapper>
            <S.NavLink href="#" target="_blank">
              <Icon name={Icons.Globe2} />
              Сайт entree
            </S.NavLink>
            <S.NavLink href="#" target="_blank">
              <Icon name={Icons.Globe3} />
              База знаний
            </S.NavLink>
          </S.Wrapper>
        </S.Inner>
      </div>
    </S.Footer>
  );
};

export default Footer;
