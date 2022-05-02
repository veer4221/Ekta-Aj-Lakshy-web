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
import { Redirect, useNavigate } from "react-router";
import Select from "@material-ui/core/Select";
import Swal from "sweetalert2";
import TablePagination from "@material-ui/core/TablePagination";
import VisibilityIcon from "@material-ui/icons/Visibility";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import "./_table.scss";
import { getAllUserAPI } from "../../../../api";
import { MdWork } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
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
const UserList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState();
  const [count, setCount] = React.useState();
  const [find, setfind] = React.useState(new Date());

  const [keyword, setKeyword] = React.useState("");

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
  useEffect(async () => {
    const data = await getAllUserAPI(page, rowsPerPage, keyword);
    setUserData(data.data.rows);
    console.log("data", data.data);
    setCount(Math.floor(data.data.count / rowsPerPage + 1));
  }, [page, rowsPerPage, find]);

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ display: "flex" }}>
            <h4 style={{ color: "grey", paddingLeft: "10px", width: "50%" }}>
              User List
            </h4>
            <div
              style={{ textAlign: "right", width: "50%", paddingRight: "10px" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate(`/ektaAdmin/AddUser`);
                }}
              >
                Create User
              </Button>
            </div>
          </div>
          <br></br>
          <Divider />
          <div style={{ width: "90%", textAlign: "right", color: "white" }}>
            <TextField
              style={{ paddingRight: "10px", backgroundColor: "#99939838" }}
              id="standard-basic"
              label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={(e) => setfind(new Date())}
            >
              Find
            </button>
          </div>
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
                    Name
                  </th>
                  <th style={{ textAlign: "center" }} width="20%">
                    Email
                  </th>
                  <th style={{ textAlign: "center" }} width="20%">
                    Mobile
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
                          <td>
                            {data.firstName}&nbsp; {data.lastName}
                          </td>
                          <td>
                            {/* patelveer4221@gmail.com */}
                            {data.email}
                          </td>
                          <td>
                            {data.mobileNumber}
                            {/* 9898989876 */}
                          </td>
                          <td>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}
                            >
                              <IconButton
                              // onClick={(e) => {
                              //   localStorage.setItem('UserViewId', data.id)
                              //   history.push('/User/ViewUser')
                              // }}
                              >
                                <VisibilityIcon style={{ color: "black" }} />
                              </IconButton>

                              <IconButton
                              //    onClick={(e) => removeUserFunc(data.id)}
                              >
                                <DeleteForeverIcon style={{ color: "red" }} />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  navigate(`/ektaAdmin/uploadicard/${data.id}`);
                                }}
                              >
                                <DraftsIcon style={{ color: "blue" }} />
                              </IconButton>
                              {data?.isRojgharAdd=="0" && (
                                <IconButton
                                  onClick={() => {
                                    navigate(
                                      `/ektaAdmin/UploadBusiness/${data.id}`
                                    );
                                  }}
                                >
                                  <MdWork style={{ color: "blue" }} />
                                </IconButton>
                              )}
                              <IconButton
                              // onClick={() => {
                              //   localStorage.setItem('UserEditId', data.id)
                              //   history.push('/User/EditUser')
                              // }}
                              >
                                <IoLogoWhatsapp style={{ color: "#00a884" }} />
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
        <Grid item xs={6} m={1} p={2} style={{ margin: "10px" }}>
          <FormControl
            style={{
              minWidth: 250,
              marginBottom: "15px",
              backgroundColor: "#99939838",
            }}
            className={classes.formControl}
          >
            <InputLabel id="demo-controlled-open-select-label">
              Limit
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={rowsPerPage}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>
          <Pagination
            count={count}
            variant="outlined"
            color="primary"
            shape="rounded"
            onChange={(e, value) => setPage(value)}
          />
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
};

export default UserList;
