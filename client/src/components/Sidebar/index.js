// Dependencies;
// =============:
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import SidebarChat from "../SidebarChat/index.js";
import "./style.css";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useState, useEffect } from "react";
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
	// Create state to toggle view
	const [sidebarView, setSidebarView] = useState();
	// Set the state to opposite of it's current value
	const renderSidebar = () => setSidebarView(!sidebarView);
  

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
            <div className="sidebar__headerRight" style={{ marginTop: "10px" }}>
              {/* New chat button */}
              <IconButton style={{ color: "black" }}>
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
          <h3>Private Chats</h3>
          <div className="sidebar__chats" style={{ marginRight: "15px" }}>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
          </div>
          {/* Group Chat section */}
          <h3>Group Chats</h3>
          <div className="sidebar__chats" style={{ marginRight: "15px" }}>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
          </div>
        </div>
      ) : (
        // If the sidebar is closed
        <div className="sidebar" style={{ justifyContent: "space-between" }}>
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
              height: "40px",
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
