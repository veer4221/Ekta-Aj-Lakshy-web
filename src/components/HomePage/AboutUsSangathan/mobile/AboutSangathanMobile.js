import React from "react";
import { Grid, Card, Box, Divider, Button } from "@material-ui/core";
import ramji from "../../../../style/image/logoBig.gif";
import ViewUs from "./ViewUsMobile/ViewUs";


const AboutSangathanMobile = () => {
  return (
    <>
      <Card height="100%" width="100%" style={{margin:"-7%"}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <hr></hr>
          </Grid>
          <Grid item xs={8}>
            <p style={{ textAlign: "center" }}>
              🚩18Varan Ek Sathe🚩<br></br>🚩 Hindutv mate🚩
            </p>
            <ViewUs/>
          </Grid>

          <Grid item xs={4}  style={{ borderLeft: `1px sloid black` }}>
            <div>
              <img src={ramji} />
            </div>
          </Grid>

          {/* <Grid item xs={12}>
            <hr></hr>

          </Grid> */}
        </Grid>
      </Card>
    </>
  );
};

export default AboutSangathanMobile;
