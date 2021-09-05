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
import TabsShakha from "./TabsShakha";

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

export default function ViewMore({
  Image,
  imageUrl,
  info,
  subBranch,
  title,
  CONST_SHAKHA,
}) {
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
        || View More ||
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
                fontSize: "30px",
              }}
            >
              ||Ekta Ej Laksh||
            </Typography>

            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TabsShakha
                title={title}
                imageUrl={imageUrl}
                info={info}
                subBranch={subBranch}
                CONST_SHAKHA={CONST_SHAKHA}
              />
            </Grid>
          </Grid>
        </AppBar>
      </Dialog>
    </div>
  );
}
