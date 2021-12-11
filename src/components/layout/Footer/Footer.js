import { Button } from "@material-ui/core";

import React from "react";

import { useNavigate } from "react-router";

import ViewMore from "./ViewMore";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="footer">
        <div className="container ">
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
                  <Button
                    onClick={() => navigate(`/`)}
                    style={{ color: "white" }}
                  >
                    હોમ
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate(`/aboutUs`)}
                    style={{ color: "white" }}
                  >
                    અમારા વિશે
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate(`/News`)}
                    style={{ color: "white" }}
                  >
                    પોસ્ટ
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate(`/ContectUs`)}
                    style={{ color: "white" }}
                  >
                    સંપર્ક
                  </Button>
                </li>

                <li>
                  <Button
                    onClick={() => navigate("/auth/login")}
                    style={{ color: "white" }}
                  >
                    રોજગાર
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/chalchitram/")}
                    style={{ color: "white" }}
                  >
                    ચલચિત
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/DonateUs")}
                    style={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "10%",
                    }}
                  >
                    દાન કરો
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
