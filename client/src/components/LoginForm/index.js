import React, { useRef } from "react";
import Nav from "../Nav/Nav";
import { useGlobalContext } from "../../context/GlobalContext"
import axios from "axios";
import { Button } from "react-bootstrap";

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
    const { email, token } = data;
    const apiToken = token;
    console.log(apiToken);
    dispatch({ 
      type: "LOGIN", 
      email, 
      apiToken: data.token });
    localStorage.setItem("user", JSON.stringify({ email, token }));
  };
  return (
    <>
      {/* <Nav /> */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
