

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
import "./style.scss"
import { getTextAPI, textEditAPI } from '../../../api';
import khidki from "./khidki.png"
import { popupSucessAndConformationAlert } from '../../../helper/sweetAlerts';
//   import { Route, Routes } from "react-router";

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
);



const KhidkiRoute = () => {
    const [message, setmessage] = useState();
    const [userId, setuserId] = useState();
    const [password, setpassword] = useState();
    const [permission, setpermission] = useState(false);
    const sendMessage = async () => {
        const res = await textEditAPI({ massage: message })
    }
    useEffect(async () => {
        if (permission) {
            const res = await getTextAPI()
            console.log("res", res?.data?.text?.massage)
            setmessage(res?.data?.text?.massage)
        }

    }, [permission])
    return (
        <div className="d-flex justify-content-center  bg-edittor  p-3" style={{ width: "100%" }}>

            {!permission ? <div style={{ height: "60vh", width: "60vh", background: "#000000cc" }} className="p-2">
                <img src={khidki} height="100px" width="800px" />
                <label class="form-label" for="label">User Id : </label>
                <input type="text" className="form-control" value={userId} onChange={(e) => setuserId(e.target.value)} />
                <label class="form-label" for="label">Password : </label>
                <input type="password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                <button className="btn d-flex justify-content-end " style={{ backgroundColor: "#06561fb5", color: "white", border: "2px solid black" }} onClick={() => {
                    if (password.trim() == "pv1003" && userId.trim() == "jiv") {
                        popupSucessAndConformationAlert(true, "wolcome jiv 😃 ");
                        return setpermission(true)
                    }
                    return popupSucessAndConformationAlert(false, "password ane userid sachanakho 😃 ");

                }}>Verify</button>
            </div>
                : <div >
                    <img src={khidki} height="50px" width="200px" />
                    <div className="p-3">
                        <textarea className="sticky-note" style={{ border: "4px solid  black" }} value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
                    </div>
                    <div style={{ white: "100%" }} className="d-flex ">
                        <button className="btn d-flex justify-content-end ml-4" style={{ backgroundColor: "#06561fb5", color: "white", border: "2px solid black" }} onClick={() => sendMessage()}>Send</button>
                        <button className="btn d-flex justify-content-end ml-4" style={{ backgroundColor: "#06561fb5", color: "white", border: "2px solid black" }} onClick={() => {
                            setuserId("")
                            setpassword("")
                            setpermission(false)
                        }}>Back</button>
                    </div>
                    <Outlet />
                </div>}
        </div>
    )
}

export default KhidkiRoute
