import { FC } from "react";
import * as S from "./Redaction.styled";

const Redaction: FC = () => {
  return (
    <S.Section>
      <div className="container">
        <S.Title className="title">Скажіть гудбай поганим шаблонам</S.Title>
        <S.Subtitle>
          Наш сервіс дозволяє вам керувати кольором, шрифтом, зображенням, щоб
          зробити ваш бренд яскравим.
        </S.Subtitle>
        <S.Inner>
          <S.Item>
            <S.Images className="color">
              <S.Icon>
                <svg fill="none" viewBox="0 0 45 29">
                  <path
                    fill="#444CE7"
                    d="M0 28h4.6l2.76-8.48.04-.24 5.04-15.24h.24l5 15.04v.28L20.52 28h4.56L15.44 0H9.68L0 28Zm5.92-7.32h13.24L17.84 17H7.24l-1.32 3.68Zm27.562 7.68c1.306 0 2.533-.24 3.68-.72a10.968 10.968 0 0 0 3.2-2.12c.053.453.12.907.2 1.36.107.453.227.827.36 1.12h3.88c-.187-.56-.36-1.173-.52-1.84-.133-.693-.2-1.36-.2-2V13.92c0-1.093-.174-2.08-.52-2.96a5.768 5.768 0 0 0-1.56-2.24c-.667-.64-1.48-1.12-2.44-1.44-.96-.32-2.053-.48-3.28-.48h-.28c-1.494 0-2.947.253-4.36.76a18.527 18.527 0 0 0-4 1.96l1.76 3a11.063 11.063 0 0 1 3.04-1.6c1.12-.373 2.213-.56 3.28-.56h.24c1.386 0 2.44.333 3.16 1 .746.64 1.12 1.52 1.12 2.64v1.16h-1.8c-4 0-6.974.56-8.92 1.68-1.92 1.093-2.88 2.773-2.88 5.04v.32c0 .933.16 1.787.48 2.56a5.946 5.946 0 0 0 1.4 1.92 6.633 6.633 0 0 0 2.16 1.24c.853.293 1.787.44 2.8.44Zm.64-3.48a5.227 5.227 0 0 1-1.48-.2c-.454-.16-.84-.36-1.16-.6a3.435 3.435 0 0 1-.72-.92 3.116 3.116 0 0 1-.24-1.24v-.2c0-1.253.667-2.16 2-2.72s3.48-.84 6.44-.84h1.28V22a8.52 8.52 0 0 1-2.72 2.12c-1.04.507-2.173.76-3.4.76Z"
                  />
                </svg>
              </S.Icon>
              <S.Icon>
                <svg fill="none" viewBox="0 0 50 29">
                  <path
                    fill="#039855"
                    d="m22.84 28.4-3.12-8H6.76l-3.12 7.92L.4 27 11.36 0h4.16l10.8 27-3.48 1.4ZM7.96 17.2h10.52L13.24 3.76 7.96 17.2Zm29.919 11.28c-1.734 0-3.307-.44-4.72-1.32-1.414-.88-2.547-2.12-3.4-3.72-.827-1.627-1.24-3.533-1.24-5.72 0-2.08.413-3.947 1.24-5.6.853-1.653 2.013-2.96 3.48-3.92 1.493-.987 3.2-1.48 5.12-1.48 1.2 0 2.28.213 3.24.64.986.4 1.84.907 2.56 1.52V7.2h3.28v15.76c0 1.013.24 1.68.72 2 .506.293 1.053.44 1.64.44l-.76 2.8c-2.56 0-4.107-1.04-4.64-3.12-.614.853-1.454 1.64-2.52 2.36-1.04.693-2.374 1.04-4 1.04Zm.8-3.2a6.07 6.07 0 0 0 2.88-.72 7.898 7.898 0 0 0 2.28-1.88V11.52a9.193 9.193 0 0 0-2.4-1.2 7.683 7.683 0 0 0-2.72-.48c-1.28 0-2.414.333-3.4 1-.96.64-1.72 1.547-2.28 2.72-.56 1.147-.84 2.493-.84 4.04 0 1.493.28 2.827.84 4 .56 1.147 1.333 2.053 2.32 2.72.986.64 2.093.96 3.32.96Z"
                  />
                </svg>
              </S.Icon>
              <S.Icon>
                <svg fill="none" viewBox="0 0 64 39">
                  <path
                    fill="#E04F16"
                    d="M30.938 35.89c0-.78.046-1.562.14-2.343.125-.781.25-1.547.375-2.297.156-.781.281-1.563.375-2.344.125-.812.188-1.625.188-2.437a22.06 22.06 0 0 0-2.672.14c-.75.094-1.485.188-2.203.282-.72.093-1.485.172-2.297.234-.813.031-1.797.016-2.953-.047a62.685 62.685 0 0 1-2.907 3 30.942 30.942 0 0 1-3.422 2.953 21.926 21.926 0 0 1-3.843 2.297c-1.344.594-2.703.89-4.078.89a8.024 8.024 0 0 1-2.72-.468 7.343 7.343 0 0 1-2.25-1.313 6.107 6.107 0 0 1-1.546-2.015C.75 31.609.562 30.719.562 29.75c0-.5.079-.875.235-1.125.187-.281.562-.422 1.125-.422.281 0 .531.266.75.797.219.5.5 1.078.844 1.734a8.157 8.157 0 0 0 1.406 1.735c.562.5 1.328.75 2.297.75a9.492 9.492 0 0 0 3.468-.657 18.279 18.279 0 0 0 3.282-1.734 21.943 21.943 0 0 0 2.953-2.39 38.878 38.878 0 0 0 2.531-2.579c-.094-.78-.375-1.359-.844-1.734-.468-.375-.968-.75-1.5-1.125-.5-.375-.953-.875-1.359-1.5s-.61-1.61-.61-2.953c0-1.906.579-3.39 1.735-4.453 1.156-1.094 2.734-1.64 4.734-1.64.594 0 1.172.062 1.735.187.593.125 1.187.28 1.781.468.594.157 1.172.297 1.734.422a8.625 8.625 0 0 0 1.782.188c.375 0 .672-.047.89-.14a1.82 1.82 0 0 0 .657-.423c.187-.187.39-.437.609-.75.219-.312.5-.687.844-1.125.187-.25.468-.64.843-1.172.407-.562.844-1.171 1.313-1.828.469-.687.969-1.406 1.5-2.156.531-.75 1.031-1.469 1.5-2.156.469-.688.89-1.297 1.266-1.828.374-.532.64-.938.796-1.22.344-.28.657-.452.938-.515.281-.094.61-.14.984-.14.375 0 .657.14.844.421.188.25.297.563.328.938.063.375.078.766.047 1.172v1.36c0 .187-.016.39-.047.609v1.031c-.094.312-.25.781-.469 1.406a288.74 288.74 0 0 1-.656 2.156l-.797 2.485c-.25.875-.5 1.719-.75 2.531a79.515 79.515 0 0 1-.61 2.156 17.025 17.025 0 0 0-.374 1.407 49.427 49.427 0 0 0-.328 1.875c-.063.375-.125.734-.188 1.078a4.81 4.81 0 0 0-.093.703c.28.062.562.156.843.281.282.125.422.328.422.61a.89.89 0 0 1-.375.75 3.89 3.89 0 0 1-.797.515c-.312.156-.61.344-.89.563-.25.218-.391.53-.422.937-.063.375-.172 1.063-.328 2.063a99.472 99.472 0 0 1-.563 3.14 147.281 147.281 0 0 1-.562 3.094c-.157.969-.282 1.64-.375 2.016-.032.093-.094.265-.188.515s-.203.5-.328.75A14.362 14.362 0 0 1 33.469 38c-.75-.156-1.36-.344-1.828-.563-.47-.25-.703-.765-.703-1.546Zm-.797-18c-.375 0-.907.266-1.594.797a18.159 18.159 0 0 0-1.969 1.875 17.707 17.707 0 0 0-1.734 2.11c-.5.687-.75 1.203-.75 1.547h1.078c.562-.032 1.14-.047 1.734-.047a199.7 199.7 0 0 0 1.735-.094 25.33 25.33 0 0 1 1.172-.047c.125 0 .312-.031.562-.093.281-.063.547-.125.797-.188s.469-.125.656-.188c.219-.062.344-.109.375-.14.031 0 .047-.094.047-.281v-.516c0-.25-.047-.64-.14-1.172a7.365 7.365 0 0 0-.376-1.594 4.234 4.234 0 0 0-.656-1.359c-.25-.406-.562-.61-.937-.61Zm-13.172.047c0 .438.156.938.468 1.5a8.034 8.034 0 0 0 1.172 1.594c.47.5.97.922 1.5 1.266.532.344 1.032.515 1.5.515.438 0 .953-.265 1.547-.796a13.602 13.602 0 0 0 1.688-1.828 17.347 17.347 0 0 0 1.406-2.063c.375-.656.563-1.11.563-1.36 0-.53-.188-.921-.563-1.171-.344-.281-.766-.469-1.266-.563a5.802 5.802 0 0 0-1.5-.187h-1.312c-.438 0-.969.047-1.594.14a6.082 6.082 0 0 0-1.687.422 3.786 3.786 0 0 0-1.36.938c-.375.406-.562.937-.562 1.593Zm14.062-2.39a23.608 23.608 0 0 1 1.922 2.625c.594.937 1.156 1.89 1.688 2.86l4.172-15-7.782 9.515ZM42 34.953c.281-1.781.813-3.422 1.594-4.922.781-1.5 1.672-2.797 2.672-3.89 1.03-1.125 2.14-2.047 3.328-2.766 1.187-.719 2.343-1.172 3.468-1.36 1.126-.218 2.157-.171 3.094.141.969.313 1.75.938 2.344 1.875 0 .719-.172 1.407-.516 2.063a20.436 20.436 0 0 1-1.078 1.968 41.252 41.252 0 0 0-1.078 2.016 5.261 5.261 0 0 0-.469 2.203c0 .813.172 1.469.516 1.969.375.469 1.016.703 1.922.703.75 0 1.469-.11 2.156-.328a7.37 7.37 0 0 1 2.156-.328c.125 0 .328.016.61.047h.61c-.376.531-.86.984-1.454 1.36-.594.374-1.219.702-1.875.983-.656.25-1.344.438-2.063.563-.687.125-1.328.188-1.921.188-.563 0-1.063-.126-1.5-.376a3.763 3.763 0 0 1-1.125-.984 5.22 5.22 0 0 1-.75-1.36 5.473 5.473 0 0 1-.235-1.546 64.984 64.984 0 0 1-1.547 1.687 13.625 13.625 0 0 1-1.734 1.547c-.594.469-1.25.86-1.969 1.172a5.153 5.153 0 0 1-2.156.469c-.813 0-1.516-.297-2.11-.89-.593-.626-.89-1.36-.89-2.204Zm3.094-1.453v.844c.031.312.234.515.61.61.78-.188 1.671-.595 2.671-1.22a19.31 19.31 0 0 0 2.813-2.25 15.014 15.014 0 0 0 2.203-2.765c.593-1 .89-1.953.89-2.86 0-.062-.015-.156-.047-.28v-.329c-1.062 0-2.14.219-3.234.656a9.946 9.946 0 0 0-2.953 1.828 9.688 9.688 0 0 0-2.156 2.625 6.605 6.605 0 0 0-.797 3.141Z"
                  />
                </svg>
              </S.Icon>
              <S.Icon>
                <svg
                  width="51"
                  height="32"
                  viewBox="0 0 51 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6641 29.3398L24.3594 28.8906L21.2734 21.293H9.55469L6.48828 28.8906L9.24219 29.3398V31H0.863281V29.3398L3.94922 28.8906L14.2031 3.53906L13.3828 1.60547L16.5469 0.277344L28.2266 28.8906L31.3711 29.3398V31H21.6641V29.3398ZM10.4727 18.9297H20.4141L15.4336 6.39062L10.4727 18.9297ZM50.9414 29.9844C49.0404 30.9609 47.6667 31.4492 46.8203 31.4492C44.9193 31.4492 43.9688 30.6419 43.9688 29.0273V28.4219C43.7865 28.6953 43.2852 29.0924 42.4648 29.6133C41.6576 30.1341 41.026 30.4987 40.5703 30.707C39.4896 31.2018 38.6693 31.4492 38.1094 31.4492C37.5495 31.4492 37.0872 31.4232 36.7227 31.3711C36.3581 31.332 35.9805 31.2474 35.5898 31.1172C35.1992 30.987 34.8151 30.8047 34.4375 30.5703C34.0599 30.3359 33.7214 30.0299 33.4219 29.6523C32.7578 28.819 32.4258 27.7318 32.4258 26.3906C32.4258 24.5417 33.0833 23.2526 34.3984 22.5234C35.2318 22.0417 36.1107 21.7422 37.0352 21.625C37.9727 21.5078 38.8255 21.4167 39.5938 21.3516C41.0521 21.2214 42.5104 21.1432 43.9688 21.1172V17.0156C43.9688 15.8828 43.8255 15.1276 43.5391 14.75C43.0573 14.0859 42.3086 13.7539 41.293 13.7539C39.0273 13.7539 36.8008 14.4896 34.6133 15.9609L33.4805 14.2617C36.5273 12.2305 39.2552 11.2148 41.6641 11.2148C43.7604 11.2148 45.2448 11.7943 46.1172 12.9531C46.7943 13.8516 47.1328 15.1276 47.1328 16.7812V27.0547C47.1328 28.0182 47.3151 28.5651 47.6797 28.6953C47.8099 28.7344 47.9792 28.7539 48.1875 28.7539C48.7083 28.7539 49.5091 28.5521 50.5898 28.1484L50.9414 29.9844ZM43.9688 22.7578C40.2708 22.901 37.901 23.2721 36.8594 23.8711C36.0651 24.3268 35.668 25.0625 35.668 26.0781C35.668 27.5495 36.2344 28.4544 37.3672 28.793C37.6797 28.8841 38.0573 28.9297 38.5 28.9297C38.9557 28.9297 39.4831 28.8385 40.082 28.6562C40.681 28.474 41.2344 28.2526 41.7422 27.9922C42.7057 27.5234 43.4479 27.0677 43.9688 26.625V22.7578Z"
                    fill="#6938EF"
                  />
                </svg>
              </S.Icon>
            </S.Images>
            <S.Content>
              <S.Headline>Надайте сайту фірмовий вигляд</S.Headline>
              <S.Text className="text">
                <p>
                  Налаштуйте тему, кольори, шрифт, радіус заокруглень з
                  урахуванням своїх уподобань і фірмового стилю закладу.
                  Налаштування постійно доповнюются новими функціями.
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
          <S.Item>
            <S.Images>
              <S.Images>
                <S.Img>
                  <img src="images/content/redaction/1.jpg" alt="панкейкі" />
                </S.Img>
                <S.Img>
                  <img src="images/content/redaction/2.jpg" alt="мандаріни" />
                </S.Img>
                <S.Img>
                  <img src="images/content/redaction/3.jpg" alt="салати" />
                </S.Img>
                <S.Img>
                  <img
                    src="images/content/redaction/4.jpg"
                    alt="люди сидять за столом"
                  />
                </S.Img>
                <S.Img>
                  <img
                    src="images/content/redaction/5.jpg"
                    alt="приміщення кафе"
                  />
                </S.Img>
              </S.Images>
            </S.Images>
            <S.Content>
              <S.Headline>Промо-банери</S.Headline>
              <S.Text className="text">
                <p>
                  Інформуйте клієнтів про нові акції або пропозиції за допомогою
                  банерів різних видів: від сторіс до звичайної новини. Немає
                  новин чи акцій? Не біда! Поставте велике фото.
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
          <S.Item>
            <S.Images>
              <S.Image>
                <img src="images/content/redaction/6.jpg" alt="панкейкі" />
              </S.Image>
              <S.Image>
                <img src="images/content/redaction/7.jpg" alt="мандаріни" />
              </S.Image>
              <S.Image>
                <img src="images/content/redaction/8.jpg" alt="салати" />
              </S.Image>
              <S.Image>
                <img
                  src="images/content/redaction/9.jpg"
                  alt="люди сидять за столом"
                />
              </S.Image>
              <S.Image>
                <img
                  src="images/content/redaction/10.jpg"
                  alt="приміщення кафе"
                />
              </S.Image>
            </S.Images>
            <S.Content>
              <S.Headline>Різноманітність страв</S.Headline>
              <S.Text className="text">
                <p>
                  Налаштуйте вид картки товару під себе: велика, маленька,
                  вертикальна або горизонтальна. І ще безліч налаштувань.
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
          <S.Item>
            <S.Images className="background">
              <S.Box>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </S.Box>
              <S.Box>
                <span></span>
                <span></span>
                <span></span>
              </S.Box>
              <S.Box>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </S.Box>
            </S.Images>
            <S.Content>
              <S.Headline>Красиве і зручне меню</S.Headline>
              <S.Text className="text">
                <p>
                  Підберіть вид навігації в меню під себе: зробіть його
                  горизонтальним або вертикальним; з відображенням розділів або
                  тільки категорій.
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
          <S.Item>
            <S.Images>
              <S.Picture>
                <img
                  src="images/content/redaction/11.jpg"
                  alt="сторінка доставкі"
                />
              </S.Picture>
              <S.Picture>
                <img src="images/content/redaction/12.jpg" alt="головне меню" />
              </S.Picture>
            </S.Images>
            <S.Content>
              <S.Headline>Мобільна та планшетна версії сайту</S.Headline>
              <S.Text className="text">
                <p>
                  Ви зможете налаштувати ці версії під свої уподобання,
                  редагуйте вигляд меню, блоки та інші налаштування.
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
          <S.Item>
            <S.Images className="block">
              <S.Pic>
                <img src="images/content/redaction/13.jpg" alt="" />
                <span />
              </S.Pic>
              <S.Pic>
                <img src="images/content/redaction/14.jpg" alt="" />
                <span />
              </S.Pic>
              <S.Pic>
                <img src="images/content/redaction/15.jpg" alt="" />
                <span />
              </S.Pic>
            </S.Images>
            <S.Content>
              <S.Headline>Додаткові блоки</S.Headline>
              <S.Text className="text">
                <p>
                  Від «Часто замовляють» до додаткового промо-матеріалу,
                  додавайте те що потрібно, і те що подобається!
                </p>
              </S.Text>
            </S.Content>
          </S.Item>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Redaction;