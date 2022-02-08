import "react-loading-skeleton/dist/skeleton.css";

import { Col, Container, Form, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import {
  getallCoures,
  getAllImagesAPI,
  UploadImagesAPI,
} from "../../../../api";
import "./style.css";

import { BiAddToQueue, BiFileFind, BiImport } from "react-icons/bi";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { convertBase64 } from "../../../../helper/base64Converter";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCloudUploadFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextTruncate from "react-text-truncate";
const UploadImages = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [isimage, setIsImage] = useState(false);
  const [category, setCategory] = React.useState("all");

  const [imageName, setimageName] = useState("");
  const [content, setContent] = useState("");
  const [payload, setPayload] = useState([]);
  const [redirectTo, setRedirectTo] = useState(false);

  const classes = useStyles();
  const url = window.location.href;
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setImage(base64);
    setIsImage(true);
  };
  const initState = () => {
    setImage("");
    setimageName("");
  };
  const pushObjFunc = () => {
    setPayload([
      {
        imageName,
        image,
        category,
      },
      ...payload,
    ]);
    initState();
  };
  const dispatch = useDispatch();
  const addPostFuncOnSubmit = async () => {
    // const v = await blobToBase64(image)
    // console.log(v)
    //     const post = {
    //       title,
    //       content,
    //       image,
    //     };
    //     const res = await createPostAPI(post);
    //     if (res.data.success == true && res.status === 200)
    //       navigate(`/ektaAdmin/PostList`);
    //     // dispatch(addPostAction(post))
    //   };}
  };
  const submitfunc = async (e) => {
    e.preventDefault();
    const res = await UploadImagesAPI({ imageData: payload });
    if (res.data.success == true && res.status === 200)
      navigate(`/ektaAdmin/GallaeryList`);
  };

  useEffect(() => {
    console.log("payload", payload);
  }, [payload]);

  return (
    <>
      <Container style={{ height: "auto" }}>
        <div className="row">
          <Col lg={6} md={6}>
            <h1>Upload images</h1>
          </Col>
          <Col lg={6} md={6} style={{ display: "flex", justifyContent: "end" }}>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/ektaAdmin/GallaeryList`)}
            >
              <IoMdArrowRoundBack />
              &nbsp;&nbsp;&nbsp;Back
            </button>
          </Col>
        </div>
        <hr></hr>
        <div className="row">
          <Col
            lg={3}
            md={3}
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
            lg={3}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              type="text"
              style={{ background: "#222020", color: "white" }}
              placeholder="ImageName"
              value={imageName}
              onChange={(e) => setimageName(e.target.value)}
              className="form-control"
            />
          </Col>
          <Col
            lg={3}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Form style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <Form.Control
                style={{ backgroundColor: "#eeeff7" }}
                type="file"
                size="lg"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </Form>
          </Col>
          <Col
            lg={3}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton
              onClick={pushObjFunc}
              disabled={image == "" || imageName == ""}
            >
              <BiImport style={{ color: "green" }} />
            </IconButton>
            <IconButton onClick={(e) => initState()}>
              <DeleteForeverIcon style={{ color: "red" }} />
            </IconButton>
            <IconButton onClick={submitfunc} disabled={payload.length == 0}>
              <BsCloudUploadFill style={{ color: "green" }} />
            </IconButton>
          </Col>
        </div>
        <hr></hr>
        <div
          className="row"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Col
            lg={6}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <LazyLoadImage
              src={image}
              height="200px"
              width="250px"
              effect="blur"
            />
          </Col>
          <Col lg={6} md={6}>
            <h6 style={{ color: "white" }}>[ Name :{imageName} ]</h6>
            <br></br>
            <h6 style={{ color: "white" }}>[ Category:{category} ]</h6>
          </Col>
        </div>
        <hr></hr>

        <div className="row">
          {payload.map((data) => (
            <>
              <Col lg={4} md={4}>
                <LazyLoadImage
                  src={data.image}
                  height="200px"
                  width="250px"
                  effect="blur"
                />
                <br></br>
                <TextTruncate
                  line={1}
                  element="p"
                  style={{ color: "white" }}
                  truncateText="..."
                  text={` [Name :${data.imageName}]`}
                />
                <TextTruncate
                  line={1}
                  element="p"
                  style={{ color: "white" }}
                  truncateText="..."
                  text={`[Category:${data.category}]`}
                />
              </Col>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default UploadImages;
