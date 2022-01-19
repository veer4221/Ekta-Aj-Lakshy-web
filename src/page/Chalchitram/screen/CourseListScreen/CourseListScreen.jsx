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
import CourseBox from "../../components/courseBox/CourseBox";
import { getallCoures } from "../../../../api";
import "./style.css"
const CourseListScreen = () => {
  const chalchitram = useSelector((state) => state.chalchitram);
  const [pagenumber, setPageNumber] = React.useState(1);
  const [course, setCourse] = React.useState();
  const dispatch = useDispatch();
  const fatchCourse = async () => setCourse(await getallCoures());
  useEffect(() => fatchCourse(), []);

  const fetchData = () => {
    dispatch(getAllVideoesAction(pagenumber + 1, 10));
    setPageNumber(pagenumber + 1);

    // setPageNumber(pagenumber + 1);
  };
 
  return (
    <Container style={{height: 'auto'}}>
      {/* <Category /> */}
      <div
        className="row"
      >
        {course &&
          course?.data?.rows.map((videoData) => (
            <Col lg={4} md={4}>
              {/* <img src={`http://ektaejlaksh.s3-website.us-east-2.amazonaws.com/assets/images/mission/mission1.png`}/> */}
              <CourseBox  videoData={videoData} />
            </Col>
          ))}
        {chalchitram.loading == true &&
          [...Array(5)].map(() => (
            <Col lg={4} md={4}>
              <VideoSkeleton />
            </Col>
          ))}
            {[...Array(0)].map(() => (
            <Col lg={4} md={4}>
              {/* <VideoSkeleton /> */}
              <div style={{height: '100%',width: '100%'}}>
              {[...Array(0)].map(()=><br/>)}
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>c */}
              </div>
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

export default CourseListScreen;
