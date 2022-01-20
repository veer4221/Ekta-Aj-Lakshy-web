import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import { userProfileAPI } from "../api/index";
import { getUserProfileAction } from "../Redux/Actions/index";

import "./RojgarModule/profile.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="" style={{backgroundColor: "#16181b",paddingTop: "70px",minHeight: "100vh",}}>
      <div className="container">
        <h2
          className="Header-ekta "
          style={{ textAlign: "center", color: "white" }}
        >
         મારી પ્રોફાઈલ
        </h2>
        <div className="main-bodyP" style={{ padding: "2c0px" }}>
          <div className="row gutters-smP">
            <div className="col-md-4 mb-3P">
              <div className="card-glass card-glass">
                <div className="card-bodyP">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        userData &&
                        `https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${userData.image}
`
                        // `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFsP1jJV-I8V6DT3jZzSssTpGJDckXHFsPIpZBNAVmpPWfeBc11onkkBDcXWEZDvgTYY&usqp=CAU`
                      }
                      alt="userimage"
                      className="rounded-circle"
                      width="150"
                      height="150"
                    />
                    <div className="mt-3">
                      {/* <h4 className="headerProfile">John Doe</h4> */}
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
                <div className="card-bodyP" style={{ marginBottom: "200px" }}>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">પૂરું નામ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile ">
                      {userData &&
                        `${userData.firstName} ${userData.fatherName} ${userData.sarname}`}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">ઇમેઇલ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {userData && `${userData.email} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">ફોન નંબર</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {userData && `${userData.mobileNumber} `}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">અભ્યાસ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {userData && `${userData.study} `}
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
                      {userData && `${userData.address} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">પીન-કોડ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {userData && `${userData.pinCode} `}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">આઈ-કાર્ડ આઈડી</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {userData && `${userData.icard_id} `}
                    </div>
                  </div>
                  <hr />
                  {userData?.iCardImage && (
                    <div className="row" style={{ marginBottom: "100px" }}>
                      <div className="col-sm-12">
                        <Button>
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${userData?.iCardImage}`}
                            download="myIcard.png"
                          >
                            Download Icard
                          </a>
                        </Button>
                        {/* <Button className="ml-3">View Resume</Button> */}
                      </div>
                    </div>
                  )}
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
