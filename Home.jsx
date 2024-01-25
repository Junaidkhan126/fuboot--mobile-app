import React from "react";
import Main from "../components/Main";
import Static from "../components/Static";
import Aboutext from "../components/Aboutext";
import FewCard from "../components/FewCard";
import Features from "../components/Features";
import CardSection from "../components/CardSection";
import Faq from "../components/Faq";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <br />
      <Main />
      <Aboutext />
      <Static />
      <FewCard />
      <Features />
      <CardSection />
      <Faq />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;
