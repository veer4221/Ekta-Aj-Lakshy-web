import "../../../style/FlotingBTN.css";
import "./flotingbtn.css";

import AppsIcon from "@material-ui/icons/Apps";
import CollectionsIcon from "@material-ui/icons/Collections";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DeckIcon from "@material-ui/icons/Deck";
import Drowerview from "./Drowerview";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PhotoIcon from "@material-ui/icons/Photo";
import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";

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
  { icon: <CollectionsIcon />, name: "News", route: "/News" },
  { icon: <GroupIcon />, name: "AboutUs", route: "/aboutUs" },
  { icon: <WorkIcon />, name: "Rojghar", route: "/auth/login" },
  { icon: <MonetizationOnIcon />, name: "DonateUs", route: "/DonateUs" },
  { icon: <ContactPhoneIcon />, name: "ContectUs", route: "/ContectUs" },
  { icon: <HomeIcon />, name: "Home", route: "/" },
];

export default function FloatingMenu2() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="floatIcons">
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.button}
        icon={<AppsIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
      >
        {actions.map((action) => (
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
        ))}
      </SpeedDial>
    </div>
  );
}
