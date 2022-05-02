import { Button, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import * as Yup from "yup";

import { ErrorMessage, FastField, Field, Form, Formik } from "formik";

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import { login } from "../Redux/Actions/index";

import Loader from "./loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./loginStyle.scss"
import Suchna from "../components/layout/Header/Suchna";
import PopUpRojghar from "../components/RojgharTab/PopUpRojghar";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().required("password is Required"),
});
const initialValues = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = React.useState(true);

  const handalSubmit = (e) => {
    dispatch(login(e));
    console.log(e);
  };
  if (auth.authenticate && localStorage.getItem("token")) {
    alert(window.location.href)
    navigate(`/Rojgharmain/FindJob`);
  }
  return (
    <>
    <Suchna setOpen={setOpen} />
    <PopUpRojghar setOpen={setOpen} open={open}/>
      <div
        class="container-fluid loginBg"
        style={{ height: "100vh", width: "100%", backgroundColor: "#16181b" }}
      >
        <div class="login_name_wrapperL">
          <div class="d-flex justify-content-center rojghar-text ">
            પ્રવેશ કરો
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handalSubmit}
          onValidationError={(errorValues) => { }}
          enableReinitialize
        >
          {({
            errors,
            values,
            touched,
            handleChange,
            isSubmitting,
            setFieldValue,
            handleBlur,
            setTouched,
          }) => {
            return (
            
          
              <div class="d-flex justify-content-center h-50">
                <div class="user_cardL">
                  <div class="d-flex justify-content-center">
                    <div class="login_logo_containerL">

                      <img
                        src={`assets/images/logo512.png`}
                        class="login_logo"
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <Loader loading={auth.loading} />
                  <div class="d-flex justify-content-center form_containerL">
                    <Form style={{ width: "320px" }}>
                      <div
                        id="msgcont"
                        class="d-flex justify-content-center"
                        style={{ display: "none!important" }}
                      >
                        <div
                          id="msg"
                          class="alert alert-danger py-1 px-2"
                          role="alert"
                        ></div>
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-append">
                          {" "}
                          <span class="input-group-text">
                            <i class="fas fa-user"></i>
                          </span>{" "}
                        </div>
                        <FastField
                          name="email"
                          type="email"
                          placeholder="ઈ-મેલ"
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          onChange={(e) => {
                            let email = e.target.value;

                            setFieldValue("email", email);
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div class="input-group mb-4">
                        <div class="input-group-append">
                          {" "}
                          <span class="input-group-text">
                            <i class="fas fa-key"></i>
                          </span>{" "}
                        </div>
                        <FastField
                          name="password"
                          type="password"
                          placeholder="પાસવર્ડ"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let password = e.target.value;

                            setFieldValue("password", password);
                          }}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div class="d-flex justify-content-center mt-3 login_containerL ">
                        <button
                          type="submit"
                          name="button"
                          style={{ backgroundColor: "#0f2649" }}
                          class="btn btn-primary"
                        >
                          પ્રવેશ કરો
                        </button>
                      </div>
                    </Form>
                  </div>

                  <div class=" m-3 ourBtn">
                    <hr style={{ color: "white" }}></hr>
                    <div class="d-flex justify-content-around">
                      <Button className="btn btn-primary m-2"
                        // style={{ }}
                        style={{ color: "white", width: "50%", backgroundColor: "#0f2649" }}
                        onClick={() => {
                          navigate(`/`);
                        }}
                      >
                        પાછા જાઓ
                      </Button>
                      <Button className="btn btn-primary m-2"
                        style={{ color: "white", width: "50%", backgroundColor: "#0f2649" }}
                        onClick={() => {
                          navigate(`/ContectUs`);
                        }}
                      >
                        જોડાઓ
                      </Button>
                      <Button className="btn btn-primary m-2" style={{ color: "white", width: "50%", backgroundColor: "#0f2649" }}> દાન કરો</Button>
                    </div>
                    {/* <table width="100%" style={{ textAlign: "center" }}>
                      <tr>
                        <td width="33%" className="btn text-white">
                          <Button
                            style={{ width: "90%" }}
                            onClick={() => {
                              navigate(`/`);
                            }}
                          >
                            પાછા જાઓ
                          </Button>
                        </td>
                        <td width="33%" className="btn text-white">
                          <Button
                            style={{ width: "90%" }}
                            onClick={() => {
                              navigate(`/ContectUs`);
                            }}
                          >
                            જોડાઓ
                          </Button>
                        </td>
                        <td
                          width="33%"
                          className="btn text-white"
                          onClick={() => {
                            navigate(`/DonateUs`);
                          }}
                        >
                          <Button style={{ width: "90%" }}> દાન કરો</Button>
                        </td>
                      </tr>
                    </table> */}
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
      {/* <Grid container spacing={3} className="page">
                <Grid item xs={12} sm={12} md={12}>
                    <h1 style={{ color: "red", textAlign: "center" }}>Ekta Ej Laksh Login</h1>

                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{display:"flex",justifyContent:"center"}}>
                <Card style={{width:"60vh",height:"60vh"}}>
                    <label>Icard Id</label>
                    <input type="text" placeholder="Icard Id"/>
                    <label>password</label>
                    <input type="text" placeholder="Icard Id"/>
                </Card>
                </Grid>
            </Grid> */}
    </>
  );
};

export default LoginPage;
