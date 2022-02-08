import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import React, { useEffect, useState } from "react";
import { Suspense, lazy } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";

import { Navigate } from "react-router";

import "./_app.scss";
import "./_base.scss";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

//   import { Route, Routes } from "react-router";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

// const Navbar = Loadable(
//   React.lazy(() => import("./components/layout/Rojghar/Navbhar"))
// );

const EktaAdminRoute = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  const authAdmin = localStorage.getItem("adminToken");
  //   const auth = useSelector((state) => state.auth);

  return (
    <>
      {authAdmin ? (
        <div className="body">
          <Header handleToggleSidebar={handleToggleSidebar} />
          <div className="app__container">
            <Sidebar
              sidebar={sidebar}
              handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className="app__main bg-chalchitram">
              <Outlet />
              {/* <HomeScreen /> */}
              {/* <WatchScreen /> */}
              {/* <ShakhaScreen /> */}
            </Container>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
    // <LoginScreen />
  );
};

export default EktaAdminRoute;
