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
import "../../../style/aboutUsMtextView.css";
import "../../../style/buttoncss.css";

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

export default function ViewMore({ Image, title, content }) {
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
          <Grid item xs={12}>
            <h1
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",
                paddingTop: "5px",
                fontFamily: "Samarkan",
              }}
            >
              {" "}
              || Post ||
            </h1>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`https://health-image-maruti.s3.us-east-2.amazonaws.com/${Image}`}
                Width="400px"
                height="300px"
                style={{ border: "5px solid rgb(172, 24, 24)" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",

                paddingTop: "5px",
              }}
            >
              || {title} ||
            </h3>

            <p
              style={{
                padding: "10%",
                color: "rgb(199, 38, 38)",
                wordWrap: "break-word",
              }}
            >
              {content}
            </p>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
