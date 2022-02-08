import DateFnsUtils from "@date-io/date-fns";

import { Card, Divider, Grid, IconButton, TextField } from "@material-ui/core";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { lighten, makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Paper from "@material-ui/core/Paper";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import * as yup from "yup";

import { Button, Col, Row } from "react-bootstrap";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

import { string } from "yup/lib/locale";

import { useState } from "react";

import withReactContent from "sweetalert2-react-content";

import { convertBase64 } from "../../../../helper/base64Converter";
import {
  addUserAction,
  cheakUserStatusAction,
  cleanAllStateAction,
  cleanCityAction,
  cleanDistrictAction,
  getAllJobsAction,
  getCityAction,
  getDistrictAction,
  getStateAction,
  resetMessageActon,
  resetUserStatusAction,
} from "../../../../Redux/Actions/index";
// import Loader from "../../../../page/loader/Loader";

import KErrorMessage from "./KErrorMessage";

// import EmailForm from "./Form/EmailForm";
// import OtherForm from "./Form/OtherForm";
// import PaymentForm from "./Form/PaymentForm";
// import PersonalForm from "./Form/PersonalForm";

const MySwal = withReactContent(Swal);

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
// firstName,
//     sarname,
//     fatherName,
//     motherName,
//     birthDate,
//     bloodGroup,
//     gender,
//     marrage,
//     password,
//     image,
//     email,
//     totalFamilyMembers: parseInt(totalFamilyMembers),
//     husbandName,
//     study,
//     user_state: parseInt(user_state),
//     user_distict: parseInt(user_distict),
//     user_city: parseInt(user_city),
//     address,
//     mobileNumber,
//     whatsAppNumber,
//     pinCode,
const validationSchema = yup.object({
  sarname: yup.string().required("sarname is Required!"),
  fatherName: yup.string().required("fathername is Required!"),
  bloodGroup: yup.string().required("bloodGroup is Required!"),
  // email:  yup.string().required("emailis required"),
  totalFamilyMembers: yup.number().required("mumber is require"),
  address: yup.string().required("address is require"),
  motherName: yup.string().required("Mothername is require"),
  husbandName: yup.string(),
  study: yup.string(),
  firstName: yup.string().required(),
  mobileNumber: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not Valid Phone Number!")
    .required("Phone is Required!"),
  image: yup.mixed().required("Phone is Required!"),
  pinCode: yup.string().required("pincode is required"),
  study: yup.string().required("study is required"),
  whatsAppNumber: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not Valid Phone Number!")
    .required("Phone is Required!"),
  user_distict: yup.string().required("dist is Required!"),
  user_state: yup.string().required("state is Required!"),
  user_city: yup.string().required("city is Required!"),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
  gender: yup.string().required("Gender is Required!"),
  marrage: yup.string().required("mrg Status is Required!"),
  birthDate: yup.date().required("Date of Birth is required"),
  businessAddress: yup.string(),
  docImage: yup.string(),
});
export default function UpdateUser() {
  const user = useSelector((state) => state.user);
  const place = useSelector((state) => state.place);
  const job = useSelector((state) => state.job);
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(``);
  const [sarname, setSarname] = useState(``);
  const [fatherName, setFatherName] = useState();
  const [motherName, setMotherName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [gender, setGender] = useState();
  const [marrage, setMarrage] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [image, setImage] = useState();
  const [docImage, setDocImage] = useState();
  const [totalFamilyMembers, setTotalFamilyMembers] = useState();
  const [husbandName, setHusbandName] = useState();
  const [study, setStudy] = useState();
  const [user_state, setUser_state] = useState(0);
  const [user_distict, setUser_distict] = useState(0);
  const [user_city, setUser_city] = useState(0);
  const [address, setAddress] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [whatsAppNumber, setWhatsAppNumber] = useState();
  const [pinCode, setPinCode] = useState();
  const [city, setCity] = useState(0);
  const [state, setState] = useState(0);
  const [district, setDistrict] = useState(0);

  const [page, setPage] = useState(`1`);
  const [email, setEmail] = useState();
  const [date, changeDate] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());
  const verifyMeFunc = (e) => {
    e.preventDefault();
    dispatch(resetUserStatusAction());
    localStorage.setItem("joinUsEmail", email);
    dispatch(cheakUserStatusAction({ email }));
  };
  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setImage(base64);
  };
  const uploadDocImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setDocImage(base64);
  };
  if (user.message == "User CREATED") {
    Swal.fire("Good job!", "You clicked the button!", "success");
    dispatch(resetUserStatusAction());
    dispatch(resetMessageActon());
    // localStorage.setItem("joinUsEmail", email)
    dispatch(cheakUserStatusAction(localStorage.getItem("joinUsEmail")));
  }
  // const onSubmitJoinFunc = (e) => {
  //   e.preventDefault();
  // const data = {
  //   firstName,
  //   sarname,
  //   fatherName,
  //   motherName,
  //   birthDate,
  //   bloodGroup,
  //   gender,
  //   marrage,
  //   password,
  //   image,
  //   email,
  //   totalFamilyMembers: parseInt(totalFamilyMembers),
  //   husbandName,
  //   study,
  //   user_state: parseInt(user_state),
  //   user_distict: parseInt(user_distict),
  //   user_city: parseInt(user_city),
  //   address,
  //   mobileNumber,
  //   whatsAppNumber,
  //   pinCode,
  // };
  // console.log(data)
  // dispatch(addUserAction(data))
  // dispatch(cheakUserStatusAction({ email: localStorage.getItem('joinUsEmail') }));
  // };
  useEffect(() => {
    dispatch(cleanAllStateAction());
  }, []);
  useEffect(async () => {
    await dispatch(getStateAction());
  }, []);
  useEffect(() => {
    // alert(company_state);
    if (user_state != -1) {
      dispatch(getDistrictAction(user_state));
    }
  }, [user_state]);
  useEffect(() => {
    // alert(company_distict);
    if (user_distict != -1) {
      dispatch(getCityAction(user_distict));
    }
  }, [user_distict]);
  return (
    <>
      {/* <Loader loading={user.loading} /> */}
     
     
   
     
          <Grid className="px-3" item xs={12} sm={12}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                firstName: "",
                sarname: "",
                fatherName: "",
                motherName: "",
                birthDate: "",
                bloodGroup: "",
                gender: "",
                marrage: "",
                password: "",
                image: "",
                email: "",
                totalFamilyMembers: "",
                husbandName: "",
                study: "",
                user_distict: "",
                user_state: "",
                user_city: "",
                address: "",
                mobileNumber: "",
                whatsAppNumber: "",
                pinCode: "",
                business: "",
                businessAddress: "",
                docImage: "",
              }}
              onSubmit={(values) => {
                const data = {
                  firstName: values.firstName,
                  sarname: values.sarname,
                  fatherName: values.fatherName,
                  motherName: values.motherName,
                  birthDate: values.birthDate,
                  bloodGroup: values.bloodGroup,
                  gender: values.gender,
                  marrage: values.marrage,
                  password: values.password,
                  image: image,
                  email: email,
                  docImage: docImage,
                  totalFamilyMembers: parseInt(values.totalFamilyMembers),
                  husbandName: values.husbandName,
                  study: values.study,
                  user_state: parseInt(values.user_state),
                  user_distict: parseInt(values.user_distict),
                  user_city: parseInt(values.user_city),
                  address: values.address,
                  mobileNumber: values.mobileNumber,
                  whatsAppNumber: values.whatsAppNumber,
                  pinCode: values.pinCode,
                  business: values.business,
                  businessAddress: values.businessAddress,
                };
                console.log(data);
                dispatch(addUserAction(data));

                dispatch(
                  cheakUserStatusAction({
                    email: localStorage.getItem("joinUsEmail"),
                  })
                );
              }}
            >
              {({ values, setFieldValue }) => (
                <Card
                  style={{
                    padding: "20px",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                    margin: "10px",

                    marginBottom: "40px",
                  }}
                >
                  <Form>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <lebel>Sarname</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="sarname"
                          className="form-control"
                          placeholder="sarname"
                          type="text"
                        />
                        <KErrorMessage name="sarname" />

                        {/* <input
                  value={sarname}
                  onChange={(e) => setSarname(e.target.value)}
                  type="text"
                  name="sarname"
                  placeholder="sarname"
                  className="form-control"
                /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel>First name</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="firstName"
                          className="form-control"
                          placeholder="firstName"
                          type="text"
                        />
                        <KErrorMessage name="firstName" />

                        {/* <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first"
                  placeholder="First Name"
                  className="form-control"
                /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel>Father name</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="fatherName"
                          className="form-control"
                          placeholder="fatherName"
                          type="text"
                        />
                        <KErrorMessage name="fatherName" />

                        {/* <input
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  type="text"
                  name="fathername"
                  placeholder="Father Name"
                  className="form-control"
                /> */}
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <lebel>Mother name</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="motherName"
                          className="form-control"
                          placeholder="motherName"
                          type="text"
                        />
                        <KErrorMessage name="motherName" />

                        {/* <input
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  type="text"
                  name="motherName "
                  placeholder="Mother Name"
                  className="form-control"
                /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel> Business</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="business"
                          className="form-control"
                          placeholder="business"
                          type="text"
                        />
                        <KErrorMessage name="business" />

                        {/* <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first"
                  placeholder="First Name"
                  className="form-control"
                /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel>BusinessAddress</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="businessAddress"
                          className="form-control"
                          placeholder="businessAddress"
                          type="text"
                        />
                        <KErrorMessage name="businessAddress" />

                        {/* <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first"
                  placeholder="First Name"
                  className="form-control"
                /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel>Password</lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="password"
                          className="form-control"
                          placeholder="password"
                          type="password"
                        />
                        <KErrorMessage name="password" />

                        {/* <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password "
                  placeholder="password "
                  className="form-control"
                /> */}
                      </div>

                      <div class="form-group col-md-4">
                        <label for="bloodGroup">Choose bloodGroup:</label>
                        {/* <Field
                        style={{background:"#e4ebea"}} className="form-control" name="motherName" className="form-control" placeholder="motherName" type="text" />
                    <KErrorMessage name="motherName" /> */}

                        {/* <select
                  className="form-control"
                  name="Blood Group"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  id="cars"
                > */}
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="bloodGroup"
                          as="select"
                        >
                          <option value="None">None</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </Field>
                        <KErrorMessage name="bloodGroup" />

                        {/* </select> */}
                      </div>
                      <div class="form-group col-md-2">
                        <table width="100%">
                          <tr>
                            <th colspan="2">
                              <label for="bloodGroup">BirthDate</label>
                              <lable>Gender:</lable>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <label>Male:</label>
                              <Field
                                style={{ background: "#e4ebea" }}
                                name="gender"
                                value="male"
                                type="radio"
                              />
                            </td>
                            <td>
                              <label>Female:</label>
                              <Field
                                style={{ background: "#e4ebea" }}
                                name="gender"
                                value="female"
                                type="radio"
                              />
                            </td>
                          </tr>
                        </table>
                        <KErrorMessage name="gender" />
                      </div>
                      <div class="form-group col-md-2">
                        {/* <label>Marrage Status:</label> */}
                        {/* <br /> <br /> */}
                        <table width="100%">
                          <tr>
                            <th colspan="2">
                              <lable>Marrage Status</lable>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <label>marrid:</label>

                              <Field
                                style={{ background: "#e4ebea" }}
                                name="marrage"
                                value="1"
                                type="radio"
                              />
                            </td>
                            <td>
                              <label>unMarrid:</label>
                              <Field
                                style={{ background: "#e4ebea" }}
                                name="marrage"
                                value="0"
                                type="radio"
                              />
                            </td>
                          </tr>
                        </table>

                        <KErrorMessage name="marrage" />
                      </div>
                    </div>
                    <div class="form-row">
                     
                      {values.gender == "female" && values.marrage == "1" ? (
                        <div class="form-group col-md-4">
                          <lebel>Husband Name</lebel>
                          <Field
                            style={{ background: "#e4ebea" }}
                            className="form-control"
                            name="husbandName"
                            className="form-control"
                            placeholder="husbandName"
                            type="text"
                          />
                          <KErrorMessage name="husbandName" />

                          {/* <input
                      value={husbandName}
                      onChange={(e) => setHusbandName(e.target.value)}
                      type="text"
                      name="husband"
                      placeholder="husband Name "
                      className="form-control"
                    /> */}
                        </div>
                      ) : (
                        ``
                      )}
                      <div class="form-group col-md-4">
                        <lebel> Total Family Members </lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="totalFamilyMembers"
                          className="form-control"
                          placeholder="husbandName"
                          type="text"
                        />
                        <KErrorMessage name="totalFamilyMembers" />

                        {/* <input
                      value={totalFamilyMembers}
                      onChange={(e) => setTotalFamilyMembers(e.target.value)}
                      type="number"
                      name="Members"
                      placeholder="Total Family Members"
                      className="form-control"
                    /> */}
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <lebel> Study </lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="study"
                          className="form-control"
                          placeholder="study"
                          type="text"
                        />
                        <KErrorMessage name="study" />

                        {/* <input
                      value={study}
                      onChange={(e) => setStudy(e.target.value)}
                      type="text"
                      name="Study"
                      placeholder="Study"
                      className="form-control"
                    /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel> Mobile Number </lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="mobileNumber"
                          className="form-control"
                          placeholder="mobileNumber"
                          type="text"
                        />
                        <KErrorMessage name="mobileNumber" />

                        {/* <input
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      type="text"
                      name="Mobile Number"
                      placeholder="mobile Number"
                      className="form-control"
                    /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <lebel> whatsapp Number </lebel>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="whatsAppNumber"
                          className="form-control"
                          placeholder="whatsAppNumber"
                          type="text"
                        />
                        <KErrorMessage name="whatsAppNumber" />

                        {/* <input
                      value={whatsAppNumber}
                      onChange={(e) => setWhatsAppNumber(e.target.value)}
                      type="text"
                      name="Whatsapp number"
                      placeholder="Whats App Number"
                      className="form-control"
                    /> */}
                      </div>
                    </div>
                   
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label> Pin Code:</label>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="pinCode"
                          className="form-control"
                          placeholder="pincode"
                          type="text"
                        />
                        <KErrorMessage name="pinCode" />

                        {/* <input
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      type="text"
                      name="pincode"
                      placeholder="Pin code"
                      className="form-control"
                    /> */}
                      </div>
                      <div class="form-group col-md-4">
                        <label> Address:</label>
                        <Field
                          style={{ background: "#e4ebea" }}
                          className="form-control"
                          name="address"
                          className="form-control"
                          placeholder="address"
                          type="text"
                        />
                        <KErrorMessage name="address" />

                        {/* <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      row="5"
                      name="pincode"
                      placeholder="Pin code"
                      className="form-control"
                    /> */}
                      </div>
                   
                    
                    </div>
                   
                    <div class="form-row">
                      <div class="form-group col-md-12 ">
                        <button type="submit" class="btn btn-primary">
                          Join
                        </button>
                      </div>
                    </div>
                  </Form>
                </Card>
              )}
            </Formik>
          </Grid>
        
      {/* {user.userState.exist != null &&
        user.userState.exist &&
        !user.userState.payment &&
        user.userState.record && (
          <Grid className="px-3" item xs={12} sm={12}>
            <PaymentForm />
          </Grid>
        )} */}

      {/* </form> */}
      {/* <div style={{ margin: "20px", padding: "20px" }} className="ourBtn">
        {page == `1` ? <EmailForm setPage={setPage} /> : ``}
        {page == `2` ? <PersonalForm setPage={setPage} /> : ``}
        {page == `3` ? <OtherForm setPage={setPage} /> : ``}
        {page == `4` ? <PaymentForm setPage={setPage} /> : ``}
      </div> */}
    </>
  );
}



// <div class="form-group col-md-4">
// <label for="bloodGroup">BirthDate</label>

// {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
// <DatePicker
// variant="inline"
// className="form-control"
// value={birthDate}
// onChange={setBirthDate}
// />
// </MuiPickersUtilsProvider> */}

// <Field
//   style={{ background: "#e4ebea" }}
//   name="birthDate"
//   className="form-control"
//   type="date"
// />
// <KErrorMessage name="birthDate" />
// </div>