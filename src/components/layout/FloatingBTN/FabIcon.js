import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import AppsIcon from '@material-ui/icons/Apps';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FabIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Fab color="primary" variant="extended">
        <AppsIcon/>
      </Fab>

    </div>
  );
}