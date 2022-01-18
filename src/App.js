// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./main.css";
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

import Business from "./page/Business";
import BusinessInformation from "./page/BusinessInformation";
import ChalchitramRoute from "./page/Chalchitram/ChalchitramRoute";
import ChalchitramWalcomeRoute from "./page/Chalchitram/ChalchitramWalcomeRoute";
import HomeRoutes from "./HomeRoutes";
import HomeScreen from "./page/Chalchitram/screen/homeScreen/HomeScreen";
import Loader from "./page/loader/Loader";
import LoginFileRoute from "./LoginFileRoute";
import LoginPage from "./page/LoginPage";
import LoginScreen from "./page/Chalchitram/screen/loginscreen/LoginScreen";
import { Outlet } from "react-router-dom";
import RojgharshakhaRoute from "./RojgharshakhaRoute";
import ShakhaScreen from "./page/Chalchitram/screen/shakhaScreen/ShakhaScreen";
import WatchScreen from "./page/Chalchitram/screen/watchScreen/watchScreen";
import AbhyasScreen from "./page/Chalchitram/screen/AbhyasScreen/AbhyasScreen";
import CourseListScreen from "./page/Chalchitram/screen/CourseListScreen/CourseListScreen";
import HistoryScreen from "./page/Chalchitram/screen/HistoryScreen/HistoryScreen";
import CourseInfoScreen from "./page/Chalchitram/screen/CourseInfoScreen/CourseInfoScreen";
import CourseHomeScreen from "./page/Chalchitram/screen/CourseHomeScreen/CourseHomeScreen";
import WatchScreenForCourse from "./page/Chalchitram/screen/watchScreenForCourse/watchScreenForCourse";
import HistoryListScreen from "./page/Chalchitram/screen/HistoryListScreen/CourseListScreen";
import HistoryHomeScreen from "./page/Chalchitram/screen/HistoryHomeScreen/HistoryHomeScreen";
import WatchScreenForHistory from "./page/Chalchitram/screen/watchScreenForHistory/watchScreenForHistory";

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
const ViewJob = Loadable(
  React.lazy(() => import("./page/RojgarModule/ViewJob.js"))
);
const ViewUser = Loadable(
  React.lazy(() => import("./page/RojgarModule/ViewUser"))
);
const BusinessPage = Loadable(
  React.lazy(() => import("./page/RojgarModule/business"))
);
const DoneteUs = Loadable(React.lazy(() => import("./page/DoneteUs")));
const HomePage = Loadable(React.lazy(() => import("./page/HomePage")));
const ProfilePage = Loadable(React.lazy(() => import("./page/ProfilePage")));
const FindJob = Loadable(React.lazy(() => import("./page/FindJob")));
const HireForm = Loadable(
  React.lazy(() => import("./page/RojgarModule/HireForm"))
);
const HireMain = Loadable(
  React.lazy(() => import("./page/RojgarModule/HireMain"))
);
const RojgharUserPanel = Loadable(
  React.lazy(() => import("./page/RojgharUserPanel"))
);
const ContectUs = Loadable(React.lazy(() => import("./page/ContectUs")));
// const RojgharMainPage = Loadable(
//   React.lazy(() => import("./page/RojgharMainPage"))
// );
const Rojgar = Loadable(React.lazy(() => import("./page/Rojghar")));
const News = Loadable(React.lazy(() => import("./page/News")));
const Header = Loadable(
  React.lazy(() => import("./components/layout/Header/Header"))
);
const LoginRojghar = Loadable(React.lazy(() => import("./page/LoginRojghar")));
const Footer = Loadable(
  React.lazy(() => import("./components/layout/Footer/Footer"))
);
const Gallery = Loadable(React.lazy(() => import("./page/Gallery")));

