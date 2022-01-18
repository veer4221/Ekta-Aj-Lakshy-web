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
import Splash from "./loader/Splash";
const Carouselslider = lazy(() =>
  import("../components/HomePage/Carouselslider/Carouselslider")
);
const RojgharHome = lazy(() =>
  import("../components/HomePage/Rojghar/RojgharHome")
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
  const [loaging,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Drowerview/> */}
        <Splash loading={loaging}/>

        <Suspense fallback={<Splash loading={true}/>}>
          <Carouselslider />
        </Suspense>
        <Suspense fallback={<Splash loading={true}/>}>
          <RojgharHome />
        </Suspense>
        <Suspense fallback={<Splash loading={true}/>}>
          <MissionAndVision />
        </Suspense>
        <Suspense fallback={<Splash loading={true}/>}>
          <Achivemtns />
        </Suspense>
        <Suspense fallback={<Splash loading={true}/>}>
          <Shakha />
        </Suspense>
        <Suspense fallback={<Splash loading={true}/>}>
          <KaryKarta />
        </Suspense>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default HomePage;
