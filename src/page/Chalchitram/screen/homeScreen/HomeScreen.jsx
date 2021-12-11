import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../../components/category/Category";
import Video from "../../components/video/Video";

const HomeScreen = () => {
  return (
    <Container>
      <Category />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
