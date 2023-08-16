import { Button, ButtonSize, ButtonVariant } from "@/components/Button";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import * as S from "./Policy.styled";
import { FC } from "react";

const PolicyPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <S.Section>
          <S.Wrapper>
            <S.Title>Політика конфіденційності та cookies</S.Title>
            <S.Subtitle>Останнє оновлення 20 березня 2023 року</S.Subtitle>
            <S.Icon>
              <svg fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9V6m0 16a7 7 0 0 1-7-7V9a7 7 0 0 1 14 0v6a7 7 0 0 1-7 7Z"
                />
              </svg>
            </S.Icon>
          </S.Wrapper>
          <div className="container">
            <S.Inner>
              <S.Headline>Політика Cookies</S.Headline>
              <S.Text>
                <p>
                  <span>
                    Файли cookie - це файли, які зберігаються на жорсткому диску
                    вашого пристрою або у веб-браузері та отримуються нашим
                    сервером, коли ви отримуєте доступ до наших послуг. Інші
                    технології можуть включати теги, пікселі, SDK, веб-маяки,
                    JavaScript, посилання в електронних листах, ідентифікатори
                    пристроїв або подібні технології і можуть використовуватися
                    для тих же цілей, що і файли cookie, і зберігатися на вашому
                    жорсткому диску до закінчення терміну їх дії. Інші
                    технології використовуються для збору неперсональної
                    інформації або сукупної інформації, що використовується для
                    покращення вашого досвіду та збору даних про використання та
                    продуктивність.
                  </span>
                  Ця Політика щодо файлів cookie описує практику, якої
                  дотримується &quot;entree&quot; (або &quot;ми&quot; чи
                  &quot;нас&quot;) при зборі інформації за допомогою файлів
                  cookie та подібних технологій, коли ви отримуєте доступ до
                  наших сервісів.
                </p>
              </S.Text>
              <S.Name>1. Інформація, яку Ми збираємо</S.Name>
              <S.Text>
                <p>
                  <span>
                    Посилання в електронних листах, ідентифікатори пристроїв або
                    подібні технології і можуть використовуватися для тих же
                    цілей, що і файли cookie, і зберігатися на вашому жорсткому
                    диску до закінчення терміну їх дії. Інші технології
                    використовуються для збору неперсональної інформації або
                    сукупної інформації, що використовується для покращення
                    вашого досвіду та збору даних про використання та
                    продуктивність.
                  </span>
                  Ця Політика щодо файлів cookie описує практику, якої
                  дотримується &quot;entree&quot; (або &quot;ми&quot; чи
                  &quot;нас&quot;) при зборі інформації за допомогою файлів
                  cookie та подібних технологій, коли ви отримуєте доступ до
                  наших сервісів.
                </p>
              </S.Text>
              <S.Name>2. Тип файлів cookie, які ми використовуємо</S.Name>
              <S.Body>
                Ця Політика щодо файлів cookie описує практику, якої
                дотримується &quot;entree&quot; (або &quot;ми&quot; чи
                &quot;нас&quot;) при зборі інформації за допомогою файлів cookie
                та подібних технологій, коли ви отримуєте доступ до наших
                сервісів.
              </S.Body>
              <S.List>
                <S.Item>element 1</S.Item>
                <S.Item>element 2</S.Item>
                <S.Item>element 3</S.Item>
                <S.Item>element 4</S.Item>
                <S.Item>element 5</S.Item>
              </S.List>
              <S.Content>
                Ця Політика щодо файлів cookie описує практику, якої
                дотримується &quot;entree&quot; (або &quot;ми&quot; чи
                &quot;нас&quot;) при зборі інформації за допомогою файлів cookie
                та подібних технологій, коли ви отримуєте доступ до наших
                сервісів.
              </S.Content>
              <S.Headline>Політика конфіденційності</S.Headline>
              <S.Box>
                <p>
                  Ми використовуємо файли cookie у всіх технологіях Sunday
                  (вебсайтах, додатках тощо), щоб покращити їхню роботу та
                  покращити ваш користувацький досвід.
                </p>
                <p>
                  Файли cookie використовуються для забезпечення наступних
                  функцій:
                </p>
                <p>
                  <span> Персоналізація: </span>
                  Наприклад, запам&apos;ятовуються ваші мовні уподобання.
                </p>
                <p>
                  <span> Управління сеансами: </span>
                  Щоб гарантувати, що ваш сеанс буде перенаправлений до
                  правильної системи протягом усього часу вашого візиту.
                </p>
                <p>
                  <span> Відстеження використання: </span>
                  Ми використовуємо файли cookie для аналізу поточного
                  використання веб-сайту нашими користувачами. Це дозволяє нам
                  адаптувати пропозиції нашого веб-сайту відповідно до інтересів
                  наших користувачів і сприяє постійному вдосконаленню
                  веб-сайту.
                </p>
                <p>
                  <span> AB-тестування / багатовимірне тестування: </span>
                  Ми можемо показувати користувачеві кілька версій сторінки, щоб
                  оцінити, яка з них створює найкращий користувацький досвід.
                </p>
                <p>
                  <span> Реклама: </span>
                  Ми можемо показувати рекламний контент залежно від місця
                  розташування, мови та вашої попередньої історії переглядів.
                </p>
              </S.Box>
              <S.Name>1. Інформація, яку Ми збираємо</S.Name>
              <S.Text>
                <p>
                  <span>
                    JavaScript, посилання в електронних листах, ідентифікатори
                    пристроїв або подібні технології і можуть використовуватися
                    для тих же цілей, що і файли cookie, і зберігатися на вашому
                    жорсткому диску до закінчення терміну їх дії. Інші
                    технології використовуються для збору неперсональної
                    інформації або сукупної інформації, що використовується для
                    покращення вашого досвіду та збору даних про використання та
                    продуктивність.
                  </span>
                  Ця Політика щодо файлів cookie описує практику, якої
                  дотримується &quot;entree&quot; (або &quot;ми&quot; чи
                  &quot;нас&quot;) при зборі інформації за допомогою файлів
                  cookie та подібних технологій, коли ви отримуєте доступ до
                  наших сервісів.
                </p>
              </S.Text>
              <S.Name>2. Тип файлів cookie, які ми використовуємо</S.Name>
              <S.Content>
                <p>
                  Коли ви отримуєте доступ до наших послуг. Інші технології
                  можуть включати теги, пікселі, SDK, веб-маяки, JavaScript,
                  посилання в електронних листах, ідентифікатори пристроїв або
                  подібні технології і можуть використовуватися для тих же
                  цілей, що і файли cookie, і зберігатися на вашому жорсткому
                  диску до закінчення терміну їх дії. Інші технології
                  використовуються для збору неперсональної інформації або
                  сукупної інформації, що використовується для покращення вашого
                  досвіду та збору даних про використання та продуктивність.
                </p>
              </S.Content>
              <Button
                size={ButtonSize.xxl}
                variant={ButtonVariant.Primary}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Нагору <Icon name={Icons.ArrowUp} />
              </Button>
            </S.Inner>
          </div>
        </S.Section>
      </main>
      <Footer />
    </>
  );
};

export default PolicyPage;