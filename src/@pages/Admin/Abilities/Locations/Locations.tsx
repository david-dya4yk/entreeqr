import { FC } from "react";
import * as S from "./Locations.styled";
import { Icons } from "@/shared/ui/icons";

const Locations: FC = () => {
  return (
    <S.Wrapper>
      <S.Location>
        <S.Circle>
          <img
            src="images/content/configuration/location1.jpg"
            alt="кафе ресторан"
          />
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119 60C119 27.4152 92.5848 1 60 1C27.4152 1 1 27.4152 1 60C1 92.5848 27.4152 119 60 119C92.5848 119 119 92.5848 119 60Z"
              stroke="#444CE7"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </S.Circle>
      </S.Location>
      <S.Location>
        <S.Circle>
          <img
            src="images/content/configuration/location2.jpg"
            alt="кафе ресторан"
          />
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119 60C119 27.4152 92.5848 1 60 1C27.4152 1 1 27.4152 1 60C1 92.5848 27.4152 119 60 119C92.5848 119 119 92.5848 119 60Z"
              stroke="#444CE7"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </S.Circle>
      </S.Location>
      <S.Location>
        <S.Circle>
          <img
            src="images/content/configuration/location3.jpg"
            alt="кафе ресторан"
          />
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119 60C119 27.4152 92.5848 1 60 1C27.4152 1 1 27.4152 1 60C1 92.5848 27.4152 119 60 119C92.5848 119 119 92.5848 119 60Z"
              stroke="#444CE7"
              strokeWidth="2"
            />
          </svg>
        </S.Circle>
      </S.Location>

      <S.Center>
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
            fill="#444CE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.5936 64C34.8136 64 31.5956 63.45 28.9376 62.349C26.2806 61.303 24.1246 59.7891 22.4716 57.8071C20.7586 55.8251 19.5186 53.43 18.7506 50.623C17.9826 47.815 17.5996 44.65 17.5996 41.127V38.1541H62.5816C62.5936 38.5891 62.5996 39.0301 62.5996 39.4751C62.5996 43.6591 62.0386 47.292 60.9166 50.375C59.7356 53.458 58.1106 55.99 56.0436 57.972C53.9186 60.009 51.3786 61.5231 48.4256 62.5141C45.4736 63.5051 42.1956 64 38.5936 64ZM27.8746 44.347H51.5266C51.5266 47.54 50.4046 50.182 48.1606 52.274C45.8576 54.366 42.8156 55.412 39.0366 55.412C35.4926 55.412 32.7466 54.531 30.7976 52.7701C28.8496 51.008 27.8746 48.201 27.8746 44.347Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.73 34.462H34.791L38.975 16H52.099L43.73 34.462Z"
            fill="white"
          />
        </svg>
      </S.Center>

      <S.Lines>
        <svg
          width="93"
          height="57"
          viewBox="0 0 93 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92 56C87.5 22.5 63.5 1.5 0 1.5"
            stroke="#444CE7"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        <svg
          width="111"
          height="85"
          viewBox="0 0 111 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 82.5C30.667 89.5 86.3 64.6 109.5 1"
            stroke="#444CE7"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
        <svg
          width="101"
          height="140"
          viewBox="0 0 101 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M91.5012 1C12.5002 1 -67.0993 52.6 100.5 139"
            stroke="#444CE7"
            strokeWidth="2"
          />
        </svg>
      </S.Lines>
    </S.Wrapper>
  );
};

export default Locations;
