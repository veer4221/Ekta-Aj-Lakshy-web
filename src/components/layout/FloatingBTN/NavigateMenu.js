// import "../../../style/aboutUsMtextView.css";
// import "../../../style/buttoncss.css";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Slide from "@material-ui/core/Slide";
// import TabsShakha from "./TabsShakha";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { navigatePopUpOnOff } from "../../../Redux/Actions";
import { useNavigate } from "react-router";

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

const NavMenuObj = [
  {
    route: `/`,
    divSize: "6",
    animate: false,
    navImage: `assets/images/navigateImage/mainpager.png`,
  },
  {
    route: `/chalchitram`,
    animate: true,
    divSize: "6",
    navImage: `assets/images/navigateImage/chalchitaram.png`,
  },
  {
    divSize: "6",
    animate: false,
    route: `/aboutus`,
    navImage: `assets/images/navigateImage/amaraVishe2.png`,
  }, {
    divSize: "6",
    animate: false,
    route: `/auth/login`,
    navImage: `assets/images/navigateImage/rojgar.png`,
  }, {
    divSize: "6",
    animate: false,
    route: `/ContectUs`,
    navImage: `assets/images/navigateImage/sampark.png`,
  },
  {
    divSize: "6",
    animate: false,
    route: `/news`,
    navImage: `assets/images/navigateImage/samachar.png`,
  }, {
    divSize: "12",
    animate: false,
    route: `/DonateUs`,
    navImage: `assets/images/navigateImage/danseva.png`,
  },

]
export default function NavigateMenu({
  // handleClose,
  // open,
  // setOpen
}) {
  const navigatePopUp = useSelector((state) => state?.auth?.navigatePopUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  console.log(open)
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    dispatch(navigatePopUpOnOff(false))
  };
  const onNavigateRequest = (data) => {

    handleClose()
    navigate(data?.route)
  }
  return (


    <Dialog
      // fullScreen
      open={navigatePopUp}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar} style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            style={{ color: "rgb(172, 24, 24)" }}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{
              fontFamily: "Samarkan",
              color: "rgb(172, 24, 24)",
              fontSize: "25px",
            }}
          >
            || પૃષ્ઠ પરીવહન ||
          </Typography>

          {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
        </Toolbar>
      </AppBar>
      <div className="page" style={{ marginBottom: "10px !important", padding: "0" }}>
        <div className="container-fluid pt-4 pb-3"  >
          <div className="row">
            {NavMenuObj.map(data => (

              <div className={`col-${data.divSize || 6} ${data?.animate ? `navigateImage` : ``} mt-2 d-flex justify-content-center`}>
                <img src={data.navImage} height={"45px"} style={{ filter: "10px 10px 5px #ccc" }} onClick={() => onNavigateRequest(data)} />
              </div>
            ))}
          </div>
        </div>
        {/* <Grid container className="mt-3" style={{ minWidth: "100vw", minHeight: "60vh" }}>
          {NavMenuObj.map(data => (

            <Grid item xs={6}>
              <img src={data.navImage} height={"40px"} />
            </Grid>
          ))}
          <Grid item xs={6}>

            fvdfgfd
          </Grid>
        </Grid> */}
      </div>
    </Dialog >

  );
}
