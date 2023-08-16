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
          <S.Link href="#">
            <svg fill="none" viewBox="0 0 20 20">
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#a)"
              >
                <path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM1.667 10h16.666" />
                <path d="M10 1.667A12.75 12.75 0 0 1 13.333 10 12.75 12.75 0 0 1 10 18.333 12.75 12.75 0 0 1 6.667 10 12.75 12.75 0 0 1 10 1.667v0Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            Сайт entree
          </S.Link>
        </S.Inner>
      </div>
    </S.Footer>
  );
};

export default Footer;
