import React from "react";
import "../style/HomePage.css";
import Header from "../components/layout/Header/Header";
import Carouselslider from "../components/HomePage/Carouselslider/Carouselslider";
import AboutUsSangathan from "../components/HomePage/AboutUsSangathan/AboutUsSangathan";
import MissionAndVision from "../components/HomePage/MissionAndVision/MissionAndVision";
import Shakha from "../components/HomePage/Shakha/Shakha";
import Achivemtns from "../components/HomePage/Achievemtns/Achivemtns";
import KaryKarta from "../components/HomePage/KaryKarta/KaryKarta";
import Post from "../components/HomePage/Post/Post";
import Footer from "../components/layout/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Drowerview from "../components/layout/FloatingBTN/Drowerview";
import MainTab from "../components/MainTabs/MainTab"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const HomePage = () => {
  return (
    <>
      <div >
        {/* <Header /> */}
        {/* <Drowerview/> */}
        <Carouselslider/>

        <AboutUsSangathan />
        <Post />
        <Achivemtns />
        <MissionAndVision />
        <Shakha />
        <KaryKarta />
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default HomePage;
