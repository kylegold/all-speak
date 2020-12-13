// Dependencies;
// =============:
import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "../SidebarChat/index.js";
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg";
import "./style.css";
import { Formik } from "formik";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";

// Style;
// =============:
import {
	Button,
	Form,
	InputGroup,
	Col,
	Card,
	Container,
	Row
} from "react-bootstrap";

function loadChatrooms() {
	const user = JSON.parse(localStorage.getItem("user"));
	if (user) {
		const { username } = user;
		axios
			.post("/auth/getChatRooms", { username: username })
			.then(res => console.log(res));
	}
}

loadChatrooms();

const Sidebar = () => {
	const [usernames, updateUsernames] = useState();
	const [state, dispatch] = useGlobalContext();
	const [chatRooms, setChatRooms] = useState();

	return (
		<Formik
			initialValues={{
				search: ""
			}}
			// validationSchema={SignupSchema}
			onSubmit={values => {
				// axios
				// 	.post("/auth/signup", values)
				// 	.then(res => {
				// 		console.log(res);
				// 	})
				// 	.catch(error => {
				// 		console.log(error);
				// 	});
				// console.log(values);
			}}
		>
			{formik => {
				const {
					values,
					errors,
					touched,
					isValid,
					handleBlur,
					handleChange,
					handleSubmit
				} = formik;
				return (
					<div className="sidebar">
						{/* Create a container that will hold all elements of the sidebar header */}
						<div className="sidebar__header">
							{/* Add an src with image url to give avatar an actual picture */}
							<img src={Logo} style={{ width: "100px" }} alt="allSpeak" />
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
								{/* <input placeholder="Create or search chat" type="text" /> */}
								<Form.Group>
									<Form.Control
										onChange={handleChange}
										value={values.searchUsernames}
										onClick={() => {
											axios
												.get("/auth/usernames")
												.then(({ data }) => {
													console.log(data);
													updateUsernames(data);
												})
												.catch(err => console.log(err));
										}}
										name="searchUsernames"
										placeholder="Create or search chat"
										type="search"
										list="usernames"
									></Form.Control>
									<datalist id="usernames">
										{usernames
											? usernames.map((name, i) => {
													return <option key={i} value={name} />;
											  })
											: null}
									</datalist>
									<Button
										onClick={() => {
											console.log("button", state);

											axios.post("/auth/new/chatroom", {
												members: {
													[state.username]: { pending: false },
													[values.searchUsernames]: { pending: true }
												}
											});
										}}
									>
										+
									</Button>
								</Form.Group>
							</div>
						</div>

						<div className="sidebar__chats">
							<SidebarChat />
							<SidebarChat />
							<SidebarChat />
						</div>
					</div>
				);
			}}
		</Formik>
	);
};

export default Sidebar;
