import React from "react";
import Chat from "../Chat/index.js";
import Sidebar from "../Sidebar";
import "./style.css"

const ChatApp = () => {
  return (
    <div className="app">
      {/* <h1>Let's build AllSpeak</h1> */}
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Chat component */}
        <Chat />
      </div>
    </div> 
  )
}

export default ChatApp;