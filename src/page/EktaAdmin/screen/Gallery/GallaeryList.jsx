import "react-loading-skeleton/dist/skeleton.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import { getallCoures, removeImageAPI, getAllImagesAPI } from "../../../../api";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { BiFileFind } from "react-icons/bi";
import { IconButton } from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import { useNavigate } from "react-router";
const GallaeryList = () => {
  const navigate = useNavigate();
  const chalchitram = useSelector((state) => state.chalchitram);
  const [pagenumber, setPageNumber] = React.useState(1);
  const [galleryData, setgalleryData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState();
  const [limit, setLimit] = React.useState(30);
  const [category, setCategory] = React.useState("all");
  const [keyword, setKeyword] = React.useState("");
  const [onFindBtnClick, setonFindBtnClick] = React.useState(new Date());
  const dispatch = useDispatch();
  const removeImageFunc = async (id) => {
    const res = await removeImageAPI(id);
    if (res.data.success == true && res.status === 200)
      return setonFindBtnClick(new Date());
  };
  const fatchgalleryData = async () => {
    const resData = await getAllImagesAPI(category, page, limit, keyword);
    console.log("resData", resData.data);
    setCount(Math.floor(resData?.data?.count / limit + 1));
    setgalleryData(resData?.data?.rows);
  };
  useEffect(() => fatchgalleryData(), [page, limit, category, onFindBtnClick]);

  return (
    <>
      <Container style={{ height: "auto" }}>
        <div className="row">
          <Col
            lg={4}
            md={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Find"
                onChange={(e) => setKeyword(e.target.value)}
                style={{ background: "#222020", color: "white" }}
              />
            </div>
            <div>
              <IconButton onClick={(e) => setonFindBtnClick(new Date())}>
                <BiFileFind style={{ color: "red" }} />
              </IconButton>
            </div>
          </Col>
          <Col
            lg={4}
            md={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <select
              name="cars"
              className="form-control"
              style={{ background: "#222020", color: "white" }}
              id="cars"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              class="form-control formBg"
            >
              <option value="all">સમગ્ર</option>
              <option value="avedan">આવેદનપત્ર</option>
              <option value="gauseva">ગૌસેવા</option>
              <option value="gauraksh">ગૌરક્ષા</option>
              <option value="abolapashu">અબોલ પશુઓની સેવા</option>
              <option value="hindujagruti">હિન્દુ જાગૃત અભિયાન</option>
              {/* {job.getMyJob.rows.map((data) => (
              <>
                <option value={data.id}>{data.company_name}</option>
              </>
            ))} */}
            </select>
          </Col>
          <Col
            lg={4}
            md={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/ektaAdmin/UploadImages`)}
            >
              અપલોડ કરો
            </button>
          </Col>
        </div>
        <div className="row">
          {galleryData &&
            galleryData?.map((videoData) => (
              <Col lg={3} md={3}>
                <div
                  style={{
                    background: "rgb(70 71 74)",
                    margin: "20px",
                    borderRadius: "10px",
                    boxShadow:
                      "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <LazyLoadImage
                      src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${videoData?.image}`}
                      height="200px"
                      width="250px"
                      effect="blur"
                      style={{
                        borderRadius: "15% 0 ",
                        border: "2px solid white",
                      }}
                    />
                  </div>
                  {/* <img
                  src={`http://ektaejlaksh.s3-website.us-east-2.amazonaws.com/assets/images/mission/mission1.png`}
                  alt="mission"
                /> */}
                  <br></br>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextTruncate
                      line={1}
                      element="p"
                      style={{ color: "white" }}
                      truncateText="..."
                      text={videoData?.imageName}
                    />

                    <IconButton onClick={(e) => removeImageFunc(videoData?.id)}>
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </div>
                </div>
              </Col>
            ))}
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Pagination
        count={count}
        variant="outlined"
        color="primary"
        shape="rounded"
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
};

export default GallaeryList;
