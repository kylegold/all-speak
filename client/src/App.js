import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chat from './components/Chat/index.js';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      {/* <h1>Let's build AllSpeak</h1> */}
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Chat component */}
        <Chat />
      </div>
    </div>
    </Router>
  );
}

export default App;
