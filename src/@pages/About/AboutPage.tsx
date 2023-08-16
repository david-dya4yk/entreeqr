import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Onboarding } from "../HomePage/Onboarding";
import { Capability } from "../../sections";
import { Hero } from "./Hero";
import { Interaction } from "./Interaction";
import { Objectives } from "./Objectives";

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
    title: "Відгуки онлайн",
    text: "Онлайн відугки для клієнтів",
    to: "/reviews",
  },
];

const AboutPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Objectives />
        <Interaction />
        <Capability items={items} />
        <Onboarding />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
