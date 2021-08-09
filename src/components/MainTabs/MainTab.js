import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./style.css";
import Carouselslider from "../HomePage/Carouselslider/Carouselslider";
import AboutUsSangathan from "../HomePage/AboutUsSangathan/AboutUsSangathan";
import MissionAndVision from "../HomePage/MissionAndVision/MissionAndVision";
import Shakha from "../HomePage/Shakha/Shakha";
import Achivemtns from "../HomePage/Achievemtns/Achivemtns";
import KaryKarta from "../HomePage/KaryKarta/KaryKarta";
import Post from "../HomePage/Post/Post";
import { Grid } from "@material-ui/core";
// import "./style.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function MainTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <div>  */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="|| about Us ||" {...a11yProps(0)} />
        <Tab label="|| Post ||" {...a11yProps(1)} />
        <Tab label="|| Achivemtns ||" {...a11yProps(2)} />
        <Tab label="|| Mission & Vision ||" {...a11yProps(3)} />
        <Tab label="|| Branch ||" {...a11yProps(4)} />
        <Tab label="|| Our Team ||" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0} className="page">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center",color:"rgb(133, 6, 6)" ,fontFamily:"Samarkan"}}>AboutUs</h1>
          </Grid>
          <Grid item xs={12}>
            <AboutUsSangathan />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} className="page">
        <Post />
      </TabPanel>
      <TabPanel value={value} index={2} className="page">
        <Achivemtns />
      </TabPanel>
      <TabPanel value={value} index={3} className="page">
        <MissionAndVision />
      </TabPanel>
      <TabPanel value={value} index={4} className="page">
        <Shakha />
      </TabPanel>
      <TabPanel value={value} index={5} className="page">
        <KaryKarta />
      </TabPanel>

      {/* </div> */}
    </div>
  );
}
