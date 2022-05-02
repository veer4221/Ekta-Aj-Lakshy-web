import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import React from "react";

import { useNavigate } from "react-router";

import "./donateusImg.css";
import image1 from "./suchna.png";

const Suchna = ({setOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <BrowserView>
        <div className="donateusimgPC" onClick={() => setOpen(true)}>
          <img
            src={image1}
            style={{cursor:"pointer"}}
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

export default Suchna;
