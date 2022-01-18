import "./watchScreen.scss";

import { Col, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import Comments from "../../components/comment/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoHorizontalSc from "../../components/videoHorizontal/VideoHorizontalSc";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData.js ";
import { getCourseVideoByIdAPI, getHistoryVideoByIdAPI, getVideoByIdAPI } from "../../../../api/index";

import { useDispatch, useSelector } from "react-redux";

const WatchScreenForHistory = () => {
  const chalchitram = useSelector((state) => state.chalchitram);

  const [videoData, setVideoData] = React.useState({});
  const [episods, setEpisods] = React.useState([]);
  const [url, setUrl] = React.useState();
  const [isChange, setIsChange] = React.useState(new Date());
  const [isLoading, setIsLoading] = React.useState(false);
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);

  const videoID = getLastItem(window.location.href);
  console.log("getLastItem", videoID);

  console.log("second last", window.location.href.split("/").slice(-2)[0]);
  const fatchVideo = async () => {
    try {
      setIsLoading(true);
      const res = await getHistoryVideoByIdAPI(
        window.location.href.split("/").slice(-2)[0],
        videoID
      );
      setIsLoading(false);

      console.log("url", res.data.video_url);
      setUrl(res.data.video_url);
      if (!!res && res.status == 200 && res.data.success == true) {
        console.log("res::", res?.data);

        setVideoData({videoData:res?.data?.videoData});
        setEpisods(res?.data?.episods);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(async () => {
    window.scrollTo(0, 0);
    await fatchVideo();
  }, [isChange]);
  console.log("videoData",videoData)
  console.log("episods",episods)
  return (
    <>
      <Row>
        <Col lg={8}>
          {/* {url && ( */}
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${
                window.location.href.split("/").slice(-2)[0]
              }?autoplay=1`}
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
          {!!episods &&
            episods?.rows?.length > 0 &&
            episods?.rows[0]?.ektaVideos.map((videoData) => (
              <VideoHorizontal
                history={true}
                courseId ={getLastItem(window.location.href)}
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

export default WatchScreenForHistory;
