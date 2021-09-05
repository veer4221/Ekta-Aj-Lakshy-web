import { Button } from "@material-ui/core";
import React from "react";
import ViewMore from "./ViewMore";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Phone: +91 9159669599 <br />
                Email:{" "}
                <a href="mailto:info@anybiz.com" className="">
                  info@bluedart.in
                </a>
                <br />
                Web:{" "}
                <a href="smart-eye.html" className="">
                  www.bluedart.in
                </a>
              </address>
            </div> */}
          </div>

          <div className="nav-box row clearfix">
            <div className="inner col-md-12 clearfix">
              <ul className="footer-nav clearfix">
                <li>
                  <Button style={{ color: "white" }}>Home</Button>
                </li>
                <li>
                  <Button style={{ color: "white" }}>AboutUs</Button>
                </li>
                <li>
                  <Button style={{ color: "white" }}>Gallery</Button>
                </li>

                <li>
                  <Button style={{ color: "white" }}>News</Button>
                </li>
                <li>
                  <Button
                    style={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "10%",
                    }}
                  >
                    Donate us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="inner col-md-12 clearfix">
            <h4 style={{ color: "white" }}>
              developed by : AARY_CODERS Developers Team
              <ViewMore />
            </h4>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
