import { Button, Grid, IconButton, Paper } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";
import React from "react";

const FindJob = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        className="page"
        style={{ paddingBottom: "100px" }}
      >
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
          <label style={{ color: "rgb(172, 24, 24)" }} for="cars">
            state
          </label>
          <select className="form-control" id="cars" name="cars">
            <option value="volvo">All</option>
            <option value="saab">Gujrat</option>
            <option value="fiat">Maharastr</option>
            <option value="audi">Rajasthan</option>
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
          <label style={{ color: "rgb(172, 24, 24)" }} for="cars">
            District
          </label>
          <select className="form-control" id="cars" name="cars">
            <option value="volvo">all</option>
            <option value="saab">Ananad</option>
            <option value="fiat">Sabarkantha</option>
            <option value="audi">kheda</option>
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
          <label style={{ color: "rgb(172, 24, 24)" }} for="cars">
            City
          </label>
          <select className="form-control" id="cars" name="cars">
            <option value="audi">All</option>
            <option value="volvo">Karnavati</option>
            <option value="saab">Idar</option>
            <option value="fiat">Himmatnagar</option>
          </select>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
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
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
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
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
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
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            style={{ width: "80%", marginTop: "50px" }}
            className="card-rojghar"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                height="200px"
                width="200px"
              />
            </div>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <div style={{ margin: "10px" }}>
              <table width="100%">
                <tr>
                  <td>Company</td>
                  <td>:TCS</td>
                </tr>
                <tr>
                  <td>salary</td>
                  <td>:25000/-</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:worker</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>:Graduate </td>
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
          </Paper>
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
    </>
  );
};

export default FindJob;
