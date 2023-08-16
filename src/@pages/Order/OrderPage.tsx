import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Peculiarity } from "../Delivery/Peculiarity";
import { Design } from "../HomePage/Design";
import { Faq } from "../HomePage/Faq";
import { Advantages } from "./Advantages";
import { Introduction } from "./Introduction";
import { Order } from "./Order";

const OrderPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Order />
        <Introduction />
        <Advantages />
        <Peculiarity />
        <Design
          title="Зробіть свій сайт неперевершеним"
          subTitle="Налаштування зовнішнього виду під особистий стиль."
        />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
