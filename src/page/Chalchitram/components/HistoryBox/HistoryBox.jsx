import "./_video.scss";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryBox = ({videoData}) => {
  const navigate = useNavigate();
  console.log('video',videoData);
  return (
    <div
      className="video"
      style={{background:"rgb(54, 54, 54)",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",margin:"20px"}}
      onClick={() => navigate(`/ChalChitram/HistoryHomeScreen/${videoData?.id}`)}
    >
      <div className="video__top">
        <LazyLoadImage src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${videoData?.history_image}`} effect="blur" style={{borderRadius:"15% 0 ",border:"2px solid white"}} />
        {/* <img src={videoData.video_image} alt="" /> */}
        {/* <span className="video__top__duration">{videoData.video_length}</span> */}
      </div>
      <div className="video__title video__channel">
        {/* <LazyLoadImage src={`assets/images/logo512.png`} effect="blur" /> */}
        {/* <img src={`assets/images/logo512.png`} alt={videoData.video_title} /> */}
        {/* {videoData.video_title} */}
       {videoData.history_title}
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

export default HistoryBox;
