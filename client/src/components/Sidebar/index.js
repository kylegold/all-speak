// Dependencies;
// =============:
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Formik } from "formik";
import axios from "axios";
import SidebarChat from "../SidebarChat/index.js";

// Style;
// =============:
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import { Form } from "react-bootstrap";

const Sidebar = ({ chatRooms }) => {
	const [usernames, updateUsernames] = useState();
	const [state, dispatch] = useGlobalContext();

	// Create state to toggle view
	const [sidebarView, setSidebarView] = useState();
	// Set the state to opposite of it's current value
	const renderSidebar = () => setSidebarView(!sidebarView);

	return (
		<Formik
			initialValues={{
				search: ""
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
					<>
						{/* If sidebar menu is opened, display the sidebar */}
						{sidebarView ? (
							<div className="sidebar">
								{/* Header elements */}
								<div className="sidebar__header">
									<div className="sidebar__search">
										<SearchIcon />
										{/* Search bar */}
										<div className="sidebar__searchContainer">
											{/* <input placeholder="Create or search chat" type="text" /> */}
											<Form.Group>
												<Form.Control
													onChange={handleChange}
													value={values.searchUsernames}
													onClick={() => {
														if (!usernames) {
															axios
																.get("/auth/usernames")
																.then(({ data }) => {
																	updateUsernames(data);
																	console.log("Usernames loaded.");
																})
																.catch(err => console.log(err));
														}
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
											</Form.Group>
										</div>
									</div>
									<div
										className="sidebar__headerRight"
										style={{ marginTop: "10px" }}
									>
										{/* New chat button */}
										<IconButton
											onClick={() => {
												axios
													.post("/auth/new/chatroom", {
														members: {
															[state.username]: { pending: false },
															[values.searchUsernames]: { pending: true }
														}
													})
													.then(data => {
														console.log("Chatroom created.");
													})
													.catch(err => console.log(err));
											}}
											style={{ color: "black" }}
										>
											<AddIcon />
										</IconButton>
										{/* Display either open icon or closed icon depending on the state */}
										<button
											style={{ color: "black" }}
											onClick={() => {
												renderSidebar();
											}}
										>
											<CloseIcon />
										</button>
									</div>
								</div>
								{/* DMs section */}
								<h3>Active Chats</h3>
								<div className="sidebar__chats" style={{ marginRight: "15px" }}>
									{chatRooms
										? chatRooms["activeChats"].map(chatRoom => {
												return <SidebarChat chatRoom={chatRoom} />;
										  })
										: null}
								</div>
								{/* Group Chat section */}
								<h3>Pending Chats</h3>
								<div className="sidebar__chats" style={{ marginRight: "15px" }}>
									{chatRooms
										? chatRooms["pendingChats"].map(chatRoom => {
												return <SidebarChat chatRoom={chatRoom} />;
										  })
										: null}
								</div>
							</div>
						) : (
							// If the sidebar is closed
							<div
								className="sidebar"
								style={{ justifyContent: "space-between" }}
							>
								{/* Show the open button */}
								<button
									style={{ margin: "30px 0px", padding: "0px" }}
									onClick={() => {
										renderSidebar();
									}}
								>
									<ArrowBackIosIcon />
								</button>
								{/* Display user photo next to the chat input bar */}
								<div
									style={{
										borderRadius: "25px",
										border: "1px solid black",
										backgroundColor: "grey",
										width: "40px",
										height: "40px"
									}}
								>
									&nbsp;
								</div>
							</div>
						)}
					</>
				);
			}}
		</Formik>
	);
};

export default Sidebar;
