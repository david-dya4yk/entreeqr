import { FC, useState } from "react";
import * as S from "./Peculiarity.styled";

const items = [
  {
    id: 1,
    title: "Конструктор",
    text: "Ви можете створювати розділи, категорії меню та групувати страви в них, щоб допомогти відвідувачам з вибором",
    src: "images/content/peculiarity/iphone-peculiarity.png",
  },
  {
    id: 2,
    title: "Детальна інформація",
    text: "Додайте фото, опис, вагу та іншу інформацію вашим стравам, щоб вони привертали до себе більше уваги.",
    src: "images/content/peculiarity/iphone-peculiarity-2.png",
  },
  {
    id: 3,
    title: "Алергени та лейбли",
    text: "Додайте до страви алергени або спеціальні лейбли, які допоможуть клієнтам орієнтуватися в меню.",
    src: "images/content/peculiarity/iphone-peculiarity-3.png",
  },
  {
    id: 4,
    title: "Модифікатори, добавки та рекомендації",
    text: "Збільште продажі та середній чек за допомогою інструментів кастомізації страв: ще один напій, подвійний сир або більше салямі...",
    src: "images/content/peculiarity/iphone-peculiarity-4.png",
  },
  {
    id: 5,
    title: "Доступність",
    text: "Редагуйте доступність страв в 1 клік. Усі зміни миттєво відобразяться на сайті.",
    src: "images/content/peculiarity/iphone-peculiarity-5.png",
  },
];

const Peculiarity: FC = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <S.Section>
      <div className="container">
        <S.Inner>
          <S.Content>
            <S.Box>
              {items.map((item) => (
                <S.Image key={item.id} active={item.id === active}>
                  <img src={item.src} alt={item.title} />
                </S.Image>
              ))}
            </S.Box>
          </S.Content>
          <S.Content>
            <S.Title>Створіть смарт‑меню</S.Title>
            <S.Wrapper>
              {items.map((item) => (
                <S.Item key={item.id} active={item.id === active}>
                  <S.Headline>
                    <svg fill="none" viewBox="0 0 28 28">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".6"
                        strokeWidth="2"
                        d="M22.167 10.5v7M5.833 8.167v11.666m14-12L8.167 6.167m11.666 14L8.167 21.833m-2.8-13.666H6.3c.653 0 .98 0 1.23-.127.22-.112.398-.29.51-.51.127-.25.127-.577.127-1.23v-.933c0-.654 0-.98-.127-1.23a1.167 1.167 0 0 0-.51-.51C7.28 3.5 6.953 3.5 6.3 3.5h-.933c-.654 0-.98 0-1.23.127-.22.112-.398.29-.51.51-.127.25-.127.576-.127 1.23V6.3c0 .653 0 .98.127 1.23.112.22.29.398.51.51.25.127.576.127 1.23.127Zm0 16.333H6.3c.653 0 .98 0 1.23-.127.22-.112.398-.29.51-.51.127-.25.127-.576.127-1.23V21.7c0-.653 0-.98-.127-1.23a1.166 1.166 0 0 0-.51-.51c-.25-.127-.577-.127-1.23-.127h-.933c-.654 0-.98 0-1.23.128-.22.111-.398.29-.51.51-.127.249-.127.576-.127 1.229v.933c0 .654 0 .98.127 1.23.112.22.29.398.51.51.25.127.576.127 1.23.127Zm16.333-14h.933c.654 0 .98 0 1.23-.127.22-.112.398-.29.51-.51.127-.25.127-.576.127-1.23V7.7c0-.653 0-.98-.127-1.23a1.166 1.166 0 0 0-.51-.51c-.25-.127-.576-.127-1.23-.127H21.7c-.653 0-.98 0-1.23.127-.22.112-.398.29-.51.51-.127.25-.127.577-.127 1.23v.933c0 .654 0 .98.128 1.23.111.22.29.398.51.51.249.127.576.127 1.229.127Zm0 11.667h.933c.654 0 .98 0 1.23-.128.22-.111.398-.29.51-.51.127-.249.127-.576.127-1.229v-.933c0-.654 0-.98-.127-1.23a1.166 1.166 0 0 0-.51-.51c-.25-.127-.576-.127-1.23-.127H21.7c-.653 0-.98 0-1.23.127-.22.112-.398.29-.51.51-.127.25-.127.576-.127 1.23v.933c0 .653 0 .98.128 1.23.111.22.29.398.51.51.249.127.576.127 1.229.127Z"
                      />
                    </svg>
                    {item.title}
                  </S.Headline>
                  <S.Btn onClick={() => setActive(item.id)} type="button">
                    <span></span>
                    {/* <span className="sr-hide">відкрити детальну інформацію</span> */}
                  </S.Btn>
                  <S.Text>
                    <p>{item.text}</p>
                  </S.Text>
                  <S.Picture>
                    <img src={item.src} alt={item.title} />
                  </S.Picture>
                </S.Item>
              ))}
            </S.Wrapper>
          </S.Content>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Peculiarity;
