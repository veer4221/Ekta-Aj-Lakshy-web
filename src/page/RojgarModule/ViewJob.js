import "./profile.css";

import React, { useEffect, useState } from "react";
import { getJobAction, jobApplyAction } from "../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { userProfileAPI } from "../../api/index";

const ProfilePage = () => {
  const job = useSelector((state) => state.job);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataStorag = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState();
  const applyForJobFunc = () => {
    const obj = {
      job_id: job.getJob.id,
      user_id: userDataStorag.id,
    };
    dispatch(jobApplyAction(obj));
    navigate(`/Rojgharmain/FindJob`);
  };
  useEffect(() => {
    dispatch(getJobAction(localStorage.getItem("jobId")));
  }, []);
  return (
    <div className="Rg-bg">
      <div className="container">
        <h1
          className="Header-ekta "
          style={{ textAlign: "center", color: "white" }}
        >
          Job Details
        </h1>
        <div className="main-bodyP" style={{ padding: "2c0px" }}>
          <div className="row gutters-smP">
            <div className="col-md-4 mb-3P">
              <div className="card-glass card-glass">
                <div className="card-bodyP">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        job.getJob.adminUser &&
                        `https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${job.getJob.adminUser.image}`
                      }
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4 className="headerProfile">
                        {" "}
                        {/* {`${job.getJob.adminUser.firstName} ${job.getJob.adminUser.fatherName} ${job.getJob.adminUser.sarname}`} */}
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
                      <h6 className="mb-0 headerProfile">Company Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile ">
                      {job.getJob.company_name}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Job Role</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.job_role}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">category</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.job_category}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Salary</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {`₹${job.getJob.salary_min} -  ₹${job.getJob.salary_max}`}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Qualification</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.Qualification}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Time</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {`${job.getJob.start_Time} to ${job.getJob.end_Time} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Working Days</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.working_days}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.company_email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.company_contect_number}
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
                      <h6 className="mb-0 headerProfile">Job Description</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.job_description}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">State</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.state && job.getJob.state.state_title}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Districtid</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.district &&
                        job.getJob.district.district_title}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.city && job.getJob.city.name}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 headerProfile">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary dataProfile">
                      {job.getJob.address}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button onClick={applyForJobFunc}>Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
