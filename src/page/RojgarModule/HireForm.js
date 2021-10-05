import React, { useEffect, useState } from "react";
import {
  cleanCityAction,
  cleanDistrictAction,
  getCityAction,
  getDistrictAction,
  getStateAction,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";

// import TimePicker from "react-time-picker";

const HireForm = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(null);
  const [company_name, setCompany_name] = useState();
  const [company_email, setCompany_email] = useState();
  const [job_category, setJob_category] = useState();
  const [title, setTitle] = useState();
  const [company_state, setCompany_state] = useState(-1);
  const [company_distict, setCompany_distict] = useState(-1);
  const [company_Taluka, setCompany_Taluka] = useState();
  const [company_city, setCompany_city] = useState();
  const [Qualification, setQualification] = useState();
  const [working_days, setWorking_days] = useState();
  const [start_Time, setStart_Time] = useState();
  const [end_Time, setEnd_Time] = useState();
  const [address, setAddress] = useState();
  const [job_description, setJob_description] = useState();
  const [company_contect_number, setCompany_contect_number] = useState();
  const [salary_min, setsalary_min] = useState();
  const [salary_max, setsalary_max] = useState();
  const [allState, setAllState] = useState([]);
  useEffect(async () => {
    await dispatch(getStateAction());
  }, []);
  useEffect(() => {
    // alert(company_state);
    if (company_state != -1) {
      dispatch(getDistrictAction(company_state));
    }
  }, [company_state]);
  useEffect(() => {
    // alert(company_distict);
    if (company_distict != -1) {
      dispatch(getCityAction(company_distict));
    }
  }, [company_distict]);

  //   const [value, onChange] = useState("10:00");
  return (
    <div>
      <Grid container className="Rg-bg" style={{ color: "white" }}>
        <Grid item xs={12}>
          <h2 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Hire Form
          </h2>
        </Grid>
        {/* <div
          style={{
            width: "100%",
            marginTop: "50px",
          }}
          className=" card-glass"
        > */}
        {/* <form> */}
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Company Name
          </label>
          <input
            type="text"
            id="form6Example1"
            value={company_name}
            onChange={(e) => {
              setCompany_name(e.target.value);
            }}
            class="form-control"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Salary min
          </label>
          <input
            type="number"
            id="form6Example1"
            value={salary_min}
            onChange={(e) => {
              setsalary_min(e.target.value);
            }}
            class="form-control"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Salary max
          </label>
          <input
            type="number"
            id="form6Example1"
            value={salary_max}
            onChange={(e) => {
              setsalary_max(e.target.value);
            }}
            class="form-control"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Company Email
          </label>
          <input
            type="text"
            id="form6Example1"
            value={company_email}
            onChange={(e) => {
              setCompany_email(e.target.value);
            }}
            class="form-control"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Contect Number
          </label>
          <input
            type="text"
            id="form6Example1"
            value={company_contect_number}
            onChange={(e) => {
              setCompany_contect_number(e.target.value);
            }}
            class="form-control"
          />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Catagory
          </label>
          <select
            name="cars"
            id="cars"
            value={job_category}
            onChange={(e) => {
              setJob_category(e.target.value);
            }}
            class="form-control"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            State
          </label>
          <select
            name="cars"
            id="cars"
            value={company_state}
            onChange={(e) => {
              setCompany_city(-1);
              setCompany_distict(-1);
              dispatch(cleanCityAction());
              dispatch(cleanDistrictAction());
              setCompany_state(e.target.value);
            }}
            class="form-control"
          >
            <option value={-1}>please Select</option>

            {place.state.rows &&
              place.state.rows.map((data) => (
                <>
                  <option value={`${data.state_id}`}>{data.state_title}</option>
                </>
              ))}
            {/* <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option> */}
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Dist
          </label>
          <select
            name="cars"
            id="cars"
            value={company_distict}
            onChange={(e) => {
              dispatch(cleanCityAction());
              setCompany_city(-1);
              setCompany_distict(e.target.value);
            }}
            class="form-control"
          >
            <option value={-1}>please Select</option>

            {place.district.rows &&
              place.district.rows.map((data) => (
                <>
                  <option value={`${data.districtid}`}>
                    {data.district_title}
                  </option>
                </>
              ))}
            {/* <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option> */}
          </select>
        </Grid>

        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            city
          </label>
          <select
            name="city"
            id="city"
            value={company_city}
            onChange={(e) => {
              setCompany_city(e.target.value);
            }}
            class="form-control"
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
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            test
          </label>
          <select
            name="cars"
            id="cars"
            value={company_Taluka}
            onChange={(e) => {
              setCompany_Taluka(e.target.value);
            }}
            class="form-control"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Qualification
          </label>
          <select
            name="cars"
            id="cars"
            value={Qualification}
            onChange={(e) => {
              setQualification(e.target.value);
            }}
            class="form-control"
          >
            <option value="volvo">12 Pass</option>
            <option value="saab">All</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Working Day
          </label>
          <select
            name="cars"
            id="cars"
            value={working_days}
            onChange={(e) => {
              setWorking_days(e.target.value);
            }}
            class="form-control"
          >
            <option value="volvo">Mon To Saturday</option>
            <option value="saab">Mon To Friday</option>
            <option value="mercedes">full week</option>
            <option value="audi">discus latest</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <label class="form-label" for="form6Example1">
            Start Time
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              className="form-control"
              value={start_Time}
              onChange={(newstart_Time) => {
                setStart_Time(newstart_Time);
              }}
              renderInput={(params) => (
                <TextField className="form-control" {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <label class="form-label" for="form6Example1">
            End Time
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              className="form-control"
              value={end_Time}
              onChange={(newend_Time) => {
                setEnd_Time(newend_Time);
              }}
              renderInput={(params) => (
                <TextField className="form-control" {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <label for="exampleFormControlTextarea1">Address</label>
          <textarea
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <label for="exampleFormControlTextarea1">Job Description</label>
          <textarea
            value={job_description}
            onChange={(e) => {
              setJob_description(e.target.value);
            }}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <div>
            <Button>Back</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <div>
            <Button>Submit</Button>
          </div>
        </Grid>
        {/* <div class="row ">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">
                  Company name
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">
                  Address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">
                  Email
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">
                  Phone
                </label>
              </div>

              <div class="form-outline mb-4">
                <textarea
                  class="form-control"
                  id="form6Example7"
                  rows="4"
                ></textarea>
                <label class="form-label" for="form6Example7">
                  Additional information
                </label>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                  checked
                />
                <label class="form-check-label" for="form6Example8">
                  {" "}
                  Create an account?{" "}
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Place order
              </button> */}
        {/* </form> */}
        {/* </div> */}
      </Grid>
    </div>
  );
};

export default HireForm;
