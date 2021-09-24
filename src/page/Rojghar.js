import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import JobDialog from "../components/RojgharTab/JobDialog";
import Paper from "@material-ui/core/Paper";
import React from "react";
import image1 from "./rojgharImage/business.png";
import image2 from "./rojgharImage/career.png";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={(classes.root, `page`)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <h1 style={{ color: "red", textAlign: "center" }}>Rojghar Shakha</h1>
          </Grid>
        <Grid item xs={12} sm={6} md={6} className="ourBtn">
          <Card
            style={{
              margin: "40px",

              boxShadow: "rgba(0, 0, 0, 0.35) 0px 8px 20px 7px",
              borderRadius: "10px",
              border: "1.9px solid gray",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

            <h3
              style={{
                color: "rgb(172, 24, 24)",
                textAlign: "center",
              }}
            >
              Jobs
            </h3>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={image2} alt="xyz" height="300px" width="300px" />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div
              className="ourBtn"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              {/* <button style={{ textAlign: "center" }}>|| findJob ||</button> */}
              <JobDialog />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="ourBtn">
          <Card
            style={{
              margin: "40px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 8px 20px 7px",
              borderRadius: "10px",
              border: "1.9px solid gray",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
              Business
            </h3>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={image1} alt="xyz" height="300px" width="300px" />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div
              className="ourBtn"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <button
                onClick={() => {
                  navigate(`/BusinessPage`);
                }}
              >
                || view business ||
              </button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
