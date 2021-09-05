import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactPlayer from "react-player";
import { info } from "./information.sangathan";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsShakha() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Text Info" {...a11yProps(0)} />
          <Tab label="Video Info" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="shakhamain">
        <Grid container spacing={3} className="page">
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={info.imageUrl}
                Width="60%"
                height="80%"
                style={{ border: "5px solid rgb(172, 24, 24)" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(172, 24, 24)",
                fontFamily: "Samarkan",
                paddingTop: "5px",
              }}
            >
              || {info.title} ||
            </h3>

            <p
              style={{
                padding: "10%",
                color: "rgb(199, 38, 38)",
                wordWrap: "break-word",
              }}
            >
              {info.info}
              <br></br>
              <br></br>
              <h4>એકતાએજલક્ષ્યસંગઠનનુંલક્ષ્ય </h4>
              {info.otherInfo}
            </p>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="about-us container-fluid page">
          <div className="container-fluid">
            {/* <div className="row natur-row no-margin w-100 maindiv"> */}
            {/* <div className="image-part col-md-12"> */}
            <div
              className="about-quick-box row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=pmK-InrtwJg"
                controls={true}
                playing={true}
              />
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
