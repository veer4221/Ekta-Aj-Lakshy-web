import "react-loading-skeleton/dist/skeleton.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import Category from "../../components/category/Category";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "../../components/video/Video";
import VideoSkeleton from "../../components/video/VideoSkeleton";
import { getAllVideoesAction } from "../../../../Redux/Actions";
import HistoryBox from "../../components/HistoryBox/HistoryBox";
import { getallCoures, getallHistory } from "../../../../api";

const HistoryListScreen = () => {
  const chalchitram = useSelector((state) => state.chalchitram);
  const [pagenumber, setPageNumber] = React.useState(1);
  const [History, setHistory] = React.useState();
  const dispatch = useDispatch();
  const fatchHistory = async () => setHistory(await getallHistory());
  useEffect(() => fatchHistory(), []);

  const fetchData = () => {
    dispatch(getAllVideoesAction(pagenumber + 1, 10));
    setPageNumber(pagenumber + 1);

    // setPageNumber(pagenumber + 1);
  };
 
  return (
    <Container>
      {/* <Category /> */}
      <div
        className="row"
      >
        {History &&
          History?.data?.rows.map((videoData) => (
            <Col lg={4} md={4}>
              {/* <img src={`http://ektaejlaksh.s3-website.us-east-2.amazonaws.com/assets/images/mission/mission1.png`}/> */}
              <HistoryBox  videoData={videoData} />
            </Col>
          ))}
        {chalchitram.loading == true &&
          [...Array(5)].map(() => (
            <Col lg={3} md={4}>
              <VideoSkeleton />
            </Col>
          ))}
      </div>
      {/* {[...Array(10)].map(() => (
          <Col lg={3} md={4}>
            <VideoSkeleton />sssssss
          </Col>
        ))}
        <Col lg={3} md={4}></Col>
      </Row>{" "} */}
    </Container>
  );
};

export default HistoryListScreen;
