import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { IconButton, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Sidebar from "../Sidebar";
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg";
import "./style.css";
import { Formik } from "formik";
import axios from "axios";
import Pusher from "pusher-js";

// Style;
// =============:
import {
	Button,
	Form,
	// InputGroup,
	// Col,
	// Card,
	// Container,
	Row
} from "react-bootstrap";
import { STATES } from "mongoose";

const Chat = ({ chatRooms }) => {
	const [state, dispatch] = useGlobalContext();
	const [chatMessage, setChatMessage] = useState();
	// console.log(chatRooms);
	// const { messages } = chatRooms;
	// console.log(messages)
	// const latestMessage = messages[messages.length - 1];
	useEffect(() => {
		// Enable pusher logging - don't include this in production
		Pusher.logToConsole = true;

		var pusher = new Pusher("12906ee22e3c2cdb9fe9", {
			cluster: "us2"
		});

		var channel = pusher.subscribe("chats");
		channel.bind("newMessage", function (data) {
			// alert(
			// 	"An event was triggered with message: " + JSON.stringify(data.message)
			// );
		});
	}, []);

	useEffect(() => {
		if (chatRooms) {
			const { activeChats } = chatRooms;
			if (!state.chatId) {
				dispatch({ type: "SELECT_CHAT", chatId: activeChats[0]._id });
			}
			if (activeChats[0]) {
				setChatMessage(activeChats[0].messages);
				// console.log(chatMessage);
				// console.log(activeChats[activeChats.length - 1].messages);
			}
		} else {
			console.log(chatRooms);
		}
	});

	// console.log(state.chatId);
	return (
		<Formik
			initialValues={{
				message: ""
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
						<div className="app__body">
							<div>
								<Sidebar chatRooms={chatRooms} />
							</div>
							{/* Main chat section */}
							<div className="chat">
								<div className="chat__header">
									<img
										style={{ width: "100px", marginBottom: "27px" }}
										src={Logo}
										alt="allSpeak"
										id="logoSide"
									/>
									<div id="avatars">
										<AvatarGroup max={4}>
											<Avatar
												alt="Booty Butt"
												src="/static/images/avatar/1.jpg"
											/>
											<Avatar
												alt="Kyle the Ballsack Cat"
												src="/static/images/avatar/2.jpg"
											/>
											<Avatar
												alt="Cindy Baker"
												src="/static/images/avatar/3.jpg"
											/>
											<Avatar
												alt="Agnes Walker"
												src="/static/images/avatar/4.jpg"
											/>
											<Avatar
												alt="Trevor Henderson"
												src="/static/images/avatar/5.jpg"
											/>
										</AvatarGroup>
									</div>
									<div className="chat__headerRight">
										{/* Settings icon */} {/* Settings icon */}
										<IconButton
											style={{ color: "black" }}
											aria-label="preferences"
											variant="link"
											color="grey"
											href="/preferences"
										>
											<MoreVertIcon />
										</IconButton>
									</div>
								</div>

								<div className="chat__body">
									{/* Message received by the user */}

									{/* Username and message */}
									{chatMessage
										? chatMessage.map(message => (
												<Row>
													{" "}
													<div class="senderMessage">
														{/* Avatar */}
														<div
															class="senderAvatar"
															style={{
																borderRadius: "25px",
																border: "1px solid black",
																backgroundColor: "grey",
																width: "40px",
																height: "40px"
															}}
														>
															&nbsp;
														</div>{" "}
														<p className="chat__message">
															<span className="chat__name">{message.user}</span>
															{/* This is an incoming message */}
															<span>{message.message}</span>
															<span className="chat__timestamp">
																{message.created_at}
															</span>
														</p>
													</div>
												</Row>
										  ))
										: null}

									{/* Message sent by the user */}
									{chatMessage
										? chatMessage.map(message => (
												<Row>
													{" "}
													<div class="receiverMessage">
														{/* Username and message */}
														<p className="chat__message chat__receiver">
															<span className="chat__name__receiver">
																{message.user}
															</span>
															<span>{message.message}</span>
															<span className="chat__timestamp">
																{message.created_at}
															</span>
														</p>
													</div>
												</Row>
										  ))
										: null}
								</div>

								<div className="chat__footer">
									{/* Input for the user's message */}
									<div id="userMessageContainer">
										<form style={{ width: "100%" }}>
											<Form.Group>
												<Form.Control
													onChange={handleChange}
													name="message"
													value={values.message}
													id="userMessage"
													placeholder="Type message"
													type="text"
													style={{ width: "95%" }}
												></Form.Control>
												<Button
													onClick={event => {
														event.preventDefault();
														axios.post("/auth/new/message", {
															id: state.chatId,
															user: state.username,
															message: values.message,
															lang: state.lang
														});
													}}
													id="sendMessageBtn"
													type="submit"
												>
													<ArrowUpwardIcon style={{ fontSize: "17px" }} />
												</Button>
											</Form.Group>
										</form>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			}}
		</Formik>
	);
};

export default Chat;

// ======== JORDAN'S CODE TO INTEGRATE ========

// PROP DRILLING / STRING INTERPOLATION NEEDED. CONST CHAT () => NEEDS TO BE CHANGED TO:

// const Chat = ({ messages }) =>

// =======================================

// WE NEED TO KEEP TRACK OF THE USER'S INPUT (NEEDS TO BE IMPLEMENTED AFTER LINE 11):

// const [input, setInput] = useState("")

// const sendMessage = async (e) => {
//   e.preventDefault();

//   await axios.post("/messages/new", {
//     // hard coded until authorization query is implemented
//     name: "DEMO",
//     message: input,
//     timestamp: "Right now",
//     received: true,
//   })

//   setInput("");
// };

// =======================================

// WE NEED TO MAP THROUGH MESSAGES FOR BOTH INBOUND AND OUTBOUND MESSAGES. THIS WOULD NEED TO BE FOLDED IN REPLACEMENT OF LINES 34 - 65 (NOTE: IMPLEMENTATION OF THIS IS SUBJECT TO CHANGE DUE TO PASSPORT AUTHENTICATION):

// <div className="chat__body">
//   {messages.map(message => {
//     return (
//       <p className={`chat__message ${message.received && "chat__receiver"}`}>
//         <span className="chat__name">{message.name}</span>

//         {message.message}

//         <span className="chat__timestamp">{message.timestamp}</span>
//       </p>
//     )
//   })}
// </div>

// <div className="chat__footer">
//   <InsertEmoticonIcon />
//   <form>
//     <input
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       placeholder="Type message"
//       type="text"
//     />
//     <button onClick={sendMessage} type="submit">Send</button>
//   </form>
//   <MicIcon />
// </div>

// =======================================
