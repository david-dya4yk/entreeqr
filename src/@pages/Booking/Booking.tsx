import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Hero } from "./Hero";
import { Service } from "./Service";
import { Advantages } from "./Advantages";
import { Capability } from "../../sections";
import { Faq } from "../HomePage/Faq";

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
    title: "Відгуки онлайн",
    text: "Онлайн відугки для клієнтів",
    to: "/reviews",
  },
  {
    id: 4,
    title: "Кастомізація сайту",
    text: "Зробіть фірмовий вигляд для сайту вашого закладу",
    to: "/appearance",
  },
];

const BookingPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
        <Advantages />
        <Capability items={items} />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
