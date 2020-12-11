import React from "react";
import LanguageChoiceOptions from "../LanguageChoiceOptions";
import { Form, Col, Button } from "react-bootstrap";

const LanguageChoiceBox = () => {
  // map func
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col
          xs="auto"
          className="my-1"
          style={{
            alignItems: "center",
            margin: "10px auto 0 auto",
          }}
        >
          <Form.Label
            className="mr-sm-2"
            htmlFor="inlineFormCustomSelect"
            srOnly
          >
            Preference
          </Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            {/* map stuff */}
            <option value="0">Choose your language...</option>
            {/* <option value="1">English</option>
            <option value="2">Spanish</option>
            <option value="3">Italian</option> */}
            <LanguageChoiceOptions />
          </Form.Control>
        </Col>
      </Form.Row>
      <Form.Row xs="auto" className="my-1" style={{ width: "100%" }}>
        <Col style={{ margin: "10px auto 0 auto" }}>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default LanguageChoiceBox;
