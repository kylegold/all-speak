import React from "react";
import { Avatar } from "@material-ui/core";
import "./style.css";

const SidebarChat = ({ chatroom }) => {
	console.log(chatroom);
	return (
		<div className="sidebarChat">
			<div class="sidebarAvatar">
				<Avatar />
			</div>
			<div className="sidebarChat__info">
				<h2>Room name</h2>
				<p>{chatroom.messages[chatroom.messages.length - 1]}</p>
			</div>
		</div>
	);
};

export default SidebarChat;
