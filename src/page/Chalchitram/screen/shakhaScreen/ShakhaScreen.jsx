import "./shakhaScreen.scss";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router";
import { selectCategoryAction } from "../../../../Redux/Actions";
import { useDispatch } from "react-redux";

const ShakhaScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/mukhyaShakha`);
              dispatch(selectCategoryAction("mukhyaShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                મુખ્ય શાખા
              </h5>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/itcell`);

              dispatch(selectCategoryAction("itcell"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                આઇટી સેલ
              </h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/rojgharShakha`);
              dispatch(selectCategoryAction("rojgharShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                હિન્દુ રોજગાર શાખા
              </h5>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/nariShakha`);
              dispatch(selectCategoryAction("nariShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                નારી શક્તિ શાખા
              </h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/yuvaShakha`);
              dispatch(selectCategoryAction("yuvaShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                યુવા શાખા
              </h5>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/kamdhenuShakha`);
              dispatch(selectCategoryAction("kamdhenuShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                કામધેનુ શાખા
              </h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          lg={6}
          md={6}
          xs={12}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            class="card shakhaCard"
            onClick={() => {
              navigate(`/ChalChitram/category/pracharprasarShakha`);
              dispatch(selectCategoryAction("pracharprasarShakha"));
            }}
            style={{
              width: "18rem",
              background: "#363636",
              boxShadow:
                "rgb(116 113 113) 0px 6px 12px -2px, rgb(255 247 247 / 30%) 0px 3px 7px -3px",
            }}
          >
            <img
              class="card-img-top"
              src={logo}
              alt="Card image cap"
              width="60px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title " style={{ color: "white" }}>
                પ્રચાર-પ્રસાર શાખા
              </h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShakhaScreen;
