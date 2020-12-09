import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "../SidebarChat/index.js";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Create a container that will hold all elements of the sidebar header */}
      <div className="sidebar__header">
        {/* Add an src with image url to give avatar an actual picture */}
        <Avatar src="https://i.kym-cdn.com/photos/images/original/001/904/985/621.png"/>
        {/* header right // material-ui needs to be imported to use icons (npm install @material-ui/core) */}
        {/* AFTER material core has been installed, install the icons (npm install @material-ui/icons) */}
        <div className="sidebar__headerRight">
          {/* IconButton is a parent component provided by @material-ui that gives the ripple effect when clicked */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input 
            placeholder="Create or search chat"
            type="text"
          />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar;
