import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function JobDialog() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        || find Job ||
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle className="page" id="max-width-dialog-title">
          {" "}
          User Varification
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please Select your Catagory</DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">catagory</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value=""></MenuItem>
                <MenuItem value="tech">tech</MenuItem>
                <MenuItem value="worker">worker</MenuItem>
                <MenuItem value="farmer">farmer</MenuItem>
                <MenuItem value="science">science</MenuItem>
              </Select>
              <br></br>
              <lebel>Icard Id:</lebel>
              <input
                className="form-control"
                type="text"
                placeholder=" Please Enter icard Id"
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions className="page">
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => {
              navigate(`/jobPage`);
            }}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
