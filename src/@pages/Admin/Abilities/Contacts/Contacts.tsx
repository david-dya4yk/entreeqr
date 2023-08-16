import { FC } from "react";
import { Icons } from "@/shared/ui/icons";
import * as S from "./Contacts.styled";

const Contacts: FC = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <img
          src="images/content/configuration/img1.jpg"
          alt="дівчина на дивані сидить в комп'ютері"
        />
      </S.Inner>
      <S.Telegram name={Icons.Atelegram} size={28} />
      <S.Facebook name={Icons.Afacebook} size={50} />
      <S.Instagram name={Icons.Ainstagram} size={44} />
      <S.Tiktok name={Icons.Atiktok} width={22.2} height={26} />
      <S.Linkedin name={Icons.Alinkedin} size={50} />
    </S.Wrapper>
  );
};

export default Contacts;
