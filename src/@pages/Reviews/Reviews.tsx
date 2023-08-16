import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Hero } from "./Hero";
import { Service } from "./Service";
import { Communication } from "./Communication";
import { Advantages } from "./Advantages";
import { Capability } from "../../sections";
import { Faq } from "../HomePage/Faq";
import { Onboarding } from "../HomePage/Onboarding";
import { Respond } from "./Respond";

const items = [
  {
    id: 1,
    title: "Сайт доставки",
    text: "Сучасний сайт та меню для вашого закладу",
    to: "/delivery",
  },
  {
    id: 2,
    title: "Замовлення до столу",
    text: "Легкий спосіб замовлення та оплати у закладі",
    to: "/order",
  },
  {
    id: 3,
    title: "Резервації столів",
    text: "Онлайн бронювання столів для клієнтів",
    to: "/booking",
  },
  {
    id: 4,
    title: "Кастомізація сайту",
    text: "Зробіть фірмовий вигляд для сайту вашого закладу",
    to: "/appearance",
  },
];

const ReviewsPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
        <Communication />
        <Advantages />
        <Capability items={items} />
        <Faq />
        <Onboarding />
        <Respond />
      </main>
      <Footer />
    </>
  );
};

export default ReviewsPage;
