import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatApp from './components/ChatApp/index.js';
import SignIn from './components/SignIn/index.js';
import SignUp from './components/SignUp/index.js';

// import './App.css';

function App() {
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
