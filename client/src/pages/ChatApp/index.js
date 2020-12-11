import React from "react";
import Chat from "../../components/Chat/index.js";
import Sidebar from "../../components/Sidebar";
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