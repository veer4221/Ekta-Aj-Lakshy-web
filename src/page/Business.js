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
import { getAllBusinessAction } from "../Redux/Actions/business.action";

import "./RojgarModule/findJob.css";
import Loader from "./loader/Loader";
// import FindJob from './FindJob';
const BusinessData = [
  {
    id: 1,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 2,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 3,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 4,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 5,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 6,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 7,
    StoreName: "xyz",
    OwnerName: "veer",
    Address: "Karnavati",
    Phone: "97235457851",
  },
  {
    id: 8,
    StoreName: "xyz",
    OwnerName: "veer3333",
    Address: "Karnavati",
    Phone: "97235457851",
  },
];
const Business = () => {
  const place = useSelector((state) => state.place);
  const job = useSelector((state) => state.job);
  const business = useSelector((state) => state.business);
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
    dispatch(getAllBusinessAction(page, 8));
    // alert("done");
  }, [page]);
  return (
    <>
      <Loader loading={business.loading} />
      <Grid
        container
        spacing={3}
        // className="Rg-bg"
        style={{
          backgroundColor: "#16181b",
          paddingTop: "50px",
          paddingBottom: "80px",
          minHeight: "100vh",
         
        }}
        // style={{ paddingBottom: "100px" }}
      >
        <>
          <Grid item className="ourBtn m-4" xs={12} sm={12} md={12}>
            <h2 style={{ color: "white", textAlign: "center" }}>વ્યવસાય</h2>
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
          {business.getAllBusiness &&
            business.getAllBusiness?.rows?.map((data) => (
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
                  <img
                    src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${data.image}`}
                    width="100%"
                    height="200px"
                  />
                  {/* <hr style={{ color: "rgb(255, 255, 255)" }}></hr> */}
                  <div style={{ margin: "10px" }}>
                    <table width="100%" className="find-job-card">
                      <tr>
                        <th className="find-job-card-text headFindJob ">
                          પેઢી નું નામ
                        </th>
                        <td className="find-job-card-textD ">
                          :{data.business_title}
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          માલિક નું નામ
                        </th>
                        <td className="find-job-card-textD">
                          :{data.business_Name}
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">
                          ફોન નંબર
                        </th>
                        <td className="find-job-card-textD">
                          :{data.business_contect_number}
                        </td>
                      </tr>
                      <tr>
                        <th className="find-job-card-text headFindJob">સ્થળ</th>
                        <td className="find-job-card-textD">:{data.address}</td>
                      </tr>
                      {/* <tr>
                        <th className="find-job-card-text headFindJob">
                          Qualification
                        </th> */}
                      {/* <td className="find-job-card-textD"> */}
                      {/* :{data.Qualification}{" "} */}
                      {/* </td> */}
                      {/* </tr> */}
                    </table>
                    <hr style={{ color: "rgb(255, 255, 255)" }}></hr>

                    <div
                      className=""
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        // className="buttonOK"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#555658" }}
                        onClick={() => {
                          localStorage.setItem("businessId", data.id);
                          navigate(`/Rojgharmain/BusinessInfo`);
                        }}
                      >
                        <span style={{ color: "white" }}> વધુ જોવો</span>
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
              count={Math.floor(business.getAllBusiness.count / 8 + 1)}
              onChange={(e, value) => setPage(value)}
              shape="rounded"
            />
          </Grid>
        </>
      </Grid>
    </>
  );
};

export default Business;
