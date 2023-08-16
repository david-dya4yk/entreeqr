import { Button, ButtonVariant } from "@/components/Button";
import { FC } from "react";
import { UserMenu } from "../UserMenu";
import * as S from "./Header.styled";

const Header: FC = () => {
  return (
    <S.Header>
      <div className="container container--medium">
        <S.Inner>
          <S.Content>
            <S.Logo>
              <svg fill="none" viewBox="0 0 48 50">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22.432 49.999c-3.937 0-7.29-.574-10.058-1.72-2.768-1.09-5.014-2.667-6.736-4.731-1.784-2.065-3.076-4.56-3.875-7.484-.8-2.924-1.2-6.222-1.2-9.892v-3.096H47.42c.012.453.018.912.018 1.376 0 4.358-.584 8.143-1.753 11.354-1.23 3.211-2.922 5.85-5.075 7.914-2.215 2.121-4.86 3.698-7.936 4.73C29.6 49.483 26.184 50 22.432 50ZM11.267 29.527h24.637c0 3.326-1.169 6.078-3.507 8.257-2.399 2.18-5.567 3.269-9.504 3.269-3.69 0-6.551-.917-8.581-2.752-2.03-1.836-3.045-4.76-3.045-8.774ZM27.782 19.23h-9.311L22.829 0H36.5l-8.717 19.23Z"
                  clipRule="evenodd"
                />
              </svg>
              entree.workspace
            </S.Logo>
            <Button onClick={() => {}} variant={ButtonVariant.White}>
              Українська
            </Button>
          </S.Content>
          <UserMenu />
        </S.Inner>
      </div>
    </S.Header>
  );
};

export default Header;
