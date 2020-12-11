import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "../SidebarChat/index.js";
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg"
import "./style.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			{/* Create a container that will hold all elements of the sidebar header */}
			<div className="sidebar__header">
				{/* Add an src with image url to give avatar an actual picture */}
				<img src={Logo} style={{width: "100px"}} alt="allSpeak" />
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
					<input placeholder="Create or search chat" type="text" />
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
