import React from "react";
import { Avatar } from "@material-ui/core";
import { useGlobalContext } from "../../context/GlobalContext.js";
import "./style.css";

const SidebarChat = ({ chatRoom }) => {
	const [state, dispatch] = useGlobalContext();
	console.log(chatRoom);
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
				{/* <p>
					{
						chatRoom.messages[chatRoom.messages.length - 1].newMessage[
							"message"
						]
					}
				</p> */}
			</div>
		</div>
	);
};

export default SidebarChat;
