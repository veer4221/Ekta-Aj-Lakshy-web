import { Button, ButtonBase, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import Loader from "../loader/Loader";
import { getApplyedUserAction, getMyJobsAction } from "../../Redux/Actions";

const HireSelectionPage = () => {
  const navigat = useNavigate()
  return (
    <div>
      <Grid
        container
        style={{
          backgroundColor: "#16181b",
          paddingTop: "100px",
          paddingBottom: "70px",
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
          md={6}
          lg={6}
          sm={12}
          xs={12}
          style={{ display: "flex", alignItems: "center" ,}}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigat(`/Rojgharmain/hireform`);
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
              <img src="assets/images/rojgar/create.png" />
              <h5 class="card-title " style={{ color: "white" }}>
                રોજગાર બનાવો
              </h5>
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}  style={{ display: "flex", alignItems: "center", }}>
          <div
            class="card "
            onClick={() => {
              navigat(`/Rojgharmain/hire`);
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
            <div class="">
              <img src="assets/images/rojgar/hireEmp.png" />
              <h5 class="card-title " style={{ color: "white" }}>
                પસંદગી કરો
              </h5>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HireSelectionPage;
