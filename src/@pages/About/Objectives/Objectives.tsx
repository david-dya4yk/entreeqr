import { FC } from "react";
import * as S from "./Objectives.styled";

const Objectives: FC = () => {
  return (
    <S.Section id='objectives'>
      <div className="container">
        <S.Title className="title">
          Наша
          <span>
            місія
            <svg fill="none" viewBox="0 0 185 130">
              <path
                fill="currentColor"
                d="M24.224 15.178c2.157 4.566 4.516 9.031 7.145 13.345 2.342 3.841 4.802 8.424 8.306 11.306 1.921 1.567 4.6-.354 3.454-2.663-2.072-4.178-5.644-7.75-8.222-11.676-2.629-3.993-4.937-8.138-7.06-12.418-1.213-2.426-4.768-.303-3.623 2.106ZM7.073 67.712c4.852.404 11.963 1.129 16.327-1.5 1.28-.775 1.246-3.218-.455-3.488-2.561-.404-5.005.236-7.566.472-2.763.253-5.526.287-8.306.169-2.797-.102-2.73 4.11 0 4.347ZM177.226 67.712c-4.852.404-11.963 1.129-16.327-1.5-1.28-.775-1.247-3.218.455-3.488 2.561-.404 5.004.236 7.566.472 2.763.253 5.526.287 8.306.169 2.797-.102 2.73 4.11 0 4.347ZM43.933 99.061c-4.583 1.078-8.98 3.033-12.755 5.864-3.084 2.308-7.11 6.133-7.178 10.227-.017 1.483 1.82 2.696 3.117 1.786 2.881-2.022 4.5-5.644 7.06-8.138 3.067-2.999 6.656-4.903 10.817-5.88 2.494-.59 1.433-4.449-1.061-3.859ZM83.526 104.376c-2.629 6.453-4.516 14.406-2.966 21.365.59 2.578 4.415 1.904 4.499-.606.22-6.909.084-12.991 2.46-19.647.91-2.561-3.016-3.521-3.993-1.112ZM122.083 108.485c1.904 6.925 5.426 15.872 11.508 20.135 1.719 1.213 3.69-1.112 2.763-2.764-1.684-2.982-4.212-5.425-5.981-8.391-1.887-3.167-3.319-6.537-4.398-10.059-.758-2.46-4.583-1.432-3.892 1.079ZM149.721 99.79c3.976 1.145 7.97 2.308 11.946 3.453 3.572 1.028 7.178 2.494 10.918 2.578 2.056.034 2.764-2.797 1.028-3.825-3.184-1.904-7.06-2.544-10.632-3.538-3.993-1.112-7.986-2.24-11.98-3.353-3.016-.86-4.296 3.808-1.28 4.684ZM138.982 41.045c3.05-3.825 6.302-7.464 9.841-10.85 3.521-3.37 7.599-6.184 11.036-9.605 1.752-1.735-.472-4.431-2.578-3.336-8.543 4.431-15.839 12.957-21.719 20.388-1.904 2.392 1.483 5.83 3.42 3.403ZM106.845 27.138c.27-9.419 4.213-15.434 8.964-23.117 1.247-2.005-1.432-3.673-3.049-2.359-7.128 5.78-10.043 16.698-10.228 25.476-.067 2.78 4.229 2.78 4.313 0ZM77.305 23.769c-1.483-7.364-2.612-15.165-5.038-22.275-.725-2.157-4.583-1.989-4.246.573 1.01 7.65 3.437 15.316 5.425 22.763.674 2.51 4.364 1.45 3.859-1.061Z"
              />
            </svg>
          </span>
        </S.Title>
        <S.Inner>
          <S.Item>
            <S.Headline>Простота</S.Headline>
            <div className="text">
              <p>
                Ми хочемо скоротити час на замовлення страв та очікування
                офіціанта. Нехай клієнти смакують, а не очікують!
              </p>
            </div>
            <S.Decor>Замовлення за секунду</S.Decor>
            <svg fill="none" viewBox="0 0 150 150">
              <g fill="currentColor" clipPath="url(#a)">
                <path d="M41.399 19.398c14.154 7.038 29.88 15.067 36.233 30.56 5.547 13.534.152 29.68-12.854 36.649a29.725 29.725 0 0 1-10.749 3.348 27.67 27.67 0 0 1-5.172.087c-.742-.06-2.617-.067-3.175-.704-.452-.516-.38-2.102-.189-2.664.145-.419.476-.829.708-1.2 3.426-5.408 9.2-8.807 15.348-10.216 13.821-3.172 26.718 3.69 35.632 13.962 11.562 13.319 18.202 31.22 21.454 48.34.173.92 1.579.55 1.405-.364-3.231-17.002-9.815-34.582-20.996-48.014-9.423-11.324-23.448-18.906-38.398-15.166-6.38 1.598-12.342 5.306-15.8 11.006-1.452 2.393-1.88 5.038 1.393 5.982 3.346.968 7.468.45 10.819-.26 14.74-3.127 25.152-17.031 23.816-32.084-1.85-20.834-22.382-31.85-39.014-40.068-.533-.27-1 .535-.461.806Z" />
                <path d="M127.799 126.193a226.896 226.896 0 0 1-3.217 6.81c-1.029 2.079-1.954 4.805-3.47 6.574-1.582 1.853-3.118 1.563-4.953.369-.896-.585-1.76-1.227-2.636-1.842l-6.461-4.541c-.447-.314-1.151.111-1.117.645.041.637.099 1.228.255 1.845.135.541 1.07.62 1.161.004a9.97 9.97 0 0 0 .079-1.837l-1.117.645c2.684 1.843 5.367 3.692 8.056 5.527 1.574 1.074 3.493 2.456 5.497 1.727 2.506-.907 3.543-4.423 4.58-6.586a184.811 184.811 0 0 0 4.007-8.955c.188-.448-.456-.839-.664-.385Z" />
              </g>
            </svg>
          </S.Item>
          <S.Item>
            <S.Headline>Довіра</S.Headline>
            <div className="text">
              <p>
                Заохочуючи відвідувачів та власників до способу онлайн-платежів,
                ми переносимо довіру між ними на новий рівень
              </p>
            </div>
            <S.Decor>Прийдуть ще раз!</S.Decor>
          </S.Item>
          <S.Item>
            <S.Headline>Краса</S.Headline>
            <div className="text">
              <p>
                Зазвичай меню та сайт закладів є застарілими. Ми хочемо
                виправити цю ситуацію та зробити кожен заклад суперовим
              </p>
            </div>
            <S.Decor>Щоб усі здивувались</S.Decor>
          </S.Item>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Objectives;