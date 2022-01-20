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
import { signout } from "../../../Redux/Actions";
// import WorkIcon from "@material-ui/icons/Work";

// import AddBusinessIcon from '@material-ui/icons/AddBusiness';
// import Business from './../../RojgharTab/Business';

const Navbhar = () => {
  // const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const navigat = useNavigate();

  const navigate = useNavigate();
  return (
    <div className="allEle">
      <nav className="navbar">
        <h3 className="Logo">હિન્દૂ રોજગાર શાખા </h3>
        <IconButton
          className="logoutDeskTop "
          onClick={() => {
            dispatch(signout());
            navigate(`/auth/login`);
          }}
        >
          <ExitToAppIcon style={{ color: "white" }} />
        </IconButton>
        <ul className="desktop-list">
          <li onClick={()=>navigate(`/Rojgharmain/Business`)}>
            <div className="linknav" >
              <WorkIcon className="icon-rojghar desktop-icon" />
              ધંધો
            </div>
          </li>
          <li onClick={()=>navigate(`/Rojgharmain/hireoption`)}>
            <div className="linknav" >
              <AddCircleOutlineIcon className="icon-rojghar desktop-icon" />
              કામઆપો
            </div>
          </li>

          <li onClick={()=>navigate(`/Rojgharmain/FindJob`)}>
            <div className="linknav" >
              <SearchIcon className="icon-rojghar desktop-icon" />
              રોજગાર શોધો
            </div>
          </li>
          <li onClick={() => navigate("/Rojgharmain/profilePage")}>
            <div className="linknav">
              <AccountBoxIcon className="icon-rojghar desktop-icon" />
              પ્રોફાઇલ
            </div>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="linknav"
            onClick={() => {
              dispatch(signout());
              navigate(`/auth/login`);
            }}
          >
            <ExitToAppIcon className="icon-rojghar desktop-icon" />
            પાછા જાઓ
            {/* </div> */}
          </li>
        </ul>
        <ul className="mobile-list" style={{ background: "#121417" }}>
          <li>
            <IconButton
              className="icon-rojghar "
              onClick={() => {
                navigate(`/Rojgharmain/Business`);
              }}
            >
              <WorkIcon style={{ color: "white" }} className="icon-rojghar" />
            </IconButton>
          </li>
          <li>
            <IconButton
              className="icon-rojghar"
              onClick={() => {
                navigate(`/Rojgharmain/hireoption`);
              }}
            >
              <AddCircleOutlineIcon
                style={{ color: "white" }}
                className="icon-rojghar"
              />
            </IconButton>
          </li>

          <li
            className="icon-rojghar"
            onClick={() => {
              navigate(`/Rojgharmain/FindJob`);
            }}
          >
            <IconButton className="icon-rojghar">
              <SearchIcon style={{ color: "white" }} className="icon-rojghar" />
            </IconButton>
          </li>
          <li
            className="icon-rojghar"
            onClick={() => {
              navigate(`/Rojgharmain/profilePage`);
            }}
          >
            <IconButton className="icon-rojghar">
              <AccountBoxIcon
                style={{ color: "white" }}
                className="icon-rojghar"
              />
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbhar;
