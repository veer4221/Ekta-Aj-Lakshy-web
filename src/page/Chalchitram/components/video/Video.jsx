import "./_video.scss";

import { AiFillEye } from "react-icons/ai";
import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://img.youtube.com/vi/rL7V7bA_wvA/sddefault.jpg"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title video__channel">
        <img src={`assets/images/logo512.png`} alt="" />
        Create app in 5 minutes #made by Chintu
      </div>
      {/* <div className="video__details">
        <span>
          <AiFillEye />
        </span>
        <span>Category</span>
      </div> */}
      <div className="video__channel">
        <p>Ekta EJ Laksh</p>
      </div>
    </div>
  );
};

export default Video;
