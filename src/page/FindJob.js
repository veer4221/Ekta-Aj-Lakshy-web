import { Button, Grid, IconButton, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import {
  cleanAllStateAction,
  cleanCityAction,
  cleanDistrictAction,
  getAllJobsAction,
  getCityAction,
  getDistrictAction,
  getStateAction,
} from "../Redux/Actions";

import "./RojgarModule/findJob.css";
import Loader from "./loader/Loader";

const FindJob = () => {
  const place = useSelector((state) => state.place);
  const job = useSelector((state) => state.job);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [city, setCity] = useState(0);
  const [state, setState] = useState(0);
  const [district, setDistrict] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getAllJobsAction(state, district, city, page, limit));
    }
  }, [filter, page]);
  useEffect(() => {
    if (auth.authenticate && localStorage.getItem("token")) {
      dispatch(cleanAllStateAction());
    }
  }, []);
  useEffect(async () => {
    if (auth.authenticate && localStorage.getItem("token")) {
      await dispatch(getStateAction());
    }
  }, []);
  useEffect(() => {
    // alert(company_state);
    if (state != -1) {
      dispatch(getDistrictAction(state));
    }
  }, [state]);
  useEffect(() => {
    // alert(company_distict);
    if (district != -1) {
      dispatch(getCityAction(district));
    }
  }, [district]);
  return (
    <>
      <Loader loading={job.loading} />
      <Grid
        container
        spacing={3}
        // className="Rg-bg"
        style={{
          paddingBottom: "100px",
          backgroundColor: "#16181b",
          paddingTop: "40px",
          minHeight: "100vh",
        }}
      >
        {filter && (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
              <h3 style={{ color: "red", textAlign: "center" }}>Find Job</h3>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            </Grid>
            <Grid
              className="px-5"
              style={{ marginTop: "-10px" }}
              item
              xs={12}
              sm={3}
              md={3}
            >
              <label style={{ color: "rgb(172, 24, 24)" }} for="cars">
                catagory
              </label>
              <select className="form-control" id="cars" name="cars">
                <option value="audi">All</option>
                <option value="volvo">Technical</option>
                <option value="saab">HR</option>
                <option value="fiat">Worker</option>
              </select>
            </Grid>
            <Grid
              className="px-5"
              style={{ marginTop: "-10px" }}
              item
              xs={12}
              sm={3}
              md={3}
            >
              <label class="form-label" for="form6Example1">
                State
              </label>
              <select
                name="cars"
                id="cars"
                value={state}
                onChange={(e) => {
                  setCity(-1);
                  setDistrict(-1);
                  dispatch(cleanCityAction());
                  dispatch(cleanDistrictAction());
                  setState(e.target.value);
                }}
                class="form-control"
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
              </select>
            </Grid>
            <Grid
              className="px-5"
              style={{ marginTop: "-10px" }}
              item
              xs={12}
              sm={3}
              md={3}
            >
              <label class="form-label" for="form6Example1">
                District
              </label>
              <select
                name="cars"
                id="cars"
                value={district}
                onChange={(e) => {
                  dispatch(cleanCityAction());
                  setCity(-1);
                  setDistrict(e.target.value);
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
              </select>
            </Grid>
            <Grid
              className="px-5"
              style={{ marginTop: "-10px" }}
              item
              xs={12}
              sm={3}
              md={3}
            >
              <label class="form-label" for="form6Example1">
                city
              </label>
              <select
                name="city"
                id="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
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
            <Grid
              className="px-5 "
              style={{ marginTop: "-10px" }}
              item
              xs={12}
              sm={3}
              md={3}
            >
              <Button
                onClick={() => {
                  setFilter(false);
                }}
              >
                Find
              </Button>
            </Grid>
          </>
        )}
        {!filter && (
          <>
            <Grid item className="ourBtn m-4" xs={12} sm={12} md={12}>
              <h2 style={{ color: "white", textAlign: "center" }}>
                ઉપલબ્ધ રોજગાર
              </h2>
              <br></br>

              {/* <Button
                className=""
                onClick={() => {
                  setFilter(true);
                }}
              >
                Filter
              </Button> */}
            </Grid>
            {job.getAllJobs.rows.map((data) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{ width: "93%", marginTop: "50px" }}
                  className="card-rojghar card-glass"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></div>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                  <div style={{ margin: "10px" }}>
                    <table width="100%" className="find-job-card">
                      <tr>
                        <th className="find-job-card-text headFindJob ">
                          કંપની
                        </th>
                        <td className="find-job-card-textD ">
                          :{data.company_name}
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          ન્યૂનતમ પગાર
                        </th>
                        <td className="find-job-card-textD">
                          :{data.salary_min}/-
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          મહત્તમ પગાર
                        </th>
                        <td className="find-job-card-textD">
                          :{data.salary_max}/-
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          ભૂમિકા
                        </th>
                        <td className="find-job-card-textD">
                          :{data.job_role}
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          લાયકાત
                        </th>
                        <td className="find-job-card-textD">
                          :{data.Qualification}{" "}
                        </td>
                      </tr>
                    </table>
                    <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                    <div
                      className=""
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="btn btn-primary"
                        style={{ backgroundColor: "#555658" }}
                        onClick={() => {
                          localStorage.setItem("jobId", data.id);
                          navigate(`/Rojgharmain/viewJob`);
                        }}
                      >
                        <span style={{ color: "white" }}>વધુ જોવો</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
            {/* <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{ width: "80%", marginTop: "50px" }}
                className="card-rojghar card-glass"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
                <hr style={{ color: "rgb(255, 255, 255)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text headFindJob ">
                        Company
                      </th>
                      <td className="find-job-card-textD ">:TCS</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">salary</th>
                      <td className="find-job-card-textD">:25000/-</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">Job</th>
                      <td className="find-job-card-textD">:worker</td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text headFindJob">
                        Qualification
                      </th>
                      <td className="find-job-card-textD">:Graduate </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className="buttonOK">વધુ જોવો</Button>
                  </div>
                </div>
              </div>
            </Grid> */}

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                color="primary"
                count={Math.floor(job.getAllJobs.count / limit + 1)}
                onChange={(e, value) => {
                  setPage(value);
                  window.scrollTo(0, 0);
                }}
                shape="rounded"
              />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default FindJob;
