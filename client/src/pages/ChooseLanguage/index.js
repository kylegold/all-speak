import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ChooseLanguage = () => {
  return (
    <>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1" style={{ margin: "0 auto" }}>
            <Form.Label
              htmlFor="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </Form.Label>
            <Form.Control
              as="select"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row xs="auto" className="my-1">
          <Button type="submit" style={{ margin: "0 auto" }}>Submit</Button>
        </Form.Row>
      </Form>
    </>
  );
};

export default ChooseLanguage;
