import "./_videoHorizontal.scss";

import { Col, Row } from "react-bootstrap";

import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// import request from '../../api'

const VideoHorizontalSc = ({ videoData, setIsChange }) => {
  const navigate = useNavigate();

  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Row
        className="videoHorizontal m-1 py-2 align-align-items-center"
        onClick={() => {
          navigate(`/ChalChitram/WatchScreen/${videoData.video_id}`);
          setIsChange(new Date());
        }}
      >
        <Col xs={6} md={4} className="videoHorizontal__left">
          {/* <LazyLoadImage
            src={videoData?.video_image}
            effect="blur"
            className="videoHorizontal__thumbnail"
            wrapperClassName="videoHorizontal__thumbnail-wrapper"
          />
          <span className="video__duration">{videoData?.video_length}</span> */}
          <Skeleton style={{ width: "100%", height: "70px" }} />

        </Col>
        <Col xs={6} md={8} className="videoHorizontal__right p-0">
          <p className="videoHorizontal__title mb-1">
            {/* Be a full stack developer in 1 month */}
            <Skeleton style={{ width: "100%" }} />

          </p>
          <div className="videoHorizontal__details">
            {/* <AiFillEye /> {numeral(1000000).format("0.a")} Views •
            {moment("2020-06-09").fromNow()} */}
            <Skeleton  style={{ width: "100%" }} />

          </div>

            <Skeleton style={{ width: "100%" }}/>
          <div className="videoHorizontal__channel d-flex align-items-center my-1">
            {/* <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
             
            /> */}

            {/* <p>Backbench Coder</p> */}
          </div>
        </Col>
      </Row>
    </SkeletonTheme>
  );
};

export default VideoHorizontalSc;
