import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC } from "react";
import { Rate } from "./Rate";
import { Details } from "./Details";
import { Communication } from "./Communication";
import { Faq } from "../HomePage/Faq";

const PricingPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Rate />
        <Details />
        <Communication />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
