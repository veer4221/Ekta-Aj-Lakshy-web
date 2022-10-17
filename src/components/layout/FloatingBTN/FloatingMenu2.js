import AppsIcon from "@material-ui/icons/Apps";
import CollectionsIcon from "@material-ui/icons/Collections";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DeckIcon from "@material-ui/icons/Deck";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PhotoIcon from "@material-ui/icons/Photo";
import ShareIcon from "@material-ui/icons/Share";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

import { useNavigate } from "react-router";

import "../../../style/FlotingBTN.css";

import Drowerview from "./Drowerview";
import "./flotingbtn.css";
import NavigateMenu from "./NavigateMenu";
import { useDispatch, useSelector } from "react-redux";
import { navigatePopUpOnOff } from "../../../Redux/Actions/auth.action";

// import WorkIcon from "@mui/icons-material/Work";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 8,
    color: "red",
    // backgroundColor:"red",
    "&:hover": {
      //   backgroundColor: "blue",
    },
    transition: `${theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter,
    })}, opacity 0.8s`,
    opacity: 1,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const actions = [
  { icon: <CollectionsIcon />, name: "પોસ્ટ", route: "/News" },
  { icon: <GroupIcon />, name: "અમારા વિશે", route: "/aboutUs" },
  { icon: <WorkIcon />, name: "રોજગાર", route: "/auth/login" },
  { icon: <MonetizationOnIcon />, name: "દાન કરો", route: "/DonateUs" },
  { icon: <ContactPhoneIcon />, name: "સંપર્ક", route: "/ContectUs" },
  { icon: <HomeIcon />, name: "હોમ", route: "/" },
];

export default function FloatingMenu2() {
  const navigate = useNavigate();
  const classes = useStyles();
  const navigatePopUp = useSelector((state) => state?.auth?.navigatePopUp);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log("open")
    dispatch(navigatePopUpOnOff(true))
  };

  return (<>
    {navigatePopUp && <NavigateMenu />}
    <div className="floatIcons" onClick={handleOpen}>

      <SpeedDial
        ariaLabel="SpeedDial example"
        // className={classes.button}
        icon={<AppsIcon />}
      // onClose={handleClose}
      // onOpen={handleOpen}
      // open={open}
      // direction="up"
      >
        {/* {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            className={classes.button}
            icon={action.icon}
            tooltipOpen
            tooltipTitle={action.name}
            onClick={() => {
              handleClose();

              navigate(action.route);
            }}
          />
        ))} */}
      </SpeedDial>
    </div ></>
  );
}
