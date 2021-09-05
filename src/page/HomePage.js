import React, { lazy, Suspense, useEffect, useState } from "react";
import "../style/HomePage.css";
// import { useDispatch, useSelector } from "react-redux";

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Drowerview from "../components/layout/FloatingBTN/Drowerview";
import MainTab from "../components/MainTabs/MainTab";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Loader from "./loader/Loader";
const Carouselslider = lazy(() =>
  import("../components/HomePage/Carouselslider/Carouselslider")
);
const AboutUsSangathan = lazy(() =>
  import("../components/HomePage/AboutUsSangathan/AboutUsSangathan")
);
const MissionAndVision = lazy(() =>
  import("../components/HomePage/MissionAndVision/MissionAndVision")
);
const Shakha = lazy(() => import("../components/HomePage/Shakha/Shakha"));
const Achivemtns = lazy(() =>
  import("../components/HomePage/Achievemtns/Achivemtns")
);
const KaryKarta = lazy(() =>
  import("../components/HomePage/KaryKarta/KaryKarta")
);
const Post = lazy(() => import("../components/HomePage/Post/Post"));
const HomePage = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Drowerview/> */}

        <Suspense fallback={<div>Loading...</div>}>
          <Carouselslider />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutUsSangathan />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MissionAndVision />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Achivemtns />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Shakha />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <KaryKarta />
        </Suspense>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default HomePage;
