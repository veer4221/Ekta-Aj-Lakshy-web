// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/aboutUsMtextView.css";
import "./style/buttoncss.css";
import "./style/buttoncss.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import Loader from "./page/loader/Loader";

// import HomePage from "./page/HomePage";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
const AboutUsPage = Loadable(
  React.lazy(() => import("./components/AboutUs/AboutUsPage"))
);
const DoneteUs = Loadable(React.lazy(() => import("./page/DoneteUs")));
const HomePage = Loadable(React.lazy(() => import("./page/HomePage")));
const ContectUs = Loadable(React.lazy(() => import("./page/ContectUs")));
const RojgarResult = Loadable(React.lazy(() => import("./page/RojgarResult")));
const Rojgar = Loadable(React.lazy(() => import("./page/Rojghar")));
const News = Loadable(React.lazy(() => import("./page/News")));
const Header = Loadable(
  React.lazy(() => import("./components/layout/Header/Header"))
);
const Footer = Loadable(
  React.lazy(() => import("./components/layout/Footer/Footer"))
);
const Gallery = Loadable(React.lazy(() => import("./page/Gallery")));

const FloatingMenu2 = Loadable(
  React.lazy(() => import("./components/layout/FloatingBTN/FloatingMenu2"))
);
const BusinessPage = Loadable(
  React.lazy(() => import("./components/RojgharTab/Business"))
);
const AboutUsSangathan = Loadable(
  React.lazy(() =>
    import("./components/HomePage/AboutUsSangathan/AboutUsSangathan")
  )
);
const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? <Loader /> : ``}
      <div className="App">
        <MobileView>
          <FloatingMenu2 />
        </MobileView>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/DonateUs" element={<DoneteUs />} />
          <Route path="/ContectUs" element={<ContectUs />} />
          <Route path="/RojgharResult" element={<RojgarResult />} />
          <Route path="/Rojghar" element={<Rojgar />} />
          <Route path="/BusinessPage" element={<BusinessPage />} />
          <Route path="/jobPage" element={<BusinessPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
