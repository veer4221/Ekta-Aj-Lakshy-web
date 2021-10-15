import FavoriteIcon from "@material-ui/icons/Favorite";

import React from "react";

import { useNavigate } from "react-router";

import "../../../style/aboutUsMtextView.css";

import "./style.css";

const BottomHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="menu-jk" className="header-bottom page ">
        <div className="container">
          <div className="row nav-row sticky-thc">
            <div className="col-lg-3 col-md-12 logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i className="fas d-block d-lg-none  small-menu fa-bars"></i>
                </a>
              </a>
            </div>
            <div
              id="menu"
              className="col-lg-9 col-md-12 d-none d-lg-block nav-col"
            >
              <ul className="navbad">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      Home
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/aboutus");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      About Us
                    </span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    <span
                      style={{

                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >

                    Services
                    </span>
                  </a>
                </li> */}

                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/Gallery");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      Gallery
                    </span>
                  </a>
                </li> */}

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/news");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      News
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/ContectUs");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      Contect Us
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/auth/login");
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(172, 24, 24)",
                        fontSize: "20px",
                      }}
                    >
                      Rojgar
                    </span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    color: "rgb(172, 24, 24)!important",
                  }}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
