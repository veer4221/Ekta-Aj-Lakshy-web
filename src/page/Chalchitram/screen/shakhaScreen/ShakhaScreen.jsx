import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./shakhaScreen.scss";
import logo from "./logo.png" 
const ShakhaScreen = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap"  width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">મુખ્ય શાખા</h5>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap" width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">આઇટી સેલ</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap"  width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">હિન્દુ રોજગાર શાખા</h5>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap" width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">નારી શક્તિ શાખા </h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap"  width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">યુવા શાખા</h5>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap" width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">કામધેનુ શાખા</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} xs={12} style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <div class="card shakhaCard" style={{width: "18rem",background:"#363636",boxShadow:"rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px"}}>
            <img class="card-img-top" src={logo} alt="Card image cap"  width="60px" height="250px"/>
            <div class="card-body">
              <h5 class="card-title">પ્રચાર-પ્રસાર શાખા</h5>
            </div>
          </div>
        </Col>
      
      </Row>
    </Container>
  );
};

export default ShakhaScreen;
