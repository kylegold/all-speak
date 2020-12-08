import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      {/* <h1>Let's build AllSpeak</h1> */}

      {/* Sidebar component */}
      <Sidebar />

      {/* Chat component */}
    </div>
    </Router>
  );
}

export default App;
