import React from "react";
import { Form } from "react-bootstrap";

const RememberMe = () => {
  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="switch" id="custom-switch" label="Remember me?" />
    </Form.Group>
  );
};

export default RememberMe;
