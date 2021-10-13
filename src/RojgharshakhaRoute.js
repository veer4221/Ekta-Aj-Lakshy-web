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
import {Navigate}from "react-router"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//   import { Route, Routes } from "react-router";

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
);

const Navbar = Loadable(
    React.lazy(() => import("./components/layout/Rojghar/Navbhar"))
);


const RojgharshakhaRoute = () =>{
    const auth = localStorage.getItem("token");
//   const auth = useSelector((state) => state.auth);

    return (
        <div>
           <Navbar/>

          {auth?  <Outlet />:<Navigate to="/auth/login" />}
        
        </div>
    )
}

export default RojgharshakhaRoute
