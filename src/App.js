// import './App.css';
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./page/HomePage";
import "./style/aboutUsMtextView.css";
import "./style/buttoncss.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import "./style/buttoncss.css";
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
const AboutUsSangathan = Loadable(
  React.lazy(() =>
    import("./components/HomePage/AboutUsSangathan/AboutUsSangathan")
  )
);
const App = (props) => {
  return (
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
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
