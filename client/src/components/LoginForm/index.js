import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import RememberMe from "../RememberMe";

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
    const { data } = await axios.post("/auth/login", creds);
    // put the email and token in the state
    const { username, email, lang, token } = data;
    const apiToken = token;
    console.log(username);
    dispatch({
      type: "LOGIN",
      username,
      email,
      lang,
      apiToken: data.token,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, lang, token })
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            ref={emailRef}
            style={{ border: "1px solid black" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            style={{ border: "1px solid black", backgroundColor: "none" }}
          />
        </Form.Group>

        <RememberMe />

        <Button variant="dark" type="submit">
          {/* // LOGIN - DRILL; */}
          {/* // =============: */}
          Login
        </Button>
      </Form>
    </>
  );
};
export default LoginForm;
