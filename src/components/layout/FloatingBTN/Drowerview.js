import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DeckIcon from '@material-ui/icons/Deck';
import PhotoIcon from '@material-ui/icons/Photo';
import { useNavigate } from "react-router";
import "../../../style/FlotingBTN.css"


import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import CollectionsIcon from '@material-ui/icons/Collections';
import FabIcon from './FabIcon';
const actions = [
    { icon: <HomeIcon />, name: "Home",route:"/" },
    { icon: <PhotoIcon />, name: "Gallery" ,route:"/Gallery"},
    { icon: <DeckIcon />, name: "Services" ,route:"/"},
    { icon: <CollectionsIcon/>, name: "Posts" ,route:"/"},
    { icon: <GroupIcon />, name: "AboutUs" ,route:"/"},
    { icon: <PhoneInTalkIcon/>, name: "ContectUs" ,route:"/"},
  ];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drowerview() {
    const navigate =useNavigate();

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {actions.map((data, index) => (
          <ListItem button key={data.name}
          onClick={()=>{navigate(data.route)}}
          >
            <ListItemIcon>{data.icon}</ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  return (
    <div  className="floatIcons">

      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <FabIcon/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}