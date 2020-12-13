import React from "react";
import { Avatar } from "@material-ui/core";
import "./style.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <div class="sidebarAvatar">
        <Avatar />
      </div>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat;
