import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import image1 from "./image.png";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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

export default function WorkTab() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{ padding: "10px" }} item xs={12} md={12}>
          <h1 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Rojagar shakha Work
          </h1>
          <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={image1} alt="rojgar" />
          </div>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={4}>
          <label for="cars">Choose a State:</label>

          <select className="form-control" name="state" id="state">
            <option value="none">none</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Maharatr">Maharatr</option>
            <option value="MadhyPradesh">MadhyPradesh</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={4}>
          <label for="cars">Choose a Taluka:</label>

          <select className="form-control" name="cars" id="cars">
            <option value="none">none</option>

            <option value="Idar">Idar</option>
            <option value="Himmitnagar">Himmitnagar</option>
            <option value="vadali">vadal</option>
            <option value="khedbramma">khedbramma</option>
          </select>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={12} md={4}>
          <label for="cars">Choose a City:</label>

          <select className="form-control" name="cars" id="cars">
            <option value="none">none</option>

            <option value="idar">idar</option>
            <option value="ahm">ahm</option>
            <option value="hmt">hmt</option>
            <option value="vadali">vadali</option>
          </select>
        </Grid>
        <Grid style={{ padding: "10px" }} item xs={6} md={6}></Grid>
        <Grid style={{ padding: "10px" }} item xs={6} md={6}>
          <div className="ourBtn">
            <Button
              onClick={() => {
                navigate(`RojgharResult`);
              }}
            >
              <SearchIcon />
              Find
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
