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
import vdeobtn from "./videoBtn.png"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

import { fileDownloader } from "../../helper/sweetAlerts";
// import "../../../style/aboutUsMtextView.css";
// import "../../../style/buttoncss.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "black !important"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUpRojghar({ Image, title, content, setOpen, open }) {
  const navigate = useNavigate();

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ourBtn">
      {/* <Button color="primary" onClick={handleClickOpen}>
        || Read More ||
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}




        >
          <Toolbar style={{ background: "#121417 !important" }}>
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
              રોજગાર પોર્ટલ માહિતી
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <Grid container spacing={10} className="page"  >
          <Grid item xs={12}>
            <h1
              className="pt-5"
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",
                paddingTop: "5px",
                fontFamily: "Samarkan",
              }}
            >
              અગત્યની સૂચના
            </h1>
          </Grid>
          <Grid item xs={12} md={6} sm={12} >
            <Card className="m-3 p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 style={{ color: "rgb(172, 24, 24)" }}>ભૂતપૂર્વ કાર્યકર્તાઓ માટે</h2>
              </div>
              <div >
                <p className="p-3" style={{ color: "black", fontSize: "20px" }}>જય શ્રી રામ જો તમે પહેલા એકતા એજ લક્ષ્ય સંગઠન જોડે જોડાયેલા હોય અથવા ફોર્મ ભરેલું હોય તો નીચે આપેલા બટન પર ક્લિક કરો અને ફોર્મ સબમિટ કરો  વધુ જાણકારી માટે નીચે આપેલા વિડિઓ ના બટન પર ક્લિક કરો   </p>
              </div>
              <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={() =>

                  fileDownloader(`https://docs.google.com/forms/d/e/1FAIpQLSfFdwJaQAfF-ooK5UpAJyOan0zuYTG_p_MW0GleriAKVMHDWg/viewform`)

                }


                >ફોર્મ ભરો </button>
                <button className="btn btn-primary" onClick={() =>setOpen(false)}>પ્રવેશ કરો </button>
              </div>
            </Card>
            <div className="d-flex justify-content-around pt-5">
              <img src={vdeobtn} height="150px" width="500px" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Card className="m-3 p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 style={{ color: "rgb(172, 24, 24)" }}>જોડાવવા માંગતા સનાતનીઓ માટે  </h2>
              </div>
              <div >
                <p className="p-3" style={{ color: "black", fontSize: "20px" }}>જયશ્રી રામ  જો તમે એકતા એજ લક્ષ્ય સંગઠન જોડે જોડાવા માંગો છો તો નીચે આપેલા બટન પાર ક્લિક કરો.એકતા એજ લક્ષ્ય માં સ્વાગત છે .વધુ જાણકારી માટે નીચે આપેલા વિડિઓ ના બટન પાર ક્લિક કરો .  </p>
              </div>
              <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={() =>navigate('/ContectUs')}>ફોર્મ ભરો </button>
                <button className="btn btn-primary" onClick={() =>setOpen(false)}>પ્રવેશ કરો </button>
              </div>
            </Card>
            <div className="d-flex justify-content-around pt-5">
              <img src={vdeobtn} height="150px" width="500px" />
            </div>
          </Grid>

        </Grid>
      </Dialog>
    </div>
  );
}
