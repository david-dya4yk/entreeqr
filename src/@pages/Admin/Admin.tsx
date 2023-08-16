import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Hero } from "./Hero";
import { Interplay } from "./Interplay";
import { Abilities } from "./Abilities";
import { Faq } from "../HomePage/Faq";
import { Capability } from "../../sections";
import { Smart } from "./Smart";
import { Remote } from "./Remote";
import { Invite } from "./Invite";

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

const AdminPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Abilities />
        <Interplay />
        <Smart />
        <Remote />
        <Capability items={items} hide />
        <Invite />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
