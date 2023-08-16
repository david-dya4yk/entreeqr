import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Design } from "../HomePage/Design";
import { Faq } from "../HomePage/Faq";
import { Onboarding } from "../HomePage/Onboarding";
import { Advantages } from "./Advantages";
import { Facility } from "./Facility";
import { Hero } from "./Hero";
import { Peculiarity } from "./Peculiarity";
import { TakeOrders } from "./TakeOrders";

const items = [
  {
    title: (
      <>
        Сайт окупиться
        <span>за 1 день</span>
      </>
    ),
    text: "На розробку власного сайту піде багато сил. У entree ви отримаєте повний набір функцій за вартістю вечері у ресторані.",
  },
  {
    title: (
      <>
        <span>На 30% більше</span>
        замовлень
      </>
    ),
    text: `Людям подобається комфорт! Бо замовляти й оплачувати онлайн це дуже зручно.`,
  },
  {
    title: (
      <>
        <span>Збільшення</span>
        середнього чека
      </>
    ),
    text: "Добавки, рекомендації та інші фактори допоможуть у цьому. А клієнти повертатимуться до вас знову і знову.",
  },
];

const DeliveryPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TakeOrders />
        <Peculiarity />
        <Design
          title="Зробіть свій сайт неперевершеним"
          subTitle="Налаштування зовнішнього виду під особистий стиль"
        />
        <Advantages items={items} />
        <Facility />
        <Faq />
        <Onboarding />
      </main>
      <Footer />
    </>
  );
};

export default DeliveryPage;
