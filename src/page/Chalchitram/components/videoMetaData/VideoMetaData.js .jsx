import "./_videoMetaData.scss";

import { MdThumbDown, MdThumbUp } from "react-icons/md";

import React from "react";
import ShowMoreText from "react-show-more-text";
import moment from "moment";
import numeral from "numeral";

const VideoMetaData = ({ videoData }) => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{videoData?.videoData?.video_title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          {/* <span>
                  {numeral(10000).format('0.a')} Views •
                  {moment('2020-06-6').fromNow()}
               </span> */}

          {/* <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} />
                     {numeral(10000).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} />
                     {numeral(10000).format('0.a')}
                  </span>
               </div> */}
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>એકતા એજ લક્ષ્ય </span>
            <span> {videoData?.videoData?.video_category} </span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">અમારી સાથે જોડાઓ </button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {videoData?.videoData?.video_description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
