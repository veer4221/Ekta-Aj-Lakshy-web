import "./watchScreen.scss";

import { Col, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import Comments from "../../components/comment/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoHorizontalSc from "../../components/videoHorizontal/VideoHorizontalSc";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData.js ";
import { getVideoByIdAPI } from "./../../../../api/index";

const WatchScreen = () => {
  const [videoData, setVideoData] = React.useState({});
  const [url, setUrl] = React.useState();
  const [isChange, setIsChange] = React.useState(new Date());
  const [isLoading, setIsLoading] = React.useState(false);
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const videoID = getLastItem(window.location.href);
  const fatchVideo = async () => {
    try {
      setIsLoading(true);
      const res = await getVideoByIdAPI(getLastItem(window.location.href));
      setIsLoading(false);

      console.log("url", res.data.video_url);
      setUrl(res.data.video_url);
      if (!!res && res.status == 200 && res.data.success == true)
        return setVideoData(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(async () => {
    window.scrollTo(0, 0);
    await fatchVideo();
  }, [isChange]);
  return (
    <>
      <Row>
        <Col lg={8}>
          {/* {url && ( */}
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
              allow="autoplay"
              // src={url}
              frameBorder="0"
              title="MY VIDEO"
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
          {/* )} */}

          <VideoMetaData videoData={videoData} isLoading={isLoading} />
          {/* <Comments /> */}
        </Col>
        <Col lg={4}>
          {!!videoData &&
            videoData?.randomVideo?.rows.map((videoData) => (
              <VideoHorizontal
                setIsChange={setIsChange}
                videoData={videoData}
              />
            ))}
          {isLoading &&
            [...Array(20)].map(() => (
              <VideoHorizontalSc
                setIsChange={setIsChange}
                videoData={videoData}
              />
            ))}
        </Col>
      </Row>
    </>
  );
};

export default WatchScreen;
