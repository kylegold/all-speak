import React, { useRef, useState } from "react";
import {Redirect} from "react-router-dom"
import { Button, Form } from "react-bootstrap";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const LoginForm = () => {

  

  const emailRef = useRef();
  const passwordRef = useRef();

  const [_, dispatch] = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the info from the form
    console.log(e.target);

    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // do the login with the api
    await axios.post("/auth/login", creds).then(({ data }) => {
      // put the email and token in the state
    const { email, token } = data;
    const apiToken = token;
    console.log(apiToken);
    dispatch({
      type: "LOGIN",
      email,
      apiToken: data.token,
    });
    localStorage.setItem("user", JSON.stringify({ email, token }));
    }).then(() => {window.location.reload();})
    
  
  };


  return (
    <>{localStorage.getItem("user") ?  <Redirect to="/chatroom" />:
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" ref={emailRef} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="switch" id="custom-switch" label="Remember me?" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Log in
        </Button>
      </Form>
      }
      
    </>
  );
};

export default LoginForm;
