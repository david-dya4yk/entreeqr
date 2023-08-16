import { FC, useState } from "react";
import * as S from "./Abilities.styled";
import { Contacts } from "./Contacts";
import { Schedule } from "./Schedule";
import { Locations } from "./Locations";
import { Additions } from "./Additions";
import { Icon } from "@/shared/ui/icon";
import { Icons } from "@/shared/ui/icons";
import { useMedia } from "react-use";

enum Tab {
  Contacts = "Contacts",
  Schedule = "Schedule",
  Locations = "Locations",
  Additions = "Additions",
}

const tabs = [
  {
    icon: Icons.APhone,
    tab: Tab.Contacts,
    title: "Контактна інформація",
    text: "Додайте соціальні мережі, розділені номери телефонів для адміністрації, доставки та інших відділів вашого закладу.",
  },
  {
    icon: Icons.AClock,
    tab: Tab.Schedule,
    title: "Гнучкий графік роботи",
    text: "Ми надаємо можливість налаштувати графік роботи закладу як у звичайні дні, так і для святкових та будь-яких інших днів, які вам необхідні.",
  },
  {
    icon: Icons.ABuilding,
    tab: Tab.Locations,
    title: "Локації",
    text: "Якщо ви є мережею закладів — ми надаємо можливість додавати безліч локацій і редагувати їх у межах однієї панелі управління, без зайвих дзвінків і танців із бубном :)",
  },
  {
    icon: Icons.AWifi,
    tab: Tab.Additions,
    title: "Додаткові можливості",
    text: "Додайте опис, цінову політику, Wi-Fi та інше для зручності ваших клієнтів.",
  },
];

const Abilities: FC = () => {
  const isMobile = useMedia("(max-width: 900px)", true);
  const [tab, setTab] = useState(Tab.Contacts);

  return (
    <S.Section id="abilities">
      <div className="container">
        <S.Heading>Налаштуйте ваш заклад</S.Heading>
        <S.Subtitle>
          Найкраще рішення для ресторанів, барів, пабів, кафе, піцерій та
          фуд-кортів
        </S.Subtitle>
        <S.Inner>
          {!isMobile && (
            <S.Left>
              {tab === Tab.Contacts && <Contacts />}
              {tab === Tab.Schedule && <Schedule />}
              {tab === Tab.Locations && <Locations />}
              {tab === Tab.Additions && <Additions />}
            </S.Left>
          )}
          <S.Right>
            {tabs.map((t) => (
              <S.Tab key={t.tab} className={tab === t.tab ? "active" : ""}>
                <S.Head className={tab === t.tab ? "active" : ""}>
                  <Icon name={t.icon} size={28} />
                  <S.Title>{t.title}</S.Title>
                  <S.Toggle
                    disabled={tab === t.tab}
                    onClick={() => setTab(t.tab)}
                    type="button"
                  >
                    <Icon name={tab === t.tab ? Icons.Minus : Icons.Plus} />
                  </S.Toggle>
                </S.Head>
                {tab === t.tab && <S.Text>{t.text}</S.Text>}
                {isMobile && t.tab === tab && (
                  <>
                    {t.tab === Tab.Contacts && <Contacts />}
                    {t.tab === Tab.Schedule && <Schedule />}
                    {t.tab === Tab.Locations && <Locations />}
                    {t.tab === Tab.Additions && <Additions />}
                  </>
                )}
              </S.Tab>
            ))}
          </S.Right>
        </S.Inner>
      </div>
    </S.Section>
  );
};

export default Abilities;
