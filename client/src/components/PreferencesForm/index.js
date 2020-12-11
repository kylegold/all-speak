import React from "react";
import {
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";

import { Avatar } from "@material-ui/core";

const PreferencesForm = () => {
  return (
    <>
      <h1>Preferences</h1>
      <Form>
        <Col>
          {/* Material UI Avatar */}
          {/* <Avatar
              alt="User Avatar"
              className=""
              src="https://cdn.shopify.com/s/files/1/0150/0643/3380/products/Viacom_Spongebob_SubTotePRTGENSOG16_00013_RO_grande.jpg?v=1581618420"
              style={{ height: "200px", width: "200px" }}
            /> */}
          <Image
            src="https://cdn.shopify.com/s/files/1/0150/0643/3380/products/Viacom_Spongebob_SubTotePRTGENSOG16_00013_RO_grande.jpg?v=1581618420"
            roundedCircle
            style={{ height: "200px", width: "200px" }}
          />
        </Col>
        <Form.File id="custom-file-translate-html" custom />
        <Form.File
          id="custom-file"
          label="Change Avatar"
          className="mb-4"
          custom
        />
        <Form.Control
          as="select"
          className="mb-4"
          id="inlineFormCustomSelect"
          custom
        >
          <option value="0">Change your language...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Control>
        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
          Change Username
        </Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroup"
            placeholder="Change Username"
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default PreferencesForm;
