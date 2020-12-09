import React from 'react';
import { Avatar } from '@material-ui/core';
import "./style.css";

const SidebarChat = () => {
  return (
    <div className="app__body">
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
    </div>
  )
}

export default SidebarChat
