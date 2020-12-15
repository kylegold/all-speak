import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../../components/Chat/index.js";
import { Container } from "react-bootstrap";
// import Sidebar from "../../components/Sidebar";
import "./style.css";
import Pusher from "pusher-js"
import {
	BG1,
	BG2,
	BG3,
	BG4,
	BG5,
	BG6,
	BG7,
	BG8,
	BG9,
	BG10,
	BG11,
	BG12,
	BG13,
	BG14,
	BG15,
	BG16,
	BG17,
	BG18,
	BG19,
	BG20,
	BG21,
	BG22,
	BG23,
	BG24,
	BG25,
	BG26,
	BG27,
	BG28,
	BG29,
	BG30
} from "../../assets/bkg_imgs";



const ChatApp = () => {
	const [chatRooms, setChatRooms] = useState();
	const backgroundImages = [
		BG1,
		BG2,
		BG3,
		BG4,
		BG5,
		BG6,
		BG7,
		BG8,
		BG9,
		BG10,
		BG11,
		BG12,
		BG13,
		BG14,
		BG15,
		BG16,
		BG17,
		BG18,
		BG19,
		BG20,
		BG21,
		BG22,
		BG23,
		BG24,
		BG25,
		BG26,
		BG27,
		BG28,
		BG29,
		BG30
	];
	const background =
		backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

		function loadChatrooms() {
			const user = JSON.parse(localStorage.getItem("user"));
			if (user) {
				const { username } = user;
				axios
					.post("/auth/getChatRooms", { username: username })
					.then(({ data }) => {
						localStorage.setItem("chats", JSON.stringify(data))
						const chats = JSON.parse(localStorage.getItem("chats"));
						setChatRooms(chats);
					});
			}
		}

	useEffect(() => {
		loadChatrooms()
		
	}, []);

	useEffect(() => {
		
		// Enable pusher logging - don't include this in production
	Pusher.logToConsole = true;

	var pusher = new Pusher('12906ee22e3c2cdb9fe9', {
		cluster: 'us2'
	});
	
	var channel = pusher.subscribe('chats');
	channel.bind('newMessage', function(data) {
			if(data.message === true){
				loadChatrooms()
				}
})
}, []);

	return (
	
		<div
			style={{
				width: "100vw",
				height: "100vh",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover"
			}}
		>
			<Container id="container">
				<Chat chatRooms={chatRooms}  />
			</Container>
		</div>
	);
};

export default ChatApp;
