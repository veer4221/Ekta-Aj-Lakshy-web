import React from "react";
import image1 from "./donetus.png";
import "./donateusImg.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const DonetusImg = () => {
  return (
    <>
      <BrowserView>
        <div className="donateusimgPC">
          <img src={image1} alt="donetus" height="170px" width="170px" />
        </div>
      </BrowserView>
    </>
  );
};

export default DonetusImg;
