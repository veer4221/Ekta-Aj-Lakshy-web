import React from "react";
import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { stateUpdateAction } from "../../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";

import { Form, Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const PersonalForm = ({ setPage }) => {
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = React.useState("male");
  const [selectedMrg, setSelectedMrg] = React.useState("1");
  const [firstName, setFirstName] = React.useState();
  const [whatsAppNumber, setWhatsAppNumber] = React.useState();
  const [mobileNumber, setMobileNumber] = React.useState();
  const [study, setStudy] = React.useState();
  const [bloodGroup, setBloodGroup] = React.useState("A+");

  const updateStateFunc = () => {
    const obj = {
      firstName,
      whatsAppNumber,
      mobileNumber,
      study,
      bloodGroup,
      gender: selectedValue,
      marrage: selectedMrg,
    };
    dispatch(stateUpdateAction(obj));
    setPage(`3`);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeMrg = (event) => {
    setSelectedMrg(event.target.value);
  };
  return (
    <>
      <div className="form-row ">
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputPassword4">
            Whatsapp Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={whatsAppNumber}
            onChange={(e) => setWhatsAppNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row ">
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Blood group
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Study
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <Radio
            checked={selectedMrg === "1"}
            onChange={handleChangeMrg}
            value="1"
            name="radio-button-demo2"
            inputProps={{ "aria-label": "1" }}
          />
          Marrid
          <Radio
            checked={selectedMrg === "0"}
            onChange={handleChangeMrg}
            value="0"
            name="radio-button-demo2"
            inputProps={{ "aria-label": "0" }}
          />
          unMarrid
        </div>
      </div>
      <Radio
        checked={selectedValue === "male"}
        onChange={handleChange}
        value="male"
        name="radio-button-demo"
        inputProps={{ "aria-label": "MALE" }}
      />
      Male
      <Radio
        checked={selectedValue === "female"}
        onChange={handleChange}
        value="female"
        name="radio-button-demo"
        inputProps={{ "aria-label": "FEMALE" }}
      />
      Female
      <div className="form-row ">
        <div className="form-group col-md-6">
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
        <div className="form-group col-md-6">
          <div class="custom-file">
            <label
              style={{ color: "rgb(172, 24, 24)" }}
              class="form-label"
              for="customFile"
            >
              Upload Image
            </label>
            <input type="file" class="form-control" id="customFile" />
          </div>
        </div>
      </div>
      <div className="form-row ">
        <div
          className="form-group col-md-6"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img src="../" width="200px" height="150px" />
        </div>
        <div
          className="form-group col-md-6"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img src="../" width="200px" height="150px" />
        </div>
      </div>
      <button
        type="submit"
        className="btn"
        onClick={() => {
          setPage(`1`);
        }}
      >
        || Back ||
      </button>
      <button type="submit" className="btn" onClick={updateStateFunc}>
        || Next ||
      </button>
    </>
  );
};

export default PersonalForm;
