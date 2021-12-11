import React, { Suspense, lazy, useEffect } from "react";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const TabsComp = lazy(() => import("./Tabs/TabsComp"));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ViewUs({ info }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="ourBtn ">
        <Button
          width="100%"
          onClick={handleClickOpen}
          style={{
            marginLeft: "10%",
            color: "white",
            marginRight: "40px",
            marginBottom: "30px",
            width: "80%",

            backgroundImage:
              "radial-gradient(circle, #c26603, #ba5d06, #b15508, #a84d0a, #9f450b)",
          }}
        >
          || વધુ જુઓ ||
        </Button>
      </div>
      {/* <Button variant="outlined" color="primary">
        Open dialog
      </Button> */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          About Us
        </DialogTitle>
        <DialogContent dividers>
          <Suspense fallback={<div>Loading...</div>}>
            <TabsComp />
          </Suspense>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            HomePage
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
