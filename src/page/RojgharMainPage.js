import { Button, Grid, IconButton, Paper } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import WorkIcon from "@material-ui/icons/Work";
import { useNavigate } from "react-router";

const RojgharMainPage = () => {
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
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
          <h3 style={{ color: "red", textAlign: "center" }}>Rojghar Shakha</h3>
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{ display: "flex", justifyContent: "space-around" }}
          className="ourBtn"
        >
          <IconButton
            onClick={() => {
              navigate(`/AboutUs`);
            }}
          >
            <Paper
              className="card-rojghar"
              style={{ height: "100px", width: "100px" }}
            >
              <div
                className="iconRojghar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "30px",
                }}
              >
                <PersonAddIcon />
              </div>

              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Join us
              </h4>
            </Paper>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate(`/LoginRojghar`);
            }}
          >
            <Paper
              className="card-rojghar"
              style={{ height: "100px", width: "100px" }}
            >
              <div
                className="iconRojghar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "30px",
                }}
              >
                <VpnKeyIcon />
              </div>
              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Login
              </h4>
            </Paper>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{ display: "flex", justifyContent: "space-around" }}
          className="ourBtn"
        >
          <IconButton
            onClick={() => {
              navigate(`/LoginRojghar`);
            }}
          >
            <Paper
              className="card-rojghar"
              style={{ height: "100px", width: "100px" }}
            >
              <div
                className="iconRojghar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "30px",
                }}
              >
                <WorkIcon />
              </div>

              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Jobs
              </h4>
            </Paper>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate(`/`);
            }}
          >
            <Paper
              className="card-rojghar"
              style={{ height: "100px", width: "100px", paddingTop: "30px" }}
            >
              <div
                className="iconRojghar"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <LocationCityIcon />
              </div>

              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Business
              </h4>
            </Paper>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "rgb(172, 24, 24)",
          }}
        >
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

          <h4>Jobs vacancy</h4>
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Apply</Button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            onClick={() => {
              navigate(`/LoginRojghar`);
            }}
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Apply</Button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            onClick={() => {
              navigate(`/LoginRojghar`);
            }}
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Apply</Button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            onClick={() => {
              navigate(`/LoginRojghar`);
            }}
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Apply</Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default RojgharMainPage;
