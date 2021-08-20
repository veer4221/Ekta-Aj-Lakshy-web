import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
const AboutUsSangathan = lazy(() =>
  import("../HomePage/AboutUsSangathan/AboutUsSangathan")
);
const JoinWithUs = lazy(() => import("./JoinWithUs"));

const AboutUsPage = () => {
  return (
    <>
      <Grid container spacing={0} className="page">
        <Grid item xs={12}>
          <AboutUsSangathan />
        </Grid>
        <Grid item xs={12}>
          <br></br>
          <br></br>
          <br></br>
          <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Join With Us
          </h3>
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<div>Loading...</div>}>
            <JoinWithUs />
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;
