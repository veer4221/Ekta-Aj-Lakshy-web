import "./_video.scss";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { AiFillEye } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="video" style={{ width: "100%" }}>
          <Skeleton style={{ width: "100%", height: "145px" }} />
          <div
            className="mt-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Skeleton
              width={35}
              height={35}
              style={{ width: "20%" }}
              circle={true}
            />
            <span>&nbsp;&nbsp;&nbsp;</span>
            <p>
              <Skeleton count={2} />
            </p>
          </div>
          <p style={{ marginTop: "-17px" }}>
            <Skeleton style={{ width: "100%" }} />
          </p>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default VideoSkeleton;

//  <div className="video">
//       <div className="video__top">
//         <Skeleton width={100} />
//         <Skeleton height={100} />

//         {/* <img src={videoData.video_image} alt="" />
//         <span>{videoData.video_length}</span> */}
//       </div>
//       <div className="video__title video__channel">
//         {/* <img src={`assets/images/logo512.png`} alt={videoData.video_title} /> */}
//         {/* {videoData.video_title} */}
//       </div>
//       {/* <div className="video__details">
//         <span>
//           <AiFillEye />
//         </span>
//         <span>Category</span>
//       </div> */}
//       <div className="video__channel">{/* <p>Ekta EJ Laksh</p> */}</div>
//     </div>
// //
