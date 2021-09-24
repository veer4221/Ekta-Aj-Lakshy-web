import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from "react-device-detect";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Suspense, lazy, useEffect, useState } from "react";
//   import { Route, Routes } from "react-router";

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
const ProfilePage = Loadable(React.lazy(() => import("./page/ProfilePage")));
const FindJob = Loadable(React.lazy(() => import("./page/FindJob")));
const RojgharUserPanel = Loadable(
    React.lazy(() => import("./page/RojgharUserPanel"))
);
const ContectUs = Loadable(React.lazy(() => import("./page/ContectUs")));

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
const BusinessPage = Loadable(
    React.lazy(() => import("./components/RojgharTab/Business"))
);
const AboutUsSangathan = Loadable(
    React.lazy(() =>
        import("./components/HomePage/AboutUsSangathan/AboutUsSangathan")
    )
);
const HomeRoutes = () => {
    return (
        <div>
            <MobileView>
                <FloatingMenu2 />
            </MobileView>
            <Header />

            <Outlet />
        <Footer/>

        </div>
    )
}

export default HomeRoutes
