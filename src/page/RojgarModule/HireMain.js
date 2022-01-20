import { Button, ButtonBase, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import Loader from "../loader/Loader";
import { getApplyedUserAction, getMyJobsAction } from "../../Redux/Actions";

const HireMain = () => {
  const job = useSelector((state) => state.job);
  const jobApply = useSelector((state) => state.job_apply);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobList, setJobList] = useState();
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMyJobsAction());
  }, []);
  useEffect(() => {
    dispatch(getApplyedUserAction(jobList, 8, 1));
  }, [jobList]);
  return (
    <div>
      <Loader loading={job.loading || jobApply.loading} />
      <Grid
        container
        style={{ backgroundColor: "#16181b", paddingTop: "70px",minHeight: "100vh", }}
      >
        {/* <Grid item xs={12}>
          <h2 style={{ color: "white", textAlign: "center" }}>
          મારા બનાવેલા રોજગાર 
          </h2>
        </Grid> */}
       
        <Grid
          item
          xs={12}
          sm={12}
          className="p-2 ourBtn "
          style={{ paddingX: "15px" }}
        >
           <h2 style={{ color: "white", textAlign: "center" }}>
          મારા બનાવેલા રોજગાર 
          </h2>
          <label class="form-label" for="form6Example1">
          રોજગાર પસંદ કરો 
          </label>
          <select
            name="cars"
            className="formBg"
            id="cars"
            value={jobList}
            onChange={(e) => {
              setJobList(e.target.value);
            }}
            class="form-control formBg"
          >
            <option value=""></option>
            {job.getMyJob.rows.map((data) => (
              <>
                <option value={data.id}>{data.company_name}</option>
              </>
            ))}
          </select>
        </Grid>
        <Grid item xs={12} sm={12} className="p-2"></Grid>
        {jobApply.applyedUser.rows.map((user) => (
          <>
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
                >
                  <img
                    src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${
                      user.adminUser && user.adminUser.image
                    }`}
                    style={{ borderRadius: "5%" }}
                    height="150px"
                    width="150px"
                  />
                </div>
                <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
                <div style={{ margin: "10px" }}>
                  <table width="100%" className="find-job-card">
                    <tr>
                      <th className="find-job-card-text">Name</th>
                      <td className="find-job-card-textD">
                        :{user.adminUser && user.adminUser.firstname}
                      </td>
                    </tr>
                    {/* <tr>
                  <th className="find-job-card-text">city</th>
                  <td className="find-job-card-textD">:himmatnagar</td>
                </tr> */}
                    <tr>
                      <th className="find-job-card-text">Mobile</th>
                      <td className="find-job-card-textD">
                        :{user.adminUser && user.adminUser.mobileNumber}
                      </td>
                    </tr>
                    <tr>
                      <th className="find-job-card-text">Study</th>
                      <td className="find-job-card-textD">
                        :{user.adminUser && user.adminUser.study}{" "}
                      </td>
                    </tr>
                  </table>
                  <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

                  <div
                    className="ourBtn"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={() => {
                        localStorage.setItem(
                          "viewProfileUserId",
                          user.adminUser.id
                        );
                        navigate(`/Rojgharmain/viewUser`);
                      }}
                    >
                      વધુ જોવો
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </>
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
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%" className="find-job-card">
                <tr>
                  <th className="find-job-card-text">Name</th>
                  <td className="find-job-card-textD">:ViewMore</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">city</th>
                  <td className="find-job-card-textD">:himmatnagar</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Mobile</th>
                  <td className="find-job-card-textD">:97234798787</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Qualification</th>
                  <td className="find-job-card-textD">:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>વધુ જોવો</Button>
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
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%" className="find-job-card">
                <tr>
                  <th className="find-job-card-text">Name</th>
                  <td className="find-job-card-textD">:ViewMore</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">city</th>
                  <td className="find-job-card-textD">:himmatnagar</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Mobile</th>
                  <td className="find-job-card-textD">:97234798787</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Qualification</th>
                  <td className="find-job-card-textD">:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>વધુ જોવો</Button>
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
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%" className="find-job-card">
                <tr>
                  <th className="find-job-card-text">Name</th>
                  <td className="find-job-card-textD">:ViewMore</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">city</th>
                  <td className="find-job-card-textD">:himmatnagar</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Mobile</th>
                  <td className="find-job-card-textD">:97234798787</td>
                </tr>
                <tr>
                  <th className="find-job-card-text">Qualification</th>
                  <td className="find-job-card-textD">:Graduate </td>
                </tr>
              </table>
              <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

              <div
                className="ourBtn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button>વધુ જોવો</Button>
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
            count={Math.floor(jobApply.applyedUser.count / limit + 1)}
            onChange={(e, value) => setPage(value)}
            shape="rounded"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HireMain;
