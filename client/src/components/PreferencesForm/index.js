import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import AvatarCropper from "../AvatarCropper/index.jsx";
import ChangeUsername from "../ChangeUsername";
import ChangeLanguage from "../ChangeLanguage";
import "./style.css";

// import { Avatar } from "@material-ui/core";

const PreferencesForm = () => {
  return (
    <>
      <h1>Preferences</h1>
      <Row>
        <Col className="m-auto">
          {/* avatar cropping module */}
          <AvatarCropper className="m-a" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChangeLanguage />
        </Col>
      </Row>

      <Row>
        <Col>
          <ChangeUsername />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" type="submit" className="mt-2">
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PreferencesForm;
