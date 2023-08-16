import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Cooperation } from "./Cooperation";
import { Design } from "./Design";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Onboarding } from "./Onboarding";
import { Possibilities } from "./Possibilities";
import { Reviews } from "./Reviews";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Possibilities />
        <Features />
        <Design
          title="Зробіть свій сайт неперевершеним"
          subTitle="Налаштування зовнішнього виду під особистий стиль."
        />
        <Cooperation />
        <Reviews />
        <Faq />
        <Onboarding />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
