import React from "react";
import { Avatar } from "@material-ui/core";
import { useGlobalContext } from "../../context/GlobalContext.js";
import CheckIcon from "@material-ui/icons/Check";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import "./style.css";

const SidebarChat = ({ chatRoom }) => {
	const [state, dispatch] = useGlobalContext();
	const { messages } = chatRoom;
	// console.log("test" + state.username);
	const pending = chatRoom.members[state.username]["pending"];
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
					{!pending ? null : (
						<div style={{ display: "flex" }}>
							<CheckIcon /> <NotInterestedIcon />
						</div>
					)}
				</small>
				<p>{latestMessage ? latestMessage.message : null}</p>
			</div>
		</div>
	);
};

export default SidebarChat;
