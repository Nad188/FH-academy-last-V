import React from "react";
import InfoSection from "../Components/MainPage/AboutSection";
import { ObjOne } from "../Components/MainPage/AboutSection/Data";
import Footer from "../Components/MainPage/Footer";
import HomeNavbar from "../Components/MainPage/HomeNavbar";
import MainSection from "../Components/MainPage/MainSection";
import ServiceSection from "../Components/MainPage/ServiceSection";


const Home = () => {
  return (
    <>
      <HomeNavbar />
      <MainSection />
      <InfoSection {...ObjOne} />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Home;
