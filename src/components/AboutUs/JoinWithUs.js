import React from "react";

import { Divider, Grid, TextField, IconButton } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";

import { Form, Button, Row, Col } from "react-bootstrap";

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
// import MomentUtils from "@date-io/moment";
// import { KeyboardDatePicker } from "@material-ui/pickers";

import { cheakUserStatusAction } from "../../Redux/Actions";

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
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState(`1`);
  const [email, setEmail] = useState();
  const [date, changeDate] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());
  const verifyMeFunc = (e) => {
    e.preventDefault();
    dispatch(cheakUserStatusAction({ email }));
  };
  return (
    <>
      <Grid className="px-3" item xs={12} sm={12}>
        <form onSubmit={verifyMeFunc}>
          <lebel>Email</lebel>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
      <Grid className="px-3" item xs={12} sm={12}>
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <lebel>Sarname</lebel>
              <input
                type="text"
                name="sarname"
                placeholder="sarname"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel>First name</lebel>
              <input
                type="text"
                name="first"
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel>Father name</lebel>
              <input
                type="text"
                name="fathername"
                placeholder="Father Name"
                className="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <lebel>Mother name</lebel>
              <input
                type="text"
                name="motherName "
                placeholder="Mother Name"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel>Password</lebel>
              <input
                type="password"
                name="password "
                placeholder="password "
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel>Confirm Password</lebel>
              <input
                type="password"
                name="password"
                placeholder="confirm password"
                className="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="bloodGroup">Choose bloodGroup:</label>

              <select className="form-control" name="Blood Group" id="cars">
                <option value="None">None</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div class="form-group col-md-4">
              <FormControl component="fieldset">
                <FormLabel component="legend">Marrage Status</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="UnMarried"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="bloodGroup">BirthDate</label>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  variant="inline"
                  className="form-control"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div class="form-group col-md-4">
              <lebel>Husband Name</lebel>
              <input
                type="text"
                name="husband"
                placeholder="husband Name "
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel> Total Family Members </lebel>
              <input
                type="number"
                name="Members"
                placeholder="Total Family Members"
                className="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <lebel> Study </lebel>
              <input
                type="text"
                name="Study"
                placeholder="Study"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel> Mobile Number </lebel>
              <input
                type="text"
                name="Mobile Number"
                placeholder="mobile Number"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <lebel> whatsapp Number </lebel>
              <input
                type="text"
                name="Whatsapp number"
                placeholder="Whats App Number"
                className="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label class="form-label" for="form6Example1">
                State
              </label>
              <select
                name="cars"
                className="formBg"
                id="cars"
                // value={company_state}
                // onChange={(e) => {
                //   setCompany_city(-1);
                //   setCompany_distict(-1);
                //   dispatch(cleanCityAction());
                //   dispatch(cleanDistrictAction());
                //   setCompany_state(e.target.value);
                // }}
                class="form-control "
              >
                <option value={-1}>please Select</option>

                {/* {place.state.rows &&
                place.state.rows.map((data) => (
                  <>
                    <option value={`${data.state_id}`}>
                      {data.state_title}
                    </option>
                  </>
                ))} */}
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label class="form-label" for="form6Example1">
                Dist
              </label>
              <select
                name="cars"
                className="formBg"
                id="cars"
                // value={company_distict}
                // onChange={(e) => {
                //   dispatch(cleanCityAction());
                //   setCompany_city(-1);
                //   setCompany_distict(e.target.value);
                // }}
                class="form-control"
              >
                <option value={-1}>please Select</option>

                {/* {place.district.rows &&
                place.district.rows.map((data) => (
                  <>
                    <option value={`${data.districtid}`}>
                      {data.district_title}
                    </option>
                  </>
                ))} */}
              </select>
            </div>
            <div class="form-group col-md-4">
              <label class="form-label" for="form6Example1">
                city
              </label>
              <select
                name="city"
                className="formBg"
                id="city"
                // value={company_city}
                // onChange={(e) => {
                //   setCompany_city(e.target.value);
                // }}
                class="form-control formBg"
              >
                <option value={-1}>please Select</option>

                {/* {place.city.rows &&
                place.city.rows.map((data) => (
                  <>
                    <option value={`${data.id}`}>{data.name}</option>
                  </>
                ))} */}
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label> Pin Code:</label>
              <input
                type="text"
                name="pincode"
                placeholder="Pin code"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <label> Address:</label>
              <textarea
                type="text"
                row="5"
                name="pincode"
                placeholder="Pin code"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <label> Profile Image:</label>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <div class="form-row">
            
           
            <div class="form-group col-md-12 ourBtn">
             <button>Join</button>
            </div>
          </div>
        </form>
      </Grid>
      
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
