import "./_videoHorizontal.scss";

import { Col, Row } from "react-bootstrap";

import { AiFillEye } from "react-icons/ai";
import { RiBook2Fill } from "react-icons//ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

// import request from '../../api'

const VideoHorizontal = ({ videoData, setIsChange, course, courseId,history }) => {
  console.log("videoDataHR", videoData);
  const navigate = useNavigate();

  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row
      className="videoHorizontal m-1 py-2 align-align-items-center"
      onClick={() => {
        !!history
          ? navigate(
              `/ChalChitram/WatchHistoryScreen/${videoData.video_id}/${courseId}`
            )
          : !course
          ? navigate(`/ChalChitram/WatchScreen/${videoData.video_id}`)
          : navigate(
              `/ChalChitram/WatchCourseScreen/${videoData.video_id}/${courseId}`
            );
        setIsChange(new Date());
      }}
    >
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src={videoData?.video_image}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__duration">{videoData?.video_length}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          {videoData?.video_title}
          {/* Be a full stack developer in 1 month */}
        </p>
        <div className="videoHorizontal__details">
          <RiBook2Fill /> {videoData?.video_category}
        </div>

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
             
            /> */}
          <p>એકતા એજ લક્ષ્ય</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
