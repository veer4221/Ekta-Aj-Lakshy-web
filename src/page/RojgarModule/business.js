import "./profile.css";

import React, { useEffect, useState } from "react";
import { getJobAction, jobApplyAction } from "../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { userProfileAPI } from "../../api/index";

const BusinessPage = () => {
 
  return (
    <div className="Rg-bg">
      <div className="container">
        <h1
          className="Header-ekta "
          style={{ textAlign: "center", color: "white" }}
        >
         Business
        </h1>
        <div className="main-bodyP" style={{ padding: "200px" }}>
        <h3> Business module coming soon.......(15-10-2021 before 6:30 pm)</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
