import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

const RememberMe = () => {
  const handleSwitch = (e) => {
    console.log(e.target.value);
  };
  return (
    <Form.Group onClick={handleSwitch} controlId="formBasicCheckbox">
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Remember me?"
        style={{ margin: "0" }}
        value={"on"}
      />
    </Form.Group>
  );
};

export default RememberMe;
