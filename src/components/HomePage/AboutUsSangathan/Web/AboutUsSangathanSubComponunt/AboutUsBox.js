import React from "react";
import { Grid, Card, Box, Divider, Button } from "@material-ui/core";
import ViewUs from "../../dilogbox/ViewMore";

const AboutUsBox = ({ icon, titel }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center", color: "rgb(133, 6, 6)" }}>
            || About Us ||
          </h1>
          <hr></hr>
          <h3 style={{ textAlign: "center", color: "rgb(133, 6, 6)" }}>
            18 Varan Eksathe<br></br>Hindutv mate
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <ViewUs info={`pc`} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUsBox;
