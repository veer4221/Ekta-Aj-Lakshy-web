import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import TablePagination from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import { Form, Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useNavigate } from "react-router";


import { useEffect } from "react";
// import { convertBase64, blobToBase64 } from '../../helper/base64Converter'
import { convertBase64 } from "../../../../../helper/base64Converter";
import { createCourseAPI, createPostAPI } from "../../../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function CreateCourse() {
    const navigate = useNavigate()
  const [image, setImage] = useState();
  const [isimage, setIsImage] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [course_title, setcourse_title] = useState(false);


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

  const dispatch = useDispatch();
  const addPostFuncOnSubmit = async () => {
    // const v = await blobToBase64(image)
    // console.log(v)
    const payload = {
     
      course_title,
      image,
    };

    const res = await createCourseAPI(payload);
    if (res.data.success == true && res.status === 200)
      navigate(`/ektaAdmin/CourseList`);
    // dispatch(addPostAction(post))
  };

  const submitfunc = (e) => {
    e.preventDefault();

    addPostFuncOnSubmit();
  };

  return (
    <div className={classes.root}>
      <Form
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
        onSubmit={submitfunc}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <h4 style={{ color: "grey", paddingLeft: "10px", width: "50%" }}>
                Create Course
              </h4>
              <div
                style={{
                  textAlign: "right",
                  width: "50%",
                  paddingRight: "10px",
                }}
              >
                <Button variant="success">
                  <ArrowBackIcon />
                  Back
                </Button>
              </div>
            </div>
            <br></br>
            <Divider />
            <div style={{ width: "90%", textAlign: "right" }}>
              {/* <TextField style={{ paddingRight: '10px' }} id="standard-basic" label="Search" /> */}
            </div>
          </Grid>
          <Grid item xs={8}>
            <Form style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {" "}
                <Form.Label style={{ color: "#4153a4" }}>Course Titel</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#eeeff7" }}
                  type="text"
                  placeholder="name@example.com"
                  onChange={(e) => setcourse_title(e.target.value)}
                />
              </Form.Group>
           
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label style={{ color: "#4153a4" }}>
              Select Poster
                </Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#eeeff7" }}
                  type="file"
                  size="lg"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ border: "1px solid black" }}
              src={image}
              alt="veer"
              width="300px"
              height="300px"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="success"
                type="submit"
                style={{ margin: "10px" }}
              >
                create
              </Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
