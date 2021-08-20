import React from "react";

import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import { Form, Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import PersonalForm from "./Form/PersonalForm";
import EmailForm from "./Form/EmailForm";
import OtherForm from "./Form/OtherForm";
import PaymentForm from "./Form/PaymentForm";

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
  const [fatherName, setFatherName] = useState();
  const [motherName, setMotherName] = useState();
  const [husName, setHusName] = useState();
  const [mrgStatus, setMrgStatus] = useState(`1`);
  const [totelMumber, setTotelMumber] = useState(`1`);
  const [pinCode, setPincode] = useState(`3434323`);
  const [bloodGroup, setBloodGroup] = useState(`1`);
  const [business, setBusiness] = useState(`1`);
  const [business_address, setBusiness_address] = useState(`1`);

  // const [birthdate, setImage] = useState();
  const [image, setImage] = useState();
  const [lastName, setLastName] = useState();
  const [redirectTo, setRedirectTo] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [wmobileNumber, setWMobileNumber] = useState();
  const [address, setAddress] = useState();
  const classes = useStyles();
  const [page, setPage] = useState(`1`);

  return (
    <>
      <form style={{ margin: "20px", padding: "20px" }} className="ourBtn">
        {page == `1` ? <EmailForm setPage={setPage} /> : ``}
        {page == `2` ? <PersonalForm setPage={setPage} /> : ``}
        {page == `3` ? <OtherForm setPage={setPage} /> : ``}
        {page == `4` ? <PaymentForm setPage={setPage} /> : ``}
      </form>
    </>
  );
}
