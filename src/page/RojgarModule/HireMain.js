import { Button, ButtonBase, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import React from "react";

import { useNavigate } from "react-router";

const HireMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container className="Rg-bg" style={{ color: "white" }}>
        <Grid item xs={12}>
          <h2 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
            Hire Page
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} className="p-2 ourBtn">
          <Button
            onClick={() => {
              navigate(`/Rojgharmain/hireform`);
            }}
          >
            Hire Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} className="p-2"></Grid>
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
                <Button>view More</Button>
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
                <Button>view More</Button>
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
                <Button>view More</Button>
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
                <Button>view More</Button>
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
          <Pagination
            count={5}
            onChange={(e, value) => console.log(value)}
            shape="rounded"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HireMain;
