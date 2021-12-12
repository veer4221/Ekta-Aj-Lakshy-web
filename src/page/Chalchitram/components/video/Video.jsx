import "./_video.scss";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { useNavigate } from "react-router-dom";

const Video = ({ videoData }) => {
  const navigate = useNavigate();
  return (
    <div
      className="video"
      onClick={() => navigate(`/ChalChitram/WatchScreen/${videoData.video_id}`)}
    >
      <div className="video__top">
        <LazyLoadImage src={videoData.video_image} effect="blur" />
        {/* <img src={videoData.video_image} alt="" /> */}
        <span className="video__top__duration">{videoData.video_length}</span>
      </div>
      <div className="video__title video__channel">
        <LazyLoadImage src={`assets/images/logo512.png`} effect="blur" />
        {/* <img src={`assets/images/logo512.png`} alt={videoData.video_title} /> */}
        {videoData.video_title}
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
