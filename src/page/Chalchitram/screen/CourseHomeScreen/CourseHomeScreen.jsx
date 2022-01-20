import "react-loading-skeleton/dist/skeleton.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import Category from "../../components/category/Category";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "../../components/video/Video";
import VideoSkeleton from "../../components/video/VideoSkeleton";
import { getAllVideoesAction, getCourseVideoesAction } from "../../../../Redux/Actions";

const CourseHomeScreen = () => {
  const chalchitram = useSelector((state) => state.chalchitram);
  const [pagenumber, setPageNumber] = React.useState(1);
  const dispatch = useDispatch();
  const getLastItem = (thePath) =>
  thePath.substring(thePath.lastIndexOf("/") + 1);
  const courseId=getLastItem(window.location.href)
  useEffect(() => {
    dispatch(getCourseVideoesAction(courseId,pagenumber, 10));
  }, []);

  const fetchData = () => {
    dispatch(getCourseVideoesAction(courseId,pagenumber + 1, 10));
    setPageNumber(pagenumber + 1);

    // setPageNumber(pagenumber + 1);
  };

  return (
    <Container>
      {/* <Category /> */}
      <Row>
      {/* course */}
      {/* <InfiniteScroll
        dataLength={chalchitram?.getCourseVideo?.rows.length}
        next={fetchData}
        hasMore={true}
        loader={
          <>
            {/* <div className="spinner-border text-danger d-block mx-auto"></div> */}
          {/* </> */}
        {/* } */}
        {/* className="row" */}
      {/* > */} 
        {chalchitram&&chalchitram?.getCourseVideo?.rows &&
          chalchitram?.getCourseVideo?.rows[0]?.ektaVideos.map((videoData) => (
            <Col lg={3} md={4}>
              <Video videoData={videoData} key={videoData.id} />
            </Col>
          ))}
        {chalchitram.loading == true &&
          [...Array(12)].map(() => (
            <Col lg={3} md={4}>
              <VideoSkeleton />
            </Col>
          ))}
           {/* { [...Array(12)].map(() => (
            <Col lg={3} md={4}>
              <VideoSkeleton />
            
            </Col>
          ))} */}
          </Row>
      {/* </InfiniteScroll> */}
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

export default CourseHomeScreen;
