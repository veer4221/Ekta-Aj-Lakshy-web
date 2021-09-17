import { Button, Grid, IconButton, Paper } from "@material-ui/core";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import WorkIcon from "@material-ui/icons/Work";
import { useNavigate } from "react-router";

const RojgharUserPanel = () => {
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
          <h3 style={{ color: "red", textAlign: "center" }}>Rojghar Panel</h3>
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
                <LibraryAddIcon />
              </div>
              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Hire
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
              navigate(`/rojghar/FindJobPage`);
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
                <SearchIcon />
              </div>

              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Find Job
              </h4>
            </Paper>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate(`/rojghar/ProfilePage`);
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
                <AccountBoxIcon />
              </div>

              <h4 className="rojghar-text" style={{ textAlign: "center" }}>
                Profile
              </h4>
            </Paper>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default RojgharUserPanel;
