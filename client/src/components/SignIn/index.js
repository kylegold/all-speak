import React, { useRef }  from "react";
import Nav from '../Nav/Nav'

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the info from the form
    console.log(e.target)
    
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    console.log(creds)
  }
  return(
    <>
    <Nav />
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
    </>
  )
}

export default SignIn