import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DraftsIcon from "@material-ui/icons/Drafts";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Pagination from "@material-ui/lab/Pagination";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { Redirect, useNavigate, useParams } from "react-router";
import Select from "@material-ui/core/Select";
import Swal from "sweetalert2";
import TablePagination from "@material-ui/core/TablePagination";
import VisibilityIcon from "@material-ui/icons/Visibility";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { RiVideoFill } from "react-icons/ri";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import withReactContent from "sweetalert2-react-content";
import "./_table.scss";
import {
  getAllCourseAPI,
  getAllPostAPI,
  getAllUserAPI,
  getCourseVideoByIdAPI,
  getCourseVideoesAPI,
  getHistoryVideoesAPI,
  removeCourseAPI,
  removePostAPI,
  removeVideoAPI,
} from "../../../../../api";
import TextTruncate from "react-text-truncate";
import { getAllEktaLatestVideoAPI } from "../../../../../api";
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
const HEpisodList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [totalEpisod, settotalEpisod] = React.useState(false);
  const [userData, setUserData] = React.useState();
  const [count, setCount] = React.useState();
  const [find, setfind] = React.useState(new Date());
  const [viewMore, setViewMore] = React.useState(false);
  const [isChange, setIsChange] = React.useState(new Date());
  const [CourseName, setCourseName] = React.useState("");

  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // getAllCourseAPI
  useEffect(async () => {
    console.log("params",params)
    const data = await getHistoryVideoesAPI(params.id);
    setUserData(data.data?.rows[0]?.ektaVideos);
    setCourseName(data.data?.rows[0]?.History_title)
    console.log("data", data.data);
    settotalEpisod(data?.data?.count)
    setCount(Math.floor(data.data.count / rowsPerPage + 1));
  }, [page, rowsPerPage, find, isChange]);
  const removeUserFunc = async (id) => {
    const res = await removeVideoAPI(id);
    if (res.data.success == true && res.status === 200) setIsChange(new Date());
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ display: "flex" }}>
            <h4 style={{ color: "grey", paddingLeft: "10px", width: "50%" }}>
             {CourseName}&nbsp; એપિસોડ લિસ્ટ
            </h4>
            
            <div
              style={{ textAlign: "right", width: "50%", paddingRight: "10px" }}
            >
               <Button
               className="btn btn-primary"
               style={{ background: "grey"}}
                  variant="success"
                  onClick={() => navigate(`/EktaAdmin/HistoryList`)}
                >
                  <ArrowBackIcon />
                  Back
                </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate(`/ektaAdmin/CreateHEpisod/${params.id}/${totalEpisod+1}`);
                }}
              >
                એપિસોડ ઉમેરો
              </Button>
            </div>
          </div>
          <br></br>
          <Divider />
        </Grid>
        <Grid item xs={12} m={1} p={2}>
          <div style={{ padding: "15px" }}>
            <table className="GeneratedTable ">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }} width="10%">
                    #
                  </th>
                  <th style={{ textAlign: "center" }} width="30%">
                    Title
                  </th>

                  <th style={{ textAlign: "center" }} width="20%">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData.slice(0, rowsPerPage).map((data, index) => {
                    return (
                      <>
                        <tr>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td> {data?.video_title} </td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}
                            >
                             
                              <IconButton
                                onClick={(e) => removeUserFunc(data.id)}
                              >
                                <DeleteForeverIcon style={{ color: "red" }} />
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HEpisodList;
