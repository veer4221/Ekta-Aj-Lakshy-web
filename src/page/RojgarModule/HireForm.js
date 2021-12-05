import AdapterDateFns from "@mui/lab/AdapterDateFns";

import Grid from "@material-ui/core/Grid";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";

import * as Yup from "yup";

import { Button, Card, CardBody, CardHeader } from "react-bootstrap";

import { ErrorMessage, FastField, Field, Form, Formik } from "formik";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import {
  cleanCityAction,
  cleanDistrictAction,
  getCityAction,
  getDistrictAction,
  getStateAction,
} from "../../Redux/Actions";
import { addJobAction } from "../../Redux/Actions/job.action";

import "./findJob.css";

// import TimePicker from "react-time-picker";

const HireForm = () => {
  const place = useSelector((state) => state.place);
  const job = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [value, setValue] = React.useState(null);
  // const [company_name, setCompany_name] = useState();
  // const [company_email, setCompany_email] = useState();
  // const [job_category, setJob_category] = useState();
  // const [title, setTitle] = useState();
  const [company_stateState, setCompany_stateState] = useState(-1);
  const [company_distictState, setCompany_distictState] = useState(-1);
  // const [company_Taluka, setCompany_Taluka] = useState();
  const [company_city, setCompany_city] = useState();
  // const [Qualification, setQualification] = useState();
  // const [working_days, setWorking_days] = useState();
  // const [start_Time, setStart_Time] = useState();
  // const [end_Time, setEnd_Time] = useState();
  // const [address, setAddress] = useState();
  // const [job_description, setJob_description] = useState();
  // const [company_contect_number, setCompany_contect_number] = useState();
  // const [salary_min, setsalary_min] = useState();
  // const [salary_max, setsalary_max] = useState();
  // const [job_role, setJob_role] = useState();
  const [allState, setAllState] = useState([]);
  const created_byLOCAL = JSON.parse(localStorage.getItem("user"));
  const validationSchema = Yup.object().shape({
    company_name: Yup.string().required("Company Name is Required"),
    company_email: Yup.string().required("Company Email is Required"),
    job_role: Yup.string().required("Job Role is Required"),
    // created_by: Yup.number().required("created_byis Required"),
    job_category: Yup.string().required("Job Category is Required"),
    company_state: Yup.string().required("Company State is Required"),
    company_distict: Yup.number().required("Company Distict is Required"),
    // company_Taluka: Yup.number().required("is Required"),
    company_city: Yup.number().required("Company City is Required"),
    company_contect_number: Yup.string().required(
      "Company Contect Number is Required"
    ),
    Qualification: Yup.string().required("Qualification is Required"),
    working_days: Yup.string().required("Working days is Required"),
    start_Time: Yup.string().required("start_Time is Required"),
    end_Time: Yup.string().required("End Time is Required"),
    address: Yup.string().required("Address is Required"),
    job_description: Yup.string().required("Job_description is Required"),
    salary_min: Yup.number().required("Salary_min is Required"),
    salary_max: Yup.number().required("Salary_max is Required"),
    // firstName: Yup.string()
    //   .required("FirstName name is mandatory")
    //   .min(2, "FirstName Name should be minimum 2 characters")
    //   .max(50, "FirstName Name should be maximum 50 characters")
    //   .matches(
    //     /^[a-zA-Z0-9 _]*$/,
    //     "FirstName Name should contains characters and numbers"
    //   ),
    // lastName: Yup.string()
    //   .required("LastName name is mandatory")
    //   .min(2, "LastName Name should be minimum 2 characters")
    //   .max(50, "LastName Name should be maximum 50 characters")
    //   .matches(
    //     /^[a-zA-Z0-9 _]*$/,
    //     "LastName Name should contains characters and numbers"
    //   ),
    // email: Yup.string()
    //   .email("Must be a valid email")
    //   .max(255)
    //   .required("Email is required"),
    // mobileNumber: Yup.string()
    //   .min(10, "MobileNumber should be minimum 10 characters")
    //   .max(10, "MobileNumber should be maximum 10 characters")
    //   .matches(/^[0-9]*$/, "MobileNumber Name should contains  numbers"),
    // password: Yup.string()
    //   .required("No password provided.")
    //   .min(8, "Password is too short - should be 8 chars minimum.")
    //   .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    // userName: Yup.string()
    //   .required("UserName name is mandatory")
    //   .matches(
    //     /^[a-zA-Z0-9 _]*$/,
    //     "UserName Name should contains characters and numbers"
    //   )
    //   .min(2, "UserName Name should be minimum 2 characters")
    //   .max(50, "UserName Name should be maximum 50 characters"),
    // role_id: Yup.number().required("Role is required"),
  });
  const initialValues = {
    company_name: "",
    company_email: "",
    job_role: "",
    created_by: "",
    job_category: "",
    company_state: "",
    company_distict: "",
    company_Taluka: "",
    company_city: "",
    company_contect_number: "",

    Qualification: "",
    working_days: "",
    start_Time: "",
    end_Time: "",
    address: "",
    job_description: "",
    salary_min: "",
    salary_max: "",
  };

  const onSubmitFunc = (e) => {
    // e.preventDefault();
    // let record = {
    //   company_name,
    //   company_email,
    //   job_role,
    //   created_by: created_by.id,
    //   job_category,
    //   company_state,
    //   company_distict,
    //   company_Taluka,
    //   company_city,
    //   company_contect_number,

    //   Qualification,
    //   working_days,
    //   start_Time,
    //   end_Time,
    //   address,
    //   job_description,
    //   salary_min,
    //   salary_max,
    // };company_distict
    e.company_city = parseInt(e.company_city);
    e.company_distict = parseInt(e.company_distict);
    e.company_state = parseInt(e.company_state);
    e.salary_max = parseInt(e.salary_max);
    e.salary_min = parseInt(e.salary_min);
    e.created_by = parseInt(created_byLOCAL.id);

    console.log(e);
    dispatch(addJobAction(e));
    navigate(`/Rojgharmain/FindJob`);
  };
  useEffect(async () => {
    await dispatch(getStateAction());
  }, []);
  useEffect(() => {
    // alert(company_state);
    if (company_stateState != -1) {
      dispatch(getDistrictAction(company_stateState));
    }
  }, [company_stateState]);
  useEffect(() => {
    // alert(company_distict);
    if (company_distictState != -1) {
      dispatch(getCityAction(company_distictState));
    }
  }, [company_distictState]);

  const [value, onChange] = useState("10:00");
  return (
    <div>
      {/* <form onSubmit={onSubmitFunc}> */}
      <Grid container className="Rg-bg" style={{ color: "white" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitFunc}
          onValidationError={(errorValues) => {}}
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
              <Card style={{ background: "black", margin: "20px" }}>
                <Form>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Company Name</label>
                        <FastField
                          name="company_name"
                          type="text"
                          className={
                            "form-control" +
                            (errors.company_name && touched.company_name
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let company_name = e.target.value;

                            setFieldValue("company_name", company_name);
                          }}
                        />
                        <ErrorMessage
                          name="company_name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Company Email</label>
                        <FastField
                          name="company_email"
                          type="email"
                          className={
                            "form-control" +
                            (errors.company_email && touched.company_email
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let company_email = e.target.value;

                            setFieldValue("company_email", company_email);
                          }}
                        />
                        <ErrorMessage
                          name="company_email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4" col-sm-12>
                        <label className="mt-4">Job Role</label>
                        <FastField
                          name="job_role"
                          type="text"
                          className={
                            "form-control" +
                            (errors.job_role && touched.job_role
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let job_role = e.target.value;

                            setFieldValue("job_role", job_role);
                          }}
                        />
                        <ErrorMessage
                          name="job_role"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      {/* <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Job Category</label>
                        <FastField
                          name="job_category"
                          type="text"
                          className={
                            "form-control" +
                            (errors.job_category && touched.job_category
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let job_category = e.target.value;

                            setFieldValue("job_category", job_category);
                          }}
                        />
                        <ErrorMessage
                          name="job_category"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div> */}

                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Company Contect Number</label>
                        <FastField
                          name="company_contect_number"
                          type="text"
                          className={
                            "form-control" +
                            (errors.company_contect_number &&
                            touched.company_contect_number
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let company_contect_number = e.target.value;
                            setFieldValue(
                              "company_contect_number",
                              company_contect_number
                            );
                          }}
                        />
                        <ErrorMessage
                          name="company_contect_number"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Address</label>
                        <FastField
                          name="address"
                          type="text"
                          className={
                            "form-control" +
                            (errors.address && touched.address
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let address = e.target.value;

                            setFieldValue("address", address);
                          }}
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Job Description</label>
                        <FastField
                          name="job_description"
                          type="text"
                          className={
                            "form-control" +
                            (errors.job_description && touched.job_description
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let job_description = e.target.value;

                            setFieldValue("job_description", job_description);
                          }}
                        />
                        <ErrorMessage
                          name="job_description"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Salary Min</label>
                        <FastField
                          name="salary_min"
                          type="number"
                          className={
                            "form-control" +
                            (errors.salary_min && touched.salary_min
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let salary_min = e.target.value;

                            setFieldValue("salary_min", salary_min);
                          }}
                        />
                        <ErrorMessage
                          name="salary_min"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Salary Max</label>
                        <FastField
                          name="salary_max"
                          type="number"
                          className={
                            "form-control" +
                            (errors.salary_max && touched.salary_max
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let salary_max = e.target.value;

                            setFieldValue("salary_max", salary_max);
                          }}
                        />
                        <ErrorMessage
                          name="salary_max"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Start Time</label>
                        <FastField
                          name="start_Time"
                          type="time"
                          className={
                            "form-control" +
                            (errors.start_Time && touched.start_Time
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let start_Time = e.target.value;

                            setFieldValue("start_Time", start_Time);
                          }}
                        />
                        <ErrorMessage
                          name="start_Time"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">End time</label>
                        <FastField
                          name="end_Time"
                          type="time"
                          className={
                            "form-control" +
                            (errors.end_Time && touched.end_Time
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) => {
                            let end_Time = e.target.value;

                            setFieldValue("end_Time", end_Time);
                          }}
                        />
                        <ErrorMessage
                          name="end_Time"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Job Category</label>
                        <Field
                          name="job_category"
                          as="select"
                          className={`${
                            errors.job_category && touched.job_category
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          // className="form-control"
                        >
                          <option value=""></option>
                          <option value="Agriculture, Food and Natural Resources Careers">
                            Agriculture, Food and Natural Resources Careers
                          </option>
                          <option value="Architecture and Construction Careers">
                            Architecture and Construction Careers
                          </option>
                          <option value="Education and Training Careers">
                            Education and Training Careers
                          </option>
                          <option
                            value="Business Management and Administration Careers
"
                          >
                            Business Management and Administration Careers
                          </option>
                          <option
                            value=" Arts, Audio/Video Technology and Communications
                          Careers
"
                          >
                            Arts, Audio/Video Technology and Communications
                            Careers
                          </option>
                          <option
                            value="Finance Careers
"
                          >
                            Finance Careers
                          </option>
                          <option
                            value="Government and Public Administration Careers
"
                          >
                            Government and Public Administration Careers
                          </option>
                          <option
                            value="Health Science Careers
"
                          >
                            Health Science Careers
                          </option>
                          <option
                            value="                          Hospitality and Tourism Careers

"
                          >
                            Hospitality and Tourism Careers
                          </option>
                          <option value="Human Services Careers">
                            Human Services Careers
                          </option>
                          <option value="Information Technology Careers">
                            Information Technology Careers
                          </option>
                          <option value="Law, Public Safety, Corrections and Security Careers">
                            Law, Public Safety, Corrections and Security Careers
                          </option>
                          <option value="Manufacturing Careers">
                            Manufacturing Careers
                          </option>
                          <option value="Marketing, Sales and Service Careers">
                            Marketing, Sales and Service Careers
                          </option>
                          <option value="Science, Technology, Engineering and Mathematics Careers">
                            Science, Technology, Engineering and Mathematics
                            Careers
                          </option>
                          <option value="Transportation, Distribution and Logistics Careers">
                            Transportation, Distribution and Logistics Careers
                          </option>
                          <option value="other">Other</option>
                        </Field>

                        <ErrorMessage
                          name="job_category"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Qualification</label>
                        <Field
                          name="Qualification"
                          as="select"
                          className={`${
                            errors.Qualification && touched.Qualification
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          // className="form-control"
                        >
                          <option value=""></option>
                          <option value="Non Education">Non education</option>
                          <option value="10Pass">10Pass</option>
                          <option value="12 pass">12 pass</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Post Graduate">Post Graduate</option>
                        </Field>
                        <ErrorMessage
                          name="Qualification"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Week Working Days</label>
                        <Field
                          name="working_days"
                          as="select"
                          className={`${
                            errors.working_days && touched.working_days
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          // className="form-control"
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </Field>
                        <ErrorMessage
                          name="working_days"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">State</label>
                        <Field
                          name="company_state"
                          as="select"
                          className={`${
                            errors.company_state && touched.company_state
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          // value={company_state}
                          onChange={(e) => {
                            setCompany_city(-1);
                            setCompany_distictState(-1);
                            dispatch(cleanCityAction());
                            dispatch(cleanDistrictAction());
                            setCompany_stateState(e.target.value);
                            let company_state = e.target.value;

                            setFieldValue("company_state", company_state);
                          }}
                          className="form-control"
                        >
                          <option value=""></option>
                          {place?.state?.rows &&
                            place?.state?.rows.length > 0 &&
                            place?.state?.rows?.map((data) => (
                              <>
                                <option value={`${data.state_id}`}>
                                  {data.state_title}
                                </option>
                              </>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="company_state"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">Distict</label>
                        <Field
                          name="company_distict"
                          as="select"
                          // value={company_distict}
                          className={`${
                            errors.company_distict && touched.company_distict
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          onChange={(e) => {
                            dispatch(cleanCityAction());
                            setCompany_city(-1);
                            setCompany_distictState(e.target.value);
                            let company_distict = e.target.value;

                            setFieldValue("company_distict", company_distict);
                          }}
                          className="form-control"
                        >
                          <option value=""></option>
                          {place.district.rows &&
                            place.district.rows.map((data) => (
                              <>
                                <option value={`${data.districtid}`}>
                                  {data.district_title}
                                </option>
                              </>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="company_distict"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mt-4">City</label>
                        <Field
                          name="company_city"
                          as="select"
                          className={`${
                            errors.company_city && touched.company_city
                              ? " is-invalid"
                              : ""
                          } form-control`}
                          // onChange={(e) => {
                          //   setCompany_city(e.target.value);
                          // }}
                          // className="form-control"
                        >
                          <option value=""></option>
                          {place.city.rows &&
                            place.city.rows.map((data) => (
                              <>
                                <option value={`${data.id}`}>
                                  {data.name}
                                </option>
                              </>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="company_city"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12  d-flex justify-content-end pt-4">
                        <Button type="submit">
                          Submit&nbsp;
                          <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </Card>
            );
          }}
        </Formik>
      </Grid>
      {/* </form> */}
    </div>
  );
};

export default HireForm;

//  <Grid item xs={12}>
//           <h2 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
//             Hire Form
//           </h2>
//         </Grid>
//         {/* <div
//           style={{
//             width: "100%",
//             marginTop: "50px",
//           }}
//           className=" card-glass"
//         > */}
//         {/* <form> */}

//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Company Name
//           </label>
//           <input
//             // className="formBg"
//             type="text"
//             id="form6Example1"
//             value={company_name}
//             onChange={(e) => {
//               setCompany_name(e.target.value);
//             }}
//             class="form-control formBg formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Salary min
//           </label>
//           <input
//             // className="formBg"
//             type="number"
//             id="form6Example1"
//             value={salary_min}
//             onChange={(e) => {
//               setsalary_min(e.target.value);
//             }}
//             class="form-control formBg formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Salary max
//           </label>
//           <input
//             // className="formBg"
//             type="number"
//             id="form6Example1"
//             value={salary_max}
//             onChange={(e) => {
//               setsalary_max(e.target.value);
//             }}
//             class="form-control formBg formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Company Email
//           </label>
//           <input
//             // className="formBg"
//             type="email"
//             id="form6Example1"
//             value={company_email}
//             onChange={(e) => {
//               setCompany_email(e.target.value);
//             }}
//             class="form-control formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Contect Number
//           </label>
//           <input
//             className="formBg"
//             type="text"
//             id="form6Example1"
//             value={company_contect_number}
//             onChange={(e) => {
//               setCompany_contect_number(e.target.value);
//             }}
//             class="form-control formBg formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Catagory
//           </label>
//           <select
//             name="cars"
//             className="formBg"
//             id="cars"
//             value={job_category}
//             onChange={(e) => {
//               setJob_category(e.target.value);
//             }}
//             class="form-control formBg"
//           >
//             <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option>
//           </select>
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             State
//           </label>
//           <select
//             name="cars"
//             className="formBg"
//             id="cars"
//             value={company_state}
// onChange={(e) => {
//   setCompany_city(-1);
//   setCompany_distict(-1);
//   dispatch(cleanCityAction());
//   dispatch(cleanDistrictAction());
//   setCompany_state(e.target.value);
// }}
//             class="form-control formBg"
//           >
//             <option value={-1}>please Select</option>

//             {place.state.rows &&
//               place.state.rows.map((data) => (
//                 <>
//                   <option value={`${data.state_id}`}>{data.state_title}</option>
//                 </>
//               ))}
//             {/* <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option> */}
//           </select>
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Dist
//           </label>
//           <select
//             name="cars"
//             className="formBg"
//             id="cars"
//             value={company_distict}
// onChange={(e) => {
//   dispatch(cleanCityAction());
//   setCompany_city(-1);
//   setCompany_distict(e.target.value);
// }}
//             class="form-control formBg"
//           >
//             <option value={-1}>please Select</option>

//             {place.district.rows &&
//               place.district.rows.map((data) => (
//                 <>
//                   <option value={`${data.districtid}`}>
//                     {data.district_title}
//                   </option>
//                 </>
//               ))}
//           </select>
//         </Grid>

//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             city
//           </label>
//           <select
//             name="city"
//             className="formBg"
//             id="city"
//             value={company_city}
// onChange={(e) => {
//   setCompany_city(e.target.value);
// }}
//             class="form-control formBg"
//           >
//             <option value={-1}>please Select</option>

//             {place.city.rows &&
//               place.city.rows.map((data) => (
//                 <>
//                   <option value={`${data.id}`}>{data.name}</option>
//                 </>
//               ))}
//             {/* <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option> */}
//           </select>
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Job Role
//           </label>
//           <input
//             className="formBg"
//             type="text"
//             id="form6Example1"
//             value={job_role}
//             onChange={(e) => {
//               setJob_role(e.target.value);
//             }}
//             class="form-control formBg"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Qualification
//           </label>
//           <select
//             name="cars"
//             className="formBg"
//             id="cars"
//             value={Qualification}
//             onChange={(e) => {
//               setQualification(e.target.value);
//             }}
//             class="form-control formBg"
//           >
//             <option value="volvo">12 Pass</option>
//             <option value="saab">All</option>
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option>
//           </select>
//         </Grid>
//         <Grid item xs={12} sm={4} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Working Day
//           </label>
//           <select
//             name="cars"
//             className="formBg"
//             id="cars"
//             value={working_days}
//             onChange={(e) => {
//               setWorking_days(e.target.value);
//             }}
//             class="form-control formBg"
//           >
//             <option value="volvo">Mon To Saturday</option>
//             <option value="saab">Mon To Friday</option>
//             <option value="mercedes">full week</option>
//             <option value="audi">discus latest</option>
//           </select>
//         </Grid>
//         <Grid item xs={12} sm={6} className="p-2">
//           <label class="form-label" for="form6Example1">
//             Start Time
//           </label>
//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <TimePicker
//               className="form-control formBg"
//               value={start_Time}
//               onChange={(newstart_Time) => {
//                 setStart_Time(newstart_Time);
//               }}
//               renderInput={(params) => (
//                 <TextField className="form-control formBg" {...params} />
//               )}
//             />
//           </LocalizationProvider>
//         </Grid>
//         <Grid item xs={12} sm={6} className="p-2">
//           <label class="form-label" for="form6Example1">
//             End Time
//           </label>
//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <TimePicker
//               className="formBg"
//               className="form-control formBg"
//               value={end_Time}
//               onChange={(newend_Time) => {
//                 setEnd_Time(newend_Time);
//               }}
//               renderInput={(params) => (
//                 <TextField className="form-control formBg" {...params} />
//               )}
//             />
//           </LocalizationProvider>
//         </Grid>
//         <Grid item xs={12} sm={6} className="p-2">
//           <label for="exampleFormControlTextarea1">Address</label>
//           <textarea
//             className="formBg"
//             value={address}
//             onChange={(e) => {
//               setAddress(e.target.value);
//             }}
//             class="form-control formBg"
//             id="exampleFormControlTextarea1"
//             rows="5"
//           ></textarea>
//         </Grid>
//         <Grid item xs={12} sm={6} className="p-2">
//           <label for="exampleFormControlTextarea1">Job Description</label>
//           <textarea
//             className="formBg"
//             value={job_description}
//             onChange={(e) => {
//               setJob_description(e.target.value);
//             }}
//             class="form-control formBg"
//             id="exampleFormControlTextarea1"
//             rows="5"
//           ></textarea>
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           sm={6}
//           className="p-2"
//           style={{ marginBottom: "100px" }}
//         >
//           <div>
//             <Button>Back</Button>
//           </div>
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           sm={6}
//           className="p-2"
//           style={{ marginBottom: "100px" }}
//         >
//           <div>
//             <Button type="submit">Submit</Button>
//           </div>
//         </Grid>

//         {/* <div class="row ">
//                 <div class="col">
//                   <div class="form-outline">
//                     <input
//                     className="formBg"
//                       type="text"
//                       id="form6Example1"
//                       class="form-control formBg"
//                     />
//                     <label class="form-label" for="form6Example1">
//                       First name
//                     </label>
//                   </div>
//                 </div>
//                 <div class="col">
//                   <div class="form-outline">
//                   <input
//                   className="formBg"
//                       type="text"
//                       id="form6Example2"
//                       class="form-control formBg"
//                       />
//                     <label class="form-label" for="form6Example2">
//                       Last name
//                       </label>
//                   </div>
//                 </div>
//               </div>

//               <div class="form-outline mb-4">
//               <input
//               className="formBg" type="text" id="form6Example3" class="form-control formBg" />
//               <label class="form-label" for="form6Example3">
//               Company name
//               </label>
//               </div>

//               <div class="form-outline mb-4">
//               <input
//               className="formBg" type="text" id="form6Example4" class="form-control formBg" />
//               <label class="form-label" for="form6Example4">
//               Address
//               </label>
//               </div>

//               <div class="form-outline mb-4">
//               <input
//               className="formBg" type="email" id="form6Example5" class="form-control formBg" />
//               <label class="form-label" for="form6Example5">
//               Email
//               </label>
//               </div>

//               <div class="form-outline mb-4">
//               <input
//               className="formBg" type="number" id="form6Example6" class="form-control formBg" />
//               <label class="form-label" for="form6Example6">
//               Phone
//               </label>
//               </div>

//               <div class="form-outline mb-4">
//               <textarea
//               class="form-control formBg"
//               id="form6Example7"
//               rows="4"
//               ></textarea>
//               <label class="form-label" for="form6Example7">
//               Additional information
//               </label>
//               </div>

//               <div class="form-check d-flex justify-content-center mb-4">
//               <input
//               className="formBg"
//               class="form-check-input me-2"
//               type="checkbox"
//               value=""
//               id="form6Example8"
//               checked
//               />
//               <label class="form-check-label" for="form6Example8">
//               {" "}
//               Create an account?{" "}
//               </label>
//               </div>

//               <button type="submit" class="btn btn-primary btn-block mb-4">
//               Place order
//             </button> */}
//         {/* </form> */}
//         {/* </div> */}
