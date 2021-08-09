import React from "react";
import { Grid, Card, Box, Divider, Button } from "@material-ui/core";
import ramji from "../../../../style/image/logoBig.gif";
import ViewUs from "./ViewUsMobile/ViewUs";

const AboutSangathanMobile = () => {
  return (
    <>
      {/* <Card height="40%" width="100%" style={{margin:"-7%"}}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center", color: "rgb(133, 6, 6)" }}>
            {" "}
            || About Us ||
          </h1>
          <hr></hr>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={ramji} width="60%" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <p style={{ textAlign: "center" }}>
            18 Varan Ek sathe | <br></br> Hindutv mate ||
          </p>
          <Divider />
          <hr></hr>
          <ViewUs info={`mobile`} />
        </Grid>
      </Grid>
      {/* </  Card> */}
    </>
  );
};

export default AboutSangathanMobile;
