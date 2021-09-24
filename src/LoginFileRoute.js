

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



const LoginFileRoute = () => {
    return (
        <div>
           

            <Outlet />
        
        </div>
    )
}

export default LoginFileRoute