const FloatingMenu2 = Loadable(
  React.lazy(() => import("./components/layout/FloatingBTN/FloatingMenu2"))
);
// const BusinessPage = Loadable(
//   React.lazy(() => import("./components/RojgharTab/Business"))
// );
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
      <div className="App" >
        <Routes>
          <Route path="/" element={<HomeRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="/News" element={<News />} />
            <Route path="/DonateUs" element={<DoneteUs />} />
            <Route path="/ContectUs" element={<ContectUs />} />
            {/* <Route path="/RojgharResult" element={<RojgharMainPage />} /> */}
            <Route path="/Rojghar" element={<Rojgar />} />
            <Route path="/BusinessPage" element={<BusinessPage />} />
            <Route path="/jobPage" element={<BusinessPage />} />
            <Route path="/LoginRojghar" element={<LoginRojghar />} />

            <Route path="/rojghar/userpanel" element={<RojgharUserPanel />} />
            <Route path="/rojghar/ProfilePage" element={<ProfilePage />} />
            <Route path="/rojghar/FindJobPage" element={<FindJob />} />
          </Route>

          <Route path="/Rojgharmain" element={<RojgharshakhaRoute />}>
            <Route path="/findJob" element={<FindJob />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/Hire" element={<HireMain />} />
            <Route path="/HireForm" element={<HireForm />} />
            <Route path="/BusinessPage" element={<BusinessPage />} />
            <Route path="/BusinessInfo" element={<BusinessInformation />} />
            <Route path="/viewJob" element={<ViewJob />} />
            <Route path="/viewUser" element={<ViewUser />} />
            <Route path="/Business" element={<Business />} />
          </Route>
          <Route path="/auth" element={<LoginFileRoute />}>
            <Route path="/Login" element={<LoginPage />} />
          </Route>
          <Route path="/Chalchitram" element={<ChalchitramWalcomeRoute />}>
            <Route path="/" element={<LoginScreen />} />
          </Route>
          <Route path="/ChalChitram" element={<ChalchitramRoute />}>
            <Route path="/Home" element={<HomeScreen />} />
            <Route path="/CourseHomeScreen/:id" element={<CourseHomeScreen />} />
            <Route path="/HistoryHomeScreen/:id" element={<HistoryHomeScreen />} />
            <Route path="/Shakha" element={<ShakhaScreen />} />
            <Route path="/Syllabus" element={<AbhyasScreen />} />
            <Route path="/importantVideo" element={<HomeScreen />} />
            <Route path="/NewVideo" element={<HomeScreen />} />
            <Route path="/History" element={<HistoryScreen />} />
            <Route path="/WatchScreen/:id" element={<WatchScreen />} />
            <Route path="/WatchCourseScreen/:id/:course_id" element={<WatchScreenForCourse />} />
            <Route path="/WatchHistoryScreen/:id/:history_id" element={<WatchScreenForHistory />} />
            <Route path="/CourseList" element={<CourseListScreen />} />
            <Route path="/HistoryList" element={<HistoryListScreen />} />
            <Route path="/CourseInfoScreen/" element={<CourseInfoScreen />} />
          </Route>
        </Routes>
        {/* <Footer/> */}
        {/* <MobileView>
          <FloatingMenu2  />
        </MobileView>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/DonateUs" element={<DoneteUs />} />
          <Route path="/ContectUs" element={<ContectUs />} />
          <Route path="/RojgharResult" element={<RojgharMainPage />} />
          <Route path="/Rojghar" element={<Rojgar />} />
          <Route path="/BusinessPage" element={<BusinessPage />} />
          <Route path="/jobPage" element={<BusinessPage />} />
          <Route path="/LoginRojghar" element={<LoginRojghar />} />

          <Route path="/rojghar/userpanel" element={<RojgharUserPanel />} />
          <Route path="/rojghar/ProfilePage" element={<ProfilePage />} />
          <Route path="/rojghar/FindJobPage" element={<FindJob />} />
        </Routes>

        <Footer /> */}
      </div>
    </>
  );
};

export default App;
