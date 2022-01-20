import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import Loader from "../loader/Loader";
import { userProfileAPI } from "../../api/index";
import { getUserProfileAction } from "../../Redux/Actions/index";

import "./profile.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();

  useEffect(() => {
    dispatch(getUserProfileAction(localStorage.getItem("viewProfileUserId")));
  }, []);
  return (
    <div style={{backgroundColor: "#16181b",paddingTop: "70px",minHeight: "100vh",}}>
      <div className="container">
        <h1
          className="Header-ekta "
          style={{ textAlign: "center", color: "white" }}
        >
          {user.getUserInfo && user.getUserInfo.firstName} ની પ્રોફાઇલ
        </h1>
        {/* <Loader loading={user.loading} /> */}
        <div className="main-bodyP" style={{ padding: "2c0px" }}>
          <div className="row gutters-smP">
            <div className="col-md-4 mb-3P">
              <div className="card-glass card-glass">
                <div className="card-bodyP">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        user.getUserInfo &&
                        `https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${user.getUserInfo.image}`
                      }
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                     
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
                      <h6 className="mb-0 headerProfile">પૂરું નામ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile ">
                      {user.getUserInfo &&
                        `${user.getUserInfo.firstName} ${user.getUserInfo.fatherName} ${user.getUserInfo.sarname}`}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">ઇમેઇલ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {user.getUserInfo && `${user.getUserInfo.email} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">ફોન નંબર</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {user.getUserInfo && `${user.getUserInfo.mobileNumber} `}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">અભ્યાસ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {user.getUserInfo && `${user.getUserInfo.study} `}
                    </div>
                  </div>
                  <hr />
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr /> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">સરનામું</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {user.getUserInfo && `${user.getUserInfo.address} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">પીન-કોડ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {user.getUserInfo && `${user.getUserInfo.pinCode} `}
                    </div>
                  </div>
                  {/* <hr /> */}
                  <div className="row">
                    {/* <div className="col-sm-12">
                      <Button>Upload Resume</Button>
                      <Button className="ml-3">View Resume</Button>
                    </div> */}
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

export default ProfilePage;
