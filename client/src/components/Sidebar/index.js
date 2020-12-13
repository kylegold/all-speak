import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SidebarChat from "../SidebarChat/index.js";
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Sidebar = () => {
	// Create state to toggle view
	const [sidebarView, setSidebarView] = useState()
	// Set the state to opposite of it's current value
	const renderSidebar = () => setSidebarView(!sidebarView)

	return (
		<>
		{/* If sidebar menu is opened, display the sidebar */}
		{sidebarView ? 
			<div className="sidebar">
				{/* Header elements */}
				<div className="sidebar__header">
					<div className="sidebar__search">
						<div className="sidebar__searchContainer">
							{/* Search bar */}
							<input style={{width:"85%"}} placeholder="Search" type="text" />
						</div>
					</div>
					<div className="sidebar__headerRight">
						{/* New chat button */}
						<IconButton style={{color:"black"}}>
							<AddIcon />
						</IconButton>
						{/* Display either open icon or closed icon depending on the state */}
						<button style={{color:"black"}} onClick={()=>{renderSidebar()}}>{sidebarView ? <CloseIcon /> : <ArrowBackIosIcon /> }</button>
					</div>
				</div>
				{/* DMs section */}
				<h3>Private Chats</h3>
				<div className="sidebar__chats" style={{ marginRight: "15px"}}>
					<SidebarChat />
					<SidebarChat />
					<SidebarChat />
				</div>
				{/* Group Chat section */}
				<h3>Group Chats</h3>
				<div className="sidebar__chats" style={{ marginRight: "15px"}}>
					<SidebarChat />
					<SidebarChat />
					<SidebarChat />
				</div>
			</div> :
			// If the sidebar is closed
			<div className="sidebar" style={{justifyContent: "space-between"}}>
				{/* Show the open button */}
				<button style={{margin:"30px 0px", padding:"0px"}} onClick={()=>{renderSidebar()}}>{sidebarView ? <CloseIcon /> : <ArrowBackIosIcon />}</button>
				{/* Display user photo next to the chat input bar */}
				<div style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
			</div>}
		</>
	);
};

export default Sidebar;
