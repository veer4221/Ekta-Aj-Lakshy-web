import React from "react";

import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import { Form, Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function JoinWithUs() {
  const [addForm, setAddForm] = useState(true);
  const [firstName, setFirstName] = useState();
  const [image, setImage] = useState();
  const [lastName, setLastName] = useState();
  const [redirectTo, setRedirectTo] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [address, setAddress] = useState();
  const classes = useStyles();

  return (
    <>
      <form style={{ margin: "20px", padding: "20px" }} className="ourBtn">
        <div className="form-row ">
          <div className="form-group col-md-4">
            <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-4">
            <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
              Sarname
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-4">
            <label style={{ color: "rgb(172, 24, 24)" }} for="inputPassword4">
              Email
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-row ">
          <div className="form-group col-md-8">
            <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
              Address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>

          <div className="form-group col-md-4">
            <label style={{ color: "rgb(172, 24, 24)" }} for="inputPassword4">
              Mobile
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-row ">
          <div className="form-group col-md-8">
            <div class="custom-file">
              <label
                style={{ color: "rgb(172, 24, 24)" }}
                class="form-label"
                for="customFile"
              >
                Upload Document
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </div>

          <div
            className="form-group col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img src="../" width="200px" height="150px" />
          </div>
        </div>

        <button type="submit" className="btn">
          || Join Now ||
        </button>
      </form>
    </>
  );
}
