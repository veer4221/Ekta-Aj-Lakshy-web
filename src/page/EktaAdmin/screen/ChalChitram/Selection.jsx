import { Button, ButtonBase, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";



const Selection = () => {
  const navigat = useNavigate()
  return (
    <div>
      <Grid
        container
        style={{
          backgroundColor: "#16181b",
         
          minHeight: "100vh",
        }}
      >
        {/* <Grid item xs={12}>
          <h2 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            મારા બનાવેલા રોજગાર
          </h2>
        </Grid> */}

        <Grid
          item
          md={4}
          lg={4}
          sm={12}
          xs={12}
          style={{ display: "flex", alignItems: "center" ,}}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigat(`/EktaAdmin/VideoList`);
            }}
            style={{
              width: "18rem",
              padding: "auto",
              margin: "auto",
              background: "#363636",
              cursor:"pointer",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <div class="card-body">
              <img src="assets/images/admin/video.png" />
              <h5 class="card-title " style={{ color: "white" }}>
              વિડિઓ 
              </h5>
            </div>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sm={12}
          xs={12}
          style={{ display: "flex", alignItems: "center" ,}}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigat(`/EktaAdmin/CourseList`);
            }}
            style={{
              width: "18rem",
              padding: "auto",
              margin: "auto",
              background: "#363636",
              cursor:"pointer",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <div class="card-body">
              <img src="assets/images/admin/abhyas.png" />
              <h5 class="card-title " style={{ color: "white" }}>
              અભ્યાસ 
              </h5>
            </div>
          </div>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sm={12}
          xs={12}
          style={{ display: "flex", alignItems: "center" ,}}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigat(`/EktaAdmin/HistoryList`);
            }}
            style={{
              width: "18rem",
              padding: "auto",
              margin: "auto",
              background: "#363636",
              cursor:"pointer",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <div class="card-body">
              <img src="assets/images/admin/itihas.png" />
              <h5 class="card-title " style={{ color: "white" }}>
              ઇતિહાસ 
              </h5>
            </div>
          </div>
        </Grid>
      
      </Grid>
    </div>
  );
};

export default Selection;
