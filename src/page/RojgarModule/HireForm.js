import AdapterDateFns from "@mui/lab/AdapterDateFns";

import Grid from "@material-ui/core/Grid";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";

import React, { useState } from "react";

import { Button } from "react-bootstrap";

// import TimePicker from "react-time-picker";

const HireForm = () => {
  const [value, setValue] = React.useState(null);
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
          <input type="text" id="form6Example1" class="form-control" />
        </Grid>

        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Salary min
          </label>
          <input type="number" id="form6Example1" class="form-control" />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Salary max
          </label>
          <input type="number" id="form6Example1" class="form-control" />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Company Email
          </label>
          <input type="number" id="form6Example1" class="form-control" />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Contect Number
          </label>
          <input type="number" id="form6Example1" class="form-control" />
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Catagory
          </label>
          <select name="cars" id="cars" class="form-control">
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
          <select name="cars" id="cars" class="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Dist
          </label>
          <select name="cars" id="cars" class="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>

        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            Taluka
          </label>
          <select name="cars" id="cars" class="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={4} className="p-2">
          <label class="form-label" for="form6Example1">
            City
          </label>
          <select name="cars" id="cars" class="form-control">
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
          <select name="cars" id="cars" class="form-control">
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
          <select name="cars" id="cars" class="form-control">
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
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
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
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
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
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </Grid>
        <Grid item xs={12} sm={6} className="p-2">
          <label for="exampleFormControlTextarea1">Job Description</label>
          <textarea
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
