import "./navbhar.css";

import { Link, useNavigate } from "react-router-dom";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BusinessIcon from "@material-ui/icons/Business";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";
import {signout} from "../../../Redux/Actions"
// import WorkIcon from "@material-ui/icons/Work";

// import AddBusinessIcon from '@material-ui/icons/AddBusiness';
// import Business from './../../RojgharTab/Business';

const Navbhar = () => {
  // const place = useSelector((state) => state.place);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="allEle">
      <nav className="navbar">
        <h1 className="Logo">Rojghar</h1>
        <IconButton
          className="logoutDeskTop"
          onClick={() => {
            navigate(`/auth/login`);
          }}
        >
          {" "}
          <ExitToAppIcon />
        </IconButton>
        <ul className="desktop-list">
          <li>
            <Link className="linknav" to={`/Rojgharmain/FindJob`}>
              <WorkIcon />
              Business
            </Link>{" "}
          </li>
          <li>
            <Link className="linknav" to={`/Rojgharmain/hire`}>
              <AddCircleOutlineIcon />
              Hire
            </Link>{" "}
          </li>

          <li>
            <Link className="linknav" to={`/Rojgharmain/FindJob`}>
              <SearchIcon />
              FindJob
            </Link>{" "}
          </li>
          <li>
            <Link className="linknav" to={`/Rojgharmain/profilePage`}>
              <AccountBoxIcon />
              Profile
            </Link>{" "}
          </li>
          <li
              style={{cursor: "pointer"}}
              className="linknav"
             
              onClick={() => {
                dispatch(signout());
                navigate(`/auth/login`);
              }}
            >
              <ExitToAppIcon />
              LogOut
            {/* </Link>{" "} */}
          </li>
        </ul>
        <ul className="mobile-list" style={{ background: "black" }}>
          <li>
            <IconButton
              onClick={() => {
                navigate(`/Rojgharmain/FindJob`);
              }}
            >
              {" "}
              <WorkIcon style={{ color: "white" }} />
            </IconButton>
          </li>
          <li>
            <IconButton
              onClick={() => {
                navigate(`/Rojgharmain/hire`);
              }}
            >
              <AddCircleOutlineIcon style={{ color: "white" }} />
            </IconButton>
          </li>

          <li
            onClick={() => {
              navigate(`/Rojgharmain/FindJob`);
            }}
          >
            <IconButton>
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          </li>
          <li
            onClick={() => {
              navigate(`/Rojgharmain/profilePage`);
            }}
          >
            <IconButton>
              <AccountBoxIcon style={{ color: "white" }} />
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbhar;
