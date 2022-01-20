import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import { userProfileAPI } from "../api/index";
import { getBusinessAction } from "../Redux/Actions/business.action";
import { getUserProfileAction } from "../Redux/Actions/index";

import "./RojgarModule/profile.css";
import Loader from "./loader/Loader";

// import BusinessInformation from './BusinessInformation';

const BusinessInformation = () => {
  const Business = useSelector((state) => state.business);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();
  useEffect(() => {
    dispatch(getBusinessAction(parseInt(localStorage.getItem(`businessId`))));
  }, []);
  return (
    <div 
    
    style={{backgroundColor: "#16181b",paddingTop: "70px",minHeight: "100vh",}}
    
    >
      <div className="container">
        <h2
          className="Header-ekta "
          style={{ textAlign: "center", color: "white", }}
        >
          વ્યવસાય પ્રોફાઈલ 
        </h2>
        <Loader loading={Business.loading} />
        <div className="main-bodyP" style={{ padding: "2c0px" }}>
          <div className="row gutters-smP">
            <div className="col-md-4 mb-3P">
              <div className="card-glass card-glass">
                <div className="card-bodyP">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        Business &&
                        `https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${Business?.getBusiness?.Business?.image}`
                      }
                      // src="https://i.pravatar.cc/300"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                      height="150"
                    />
                    <div className="mt-3">
                      <h4 className="headerProfile">
                        {Business?.getBusiness?.Business?.business_Name}
                      </h4>
                      {/* <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
         
            </div>
            <div className="col-md-8">
              <div className="card-glass mb-3P">
                <div className="card-bodyP">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile"> પેઢી નું નામ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile ">
                      {Business?.getBusiness?.Business?.business_title}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">માલિક નું નામ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {Business?.getBusiness?.Business?.business_Name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">ફોન નંબર</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {Business?.getBusiness?.Business?.business_contect_number}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile"> સ્થળ </h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {Business?.getBusiness?.Business?.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">
                      વ્યવસાય માહિતી 
                      </h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {Business?.getBusiness?.Business?.business_description}
                    </div>
                  </div>
                  <hr />
                  <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-sm-12">
                      {/* <Button>Upload Resume</Button>
                      <Button className="ml-3">View Resume</Button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row gutters-smP">
                <div className="col-sm-6 mb-3P">
                  <div className="card-glass h-100">
                    <div className="card-bodyP">
                      <h6 className="d-flex align-items-center mb-3P">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3P">
                  <div className="card-glass h-100">
                    <div className="card-bodyP">
                      <h6 className="d-flex align-items-center mb-3P">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3P" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
