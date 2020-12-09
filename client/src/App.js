import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatApp from "./components/ChatApp/index.js";
import SignIn from "./components/SignIn/index.js";
import SignUp from "./pages/SignUp/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios'
// import { useGlobalContext } from "./context/GlobalContext";
// import "./App.css";

function App() {

  // const [state, dispatch] = useGlobalContext()

  // useEffect(()=>{
  //   checkLogin();
  //   loadMessage();
  // }, [state.apiToken])

  // const checkLogin = () => {
  //   // get the user from local storage
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   // is there a user?
  //   if (user) {
  //     // put that user in the state
  //     dispatch({ 
  //       type: "LOGIN", 
  //       email: user.email, 
  //       apiToken: user.token
  //     });
  //   }
  // }

  // const loadMessage = () => {
  //   axios.get("/api/welcome", {
  //     headers: {
  //       Authorization: `Bearer ${state.apiToken}`
  //     }
  //   }).then(({ data }) => {
  //     const { message } = data;
  //     dispatch({ type: "GET_MESSAGE", message })
  //   })
  // }

  // const logout = () => {
  //   // remove the user from local storage
  //   localStorage.removeItem("user");
  //   // remove the user from the state
  //   dispatch({ type: "LOGOUT" })
  // }

  return (
    <Router>
    <div className="App">
      {/* <h1>Let's build AllSpeak</h1> */}
      <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

        {/* full chat window with sidebar component */}
        <Route exact path="/chatroom" component={ChatApp} />
      </div>
    </Router>
  );
}

export default App;
