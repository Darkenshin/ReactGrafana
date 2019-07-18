import React, { useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import DashBordListView from "./DashBordListView";
import InputJsonData from "./InputJsonData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const App = () => {
  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <Container>
      <Row>
        <Col>
          <InputJsonData />
        </Col>
        <Col>
          <DashBordListView />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="submit" onSubmit={handleSubmit} />
          <Button variant="secondary" size="lg" block>
            Block level button
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
