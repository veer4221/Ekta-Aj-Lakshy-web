import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";
// import "../../../style/aboutUsMtextView.css";
import "../../style/buttoncss.css";
import "./rojgar.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewMore({ Image, data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ourBtn">
      <Button color="primary" onClick={handleClickOpen}>
        || Read More ||
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} style={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              style={{
                color: "rgb(172, 24, 24)",
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              style={{
                color: "rgb(172, 24, 24)",
                fontFamily: "Samarkan",
                fontSize: "30px",
              }}
            >
              Ekta Ej Laksh
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3} className="page">
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Image}
                Width="300px"
                height="300px"
                style={{ border: "5px solid rgb(172, 24, 24)" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <h2
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",

                paddingTop: "5px",
              }}
            >
              {data.title}
            </h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
              Owner Info
            </h3>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>

            <table width="100%">
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="sdf"
                      height="150px"
                      width="150px"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid rgb(172, 24, 24)",
                        padding: "10px",
                      }}
                    />
                  </div>
                </td>
                <td>
                  <span
                    style={{ color: "rgb(172, 24, 24)", fontWeight: "bolder" }}
                  >
                    Name
                  </span>{" "}
                  : Raj Patel<br></br>
                  <span
                    style={{ color: "rgb(172, 24, 24)", fontWeight: "bolder" }}
                  >
                    mobile
                  </span>
                  :9723479653<br></br>
                  <span
                    style={{ color: "rgb(172, 24, 24)", fontWeight: "bolder" }}
                  >
                    Email
                  </span>{" "}
                  :asdsad@jsdf.sdf
                </td>
              </tr>
            </table>
            {/* <hr style={{ color: "rgb(172, 24, 24)" }}></hr> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
              business Info
            </h3>
            <hr style={{ color: "rgb(172, 24, 24)" }}></hr>
            <table class="GeneratedTable">
              <thead>
                <tr>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>{" "}
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>{" "}
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
