import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Preferences = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="thing1" />
        </Col>
        <Col>
          <Form.Control placeholder="thing2" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="thing3" />
        </Col>
        <Col>
          <Form.Control placeholder="thing4" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="thing5" />
        </Col>
        <Col>
          <Form.Control placeholder="thing6" />
        </Col>
      </Row>
    </Form>
  );
};

export default Preferences;
