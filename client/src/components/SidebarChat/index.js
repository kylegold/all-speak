import React from "react";
import { Avatar } from "@material-ui/core";
import { useGlobalContext } from "../../context/GlobalContext.js";
import "./style.css";

const SidebarChat = ({ chatRoom }) => {
	const [state, dispatch] = useGlobalContext();
	const { messages } = chatRoom;
	const latestMessage = messages[messages.length - 1];

	const handleChatClick = () => {
		dispatch({
			type: "SELECT_CHAT",
			chatId: chatRoom._id
		});
	};
	return (
		<div
			onClick={event => {
				event.preventDefault();
				handleChatClick();
			}}
			id={chatRoom._id}
			className="sidebarChat"
		>
			<div class="sidebarAvatar">
				<Avatar />
			</div>
			<div className="sidebarChat__info">
				<h2>
					{Object.keys(chatRoom.members).map(member => {
						return <span>{member}, </span>;
					})}
				</h2>
				<small style={{ fontStyle: "italic" }}>
					{latestMessage ? latestMessage.user + ":" : null}
				</small>
				<p>{latestMessage ? latestMessage.message : null}</p>
			</div>
		</div>
	);
};

export default SidebarChat;
