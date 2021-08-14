import React, { useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Grid } from "@material-ui/core";
import akhandBharat from "../style/image/AkhandBharat.png";
import { Helmet } from "react-helmet";
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
            Donete Us
          </h1>
          <p style={{ color: "rgb(172, 24, 24)" }}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
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
