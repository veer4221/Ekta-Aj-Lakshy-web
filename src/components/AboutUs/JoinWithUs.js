import React, { useEffect } from "react";

import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";

import { Button, Row, Col } from "react-bootstrap";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import PersonalForm from "./Form/PersonalForm";
import EmailForm from "./Form/EmailForm";
import OtherForm from "./Form/OtherForm";
import PaymentForm from "./Form/PaymentForm";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as yup from "yup";
// import MomentUtils from "@date-io/moment";
// import { KeyboardDatePicker } from "@material-ui/pickers";

import {
  cheakUserStatusAction,
  cleanAllStateAction,
  cleanCityAction,
  cleanDistrictAction,
  addUserAction,
  getAllJobsAction,
  resetMessageActon,
  getCityAction,
  getDistrictAction,
  resetUserStatusAction,
  getStateAction,
} from "../../Redux/Actions/index";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
// import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";
import { convertBase64 } from "../../helper/base64Converter";
import { string } from "yup/lib/locale";
// import Swal from 'sweetalert2'
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
  motherName:yup.string().required("Mothername is require"),
  husbandName: yup.string(),
  study: yup.string(),
  firstName:yup.string().required(),
  mobileNumber: yup
    .number()
    .min(1000000000, "Not Valid Phone Number!")
    .max(9999999999, "Not Valid Phone Number!")
    .required("Phone is Required!"),
  image:yup.mixed().required("Phone is Required!"),
  pinCode:yup.string().required("pincode is required"),
  study:yup.string().required("study is required"),
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


});
export default function JoinWithUs() {
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
    dispatch(resetUserStatusAction())
    localStorage.setItem("joinUsEmail", email)
    dispatch(cheakUserStatusAction({ email }));
  };
  const uploadImage = async (e) => {
    console.log(e.target.files)
    const file = e.target.files[0]
    console.log(file)
    const base64 = await convertBase64(file)
    console.log(base64, 'bsae')
    setImage(base64)

  }
  if(user.message == "User CREATED"){
    Swal.fire("Good job!", "You clicked the button!", "success")
    dispatch(resetUserStatusAction())
    dispatch(resetMessageActon())
    // localStorage.setItem("joinUsEmail", email)
    dispatch(cheakUserStatusAction(localStorage.getItem('joinUsEmail')));
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
      <Grid className="px-3" item xs={12} sm={12}>


        <form onSubmit={verifyMeFunc}>
          <lebel>Email</lebel>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="form-control"
          />
          <button type="submit">Verify</button>
        </form>






      </Grid>
      {user.userState &&
        user.userState.exist &&
        user.userState.payment &&
        user.userState.record && (
          <Grid className="px-3" item xs={12} sm={12}>
            <h1>you are already Joined</h1>
          </Grid>
        )}
      <Grid className="px-3" item xs={12} sm={12}></Grid>
      {/* <form width="100%"> */}
      {user.userState.exist != null &&
        !user.userState.exist &&
        !user.userState.payment &&
        !user.userState.record && (<Grid className="px-3" item xs={12} sm={12}>
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
              user_distict:"",
              user_state:"",
              user_city:"",
              address: "",
              mobileNumber: "",
              whatsAppNumber: "",
              pinCode: "",
            }}
            onSubmit={(values) => {
             
              const data = {
                firstName:values.firstName,
                sarname:values.sarname,
                fatherName:values.fatherName,
                motherName:values.motherName,
                birthDate:values.birthDate,
                bloodGroup:values.bloodGroup,
                gender:values.gender,
                marrage:values.marrage,
                password:values.password,
                image:image,
                email:email,
                totalFamilyMembers: parseInt(values.totalFamilyMembers),
                husbandName:values.husbandName,
                study:values.study,
                user_state: parseInt(values.user_state),
                user_distict: parseInt(values.user_distict),
                user_city: parseInt(values.user_city),
                address:values.address,
                mobileNumber:values.mobileNumber,
                whatsAppNumber:values.whatsAppNumber,
                pinCode:values.pinCode,
              };
              console.log(data)
              dispatch(addUserAction(data))
              dispatch(cheakUserStatusAction({ email: localStorage.getItem('joinUsEmail') }));
            }}
          >
            {({ values,setFieldValue  }) => (

              <Form >
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <lebel>Sarname</lebel>
                    <Field className="form-control" name="sarname" className="form-control" placeholder="sarname" type="text" />
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
                    <Field className="form-control" name="firstName" className="form-control" placeholder="firstName" type="text" />
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
                    <Field className="form-control" name="fatherName" className="form-control" placeholder="fatherName" type="text" />
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
                  <div class="form-group col-md-6">
                    <lebel>Mother name</lebel>
                    <Field className="form-control" name="motherName" className="form-control" placeholder="motherName" type="text" />
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
                  <div class="form-group col-md-6">
                    <lebel>Password</lebel>
                    <Field className="form-control" name="password" className="form-control" placeholder="password" type="password" />
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
               
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="bloodGroup">Choose bloodGroup:</label>
                    {/* <Field className="form-control" name="motherName" className="form-control" placeholder="motherName" type="text" />
                    <KErrorMessage name="motherName" /> */}

                    {/* <select
                  className="form-control"
                  name="Blood Group"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  id="cars"
                > */}
                    <Field className="form-control" name="bloodGroup" as="select">
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
                  <div class="form-group col-md-4">
                    <label>Gender:</label>
                    <br /> <br />
                    <label>Male:</label>
                    <Field name="gender" value="male" type="radio" />
                    <label>Female:</label>
                    <Field name="gender" value="female" type="radio" />
                    <KErrorMessage name="gender" />
                  </div>
                  <div class="form-group col-md-4">
                    <label>Marrage Status:</label>
                    <br /> <br />
                    <label>marrid:</label>
                    <Field name="marrage" value="1" type="radio" />
                    <label>unMarrid:</label>
                    <Field name="marrage" value="0" type="radio" />
                    <KErrorMessage name="marrage" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="bloodGroup" >BirthDate</label>

                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        variant="inline"
                        className="form-control"
                        value={birthDate}
                        onChange={setBirthDate}
                      />
                    </MuiPickersUtilsProvider> */}

                    <Field name="birthDate"  className="form-control" type="date" />
                    <KErrorMessage name="birthDate" />
                  </div>
               {values.gender=="female" && values.marrage=="marrid"?
               
               
                  <div class="form-group col-md-4">
                    <lebel>Husband Name</lebel>
                    <Field className="form-control" name="husbandName" className="form-control" placeholder="husbandName" type="text" />
                    <KErrorMessage name="husbandName" />

                    {/* <input
                      value={husbandName}
                      onChange={(e) => setHusbandName(e.target.value)}
                      type="text"
                      name="husband"
                      placeholder="husband Name "
                      className="form-control"
                    /> */}
                  </div>:``}
                  <div class="form-group col-md-4">
                    <lebel> Total Family Members </lebel>
                    <Field className="form-control" name="totalFamilyMembers" className="form-control" placeholder="husbandName" type="text" />
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
                    <Field className="form-control" name="study" className="form-control" placeholder="study" type="text" />
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
                    <Field className="form-control" name="mobileNumber" className="form-control" placeholder="mobileNumber" type="text" />
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
                    <Field className="form-control" name="whatsAppNumber" className="form-control" placeholder="whatsAppNumber" type="text" />
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
                    <label class="form-label" for="form6Example1">
                      State
                    </label>
                    <Field
                      name="user_state"
                      as="select"
                      className="formBg"
                      id="user_state"
                      value={user_state}
                      onChange={(e) => {
                        setUser_city(-1);
                        setUser_distict(-1);
                        dispatch(cleanCityAction());
                        dispatch(cleanDistrictAction());
                      
                        setUser_state(e.target.value);
                        values.user_state=e.target.value
                      }}
                      class="form-control "
                    >
                      <option value={-1}>please Select</option>

                      {place.state.rows &&
                        place.state.rows.map((data) => (
                          <>
                            <option value={`${data.state_id}`}>
                              {data.state_title}
                            </option>
                          </>
                        ))}
                      {/* <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option> */}
                    </Field>
                    <KErrorMessage name="user_state" />

                  </div>
                  <div class="form-group col-md-4">
                    <label class="form-label" for="form6Example1">
                      Dist
                    </label>
                    <Field
                      name="user_distict"
                      as="select"
                      className="formBg"
                      id="user_distict"
                 
                      value={user_distict}
                      // value={company_distict}
                      onChange={(e) => {
                        dispatch(cleanCityAction());
                        setUser_city(-1);
                        setUser_distict(e.target.value);
                        values.user_distict=e.target.value

                      }}
                      class="form-control"
                    >
                      <option value={-1}>please select</option>

                      {place.district.rows &&
                        place.district.rows.map((data) => (
                          <>
                            <option value={`${data.districtid}`}>
                              {data.district_title}
                            </option>
                          </>
                        ))}
                    </Field>
                    <KErrorMessage name="user_distict" />
                   

                  </div>
                  
                  <div class="form-group col-md-4">
                    <label class="form-label" for="form6Example1">
                      city
                    </label>
                    <Field
                      name="user_city"
                      className="formBg"
                     
                      as="select"
                      id="user_city"
                      value={user_city}
                      onChange={(e) => {
                        setUser_city(e.target.value);
                        values.user_city=e.target.value

                      }}
                      class="form-control formBg"
                    > 
                      <option value={-1}>please Select</option>

                      {place.city.rows &&
                        place.city.rows.map((data) => (
                          <>
                            <option value={`${data.id}`}>{data.name}</option>
                          </>
                        ))}
                      {/* <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option> */}
                    </Field>
                    <KErrorMessage name="user_city" />

                                    </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label> Pin Code:</label>
                    <Field className="form-control" name="pinCode" className="form-control" placeholder="pincode" type="text" />
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
                    <Field className="form-control" name="address" className="form-control" placeholder="address" type="text" />
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
                  <div class="form-group col-md-4">
                    <label> Profile Image:</label>
                    <div class="custom-file">
                      <input
                        onChange={(e) => {
                      setFieldValue("image", e.target.files[0])

                          uploadImage(e)
                        }}
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    <KErrorMessage name="image" />

                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12 ourBtn">
                    <img src={image} width="150px" height="150px" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12 ourBtn">
                    <button type="submit">Join</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Grid>)}
      {user.userState.exist != null &&
        user.userState.exist &&
        !user.userState.payment &&
        user.userState.record && (<Grid className="px-3" item xs={12} sm={12}>

          <PaymentForm />

        </Grid>)}

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
