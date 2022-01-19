import "react-loading-skeleton/dist/skeleton.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import Category from "../../components/category/Category";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "../../components/video/Video";
import VideoSkeleton from "../../components/video/VideoSkeleton";
import {
  cleanCategoryVideoAction,
  getAllCategoryVideoesAction,
  getAllLatestVideoesAction,
  getAllVideoesAction,
} from "../../../../Redux/Actions";
import { useParams } from "react-router";

const CategoryVideoScreen = () => {
  const chalchitram = useSelector((state) => state.chalchitram);
  const [pagenumber, setPageNumber] = React.useState(1);
  // const [isChange,setIsChange] = React.useState(new Date());
  const params = useParams();
  const dispatch = useDispatch();
  const lengthOFBox =
    chalchitram?.getCategoryVideoes?.rows.length > 10
      ? 0
      : 10 - chalchitram?.getCategoryVideoes?.rows.length;
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(1);
    dispatch(cleanCategoryVideoAction());
    dispatch(getAllCategoryVideoesAction(pagenumber, 10, params?.category));
  }, [chalchitram?.selectedCategory]);
useEffect(() => {},[pagenumber])
  const fetchData = () => {
    dispatch(getAllCategoryVideoesAction(pagenumber + 1, 10, params?.category));
    setPageNumber(pagenumber + 1);

    // setPageNumber(pagenumber + 1);
  };
  // console.log("catagory",data.category)
  return (
    <Container>
      <Category />
      {/* <Row> */}
      <InfiniteScroll
        dataLength={chalchitram?.getCategoryVideoes?.rows.length}
        next={fetchData}
        hasMore={true}
        loader={
          <>
            {/* <div className="spinner-border text-danger d-block mx-auto"></div> */}
          </>
        }
        className="row"
      >
        {chalchitram &&
          chalchitram?.getCategoryVideoes?.rows.map((videoData) => (
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
      {[...Array(12)].map(() => (
        <Col lg={3} md={4}>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </Col>
      ))}
      </InfiniteScroll>

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

export default CategoryVideoScreen;
