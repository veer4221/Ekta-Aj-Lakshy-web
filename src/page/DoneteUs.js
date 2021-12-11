import { Grid } from "@material-ui/core";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import akhandBharat from "../style/image/AkhandBharat.png";

const DoneteUs = () => {
  useEffect(() => {
    const Script = document.createElement("script");

    const Form = document.getElementById("donateForm");
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    Script.setAttribute("data-payment_button_id", "pl_GLyFSUfJnB9BNn");
    Form.appendChild(Script);
  }, []);
  return (
    <>
      <Grid container className="page">
        <Grid item xs={12}>
          <h1
            style={{
              textAlign: "center",
              color: "rgb(133, 6, 6)",
              fontFamily: "Samarkan",
            }}
          >
            || Akhand Bharat ||
          </h1>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img src={akhandBharat} height="90%" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <h1
            style={{
              textAlign: "center",
              color: "rgb(133, 6, 6)",
            }}
          >
            દાન કરો
          </h1>

          <br></br>
          <br></br>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <form id="donateForm"> </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default DoneteUs;
