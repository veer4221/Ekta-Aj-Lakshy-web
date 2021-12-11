import "./_app.scss";
import "./_base.scss";

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
import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/loginscreen/LoginScreen";
import { Navigate } from "react-router";
import ShakhaScreen from "./screen/shakhaScreen/ShakhaScreen";
import Sidebar from "./components/sidebar/Sidebar";
import WatchScreen from "./screen/watchScreen/watchScreen";

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

const ChalchitramWalcomeRoute = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  //   const auth = useSelector((state) => state.auth);

  return <Outlet />;
};

export default ChalchitramWalcomeRoute;
