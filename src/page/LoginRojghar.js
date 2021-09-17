import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Button, Grid, Paper } from "@material-ui/core";

import React from "react";
import { useNavigate } from "react-router";

const LoginRojghar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={3}
        className="page"
        style={{ paddingBottom: "100px" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Login
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Paper
            className="Login-card"
            style={{ width: "60%", padding: "20px" }}
          >
            <div
              className="justify-center"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <BrowserView>
                <img
                  src="assets/images/events/image_01.jpg"
                  width="400px"
                  height="350px"
                />
              </BrowserView>
              <MobileView>
                <img
                  src="assets/images/events/image_01.jpg"
                  width="200px"
                  height="200px"
                />
              </MobileView>
            </div>
            <label className="Header-ekta">Icard Id</label>
            <input
              type="text"
              className="form-control"
              placeholder="Icard Id"
            />
            <label className="Header-ekta">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Icard Id"
            />
            <div
              className="ourBtn"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={() => {
                  navigate(`/rojghar/userpanel`);
                }}
              >
                Login
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginRojghar;
