import React from "react";

import { Form, FormControl, InputGroup } from "react-bootstrap";

const ChangeUsername = () => {
  return (
    <>
      <Form>
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

export default ChangeUsername;
