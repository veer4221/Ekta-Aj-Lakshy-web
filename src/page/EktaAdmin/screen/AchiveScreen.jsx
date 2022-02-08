import React, { useEffect, useState } from "react";
import { Divider, Grid, TextField, IconButton, Paper } from "@material-ui/core";
import { Form, Button, Row, Col } from "react-bootstrap";
import { lighten, makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { getAchieveAPI, setAchieveAPI } from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
const AchiveScreen = () => {
  const classes = useStyles();
  const [love_jihad, setlove_jihad] = useState();
  const [land_jihad, setland_jihad] = useState();
  const [gau_raksha, setgau_raksha] = useState();
  const [gau_seva, setgau_seva] = useState();
  const [sevakiyaKary, setsevakiyaKary] = useState();
  const [gar_vapsi, setgar_vapsi] = useState();
  const submitForm =async () => {
    const object = {
       
      love_jihad,
      gau_raksha,
      gau_seva,
      sevakiyaKary,
      gar_vapsi,
    };
    var res = await setAchieveAPI(object);
    if(res.data.success==true)alert("updated")
  };
  useEffect(async()=>{
   var data = await getAchieveAPI()
   console.log(data.data.rows[0])
   setlove_jihad(data.data.rows[0].love_jihad)
   setgau_raksha(data.data.rows[0].gau_raksha)
   setgau_seva(data.data.rows[0].gau_seva)
   setsevakiyaKary(data.data.rows[0].sevakiyaKary)
   setgar_vapsi(data.data.rows[0].gar_vapsi)
  },[])
  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ display: "flex" }}>
            <h4 style={{ color: "grey", paddingLeft: "10px", width: "50%" }}>
              Achievement
            </h4>
            <div
              style={{ textAlign: "right", width: "50%", paddingRight: "10px" }}
            >
              
            </div>
          </div>
          <br></br>
          <Divider />
          <div style={{ width: "90%", textAlign: "right" }}>
            {/* <TextField style={{ paddingRight: '10px' }} id="standard-basic" label="Search" /> */}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Form style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>સેવાકીય કાર્ય</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  value={sevakiyaKary}
                  onChange={(e) => setsevakiyaKary(e.target.value)}
                />
                {/* <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" /> */}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>લવ જેહાદ</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  value={love_jihad}
                  onChange={(e) => setlove_jihad(e.target.value)}
                />

                {/* <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" /> */}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ગૌ રક્ષા</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  value={gau_raksha}
                  onChange={(e) => setgau_raksha(e.target.value)}
                />

                {/* <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" /> */}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ગૌ સેવા</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  value={gau_seva}
                  onChange={(e) => setgau_seva(e.target.value)}
                />

                {/* <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" /> */}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ઘરવાપસી</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  value={gar_vapsi}
                  onChange={(e) => setgar_vapsi(e.target.value)}
                />

                {/* <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" /> */}
              </Form.Group>
            </Row>
          </Form>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
           
            <Button
              variant="success"
              style={{ margin: "10px" }}
              onClick={submitForm}
            >
              Create
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
};

export default AchiveScreen;
