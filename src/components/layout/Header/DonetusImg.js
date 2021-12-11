import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import React from "react";

import { useNavigate } from "react-router";

import "./donateusImg.css";
import image1 from "./donetus.png";

const DonetusImg = () => {
  const navigate = useNavigate();

  return (
    <>
      <BrowserView>
        <div className="donateusimgPC" onClick={() => navigate("/DonateUs")}>
          <img
            src={image1}
            alt="donetus"
            className="imgTagForPC"
            height="170px"
            width="170px"
          />
        </div>
      </BrowserView>
    </>
  );
};

export default DonetusImg;
