import React, {useState} from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg"
import Sidebar from "../Sidebar"
import "./style.css";

const Chat = () => {

  const [sidebarView, setSidebarView] = useState()
  const renderSidebar = () => setSidebarView(!sidebarView)
  
  return (
    <>
    <div>
    {sidebarView && <Sidebar />}
    </div>
    <div className="chat">
      <div className="chat__header">
        <button onClick={()=>{renderSidebar()}}>{sidebarView ? <CloseIcon /> : <ArrowBackIosIcon />}</button>
        <div className="chat__headerInfo">
          {/* <img src={Logo} style={{width: "150px", marginBottom:"13px"}} alt="allSpeak" id="logo" /> */}
          <div id="avatars">
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          </div>
          <h2>Room name</h2>
          {/* <p>Last seen at...</p> */}
        </div>

        <div className="chat__headerRight">
         
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Jordan</span>
          This is an incoming message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Andrew</span>
          This is an outgoing message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon style={{ margin: "0 10px" }} />
        <div id="userMessageContainer">
          <form style={{ width: "100%" }}>
            <input
              id="userMessage"
              placeholder="Type message"
              type="text"
              style={{ width: "90%" }}
            />
            <button id="sendMessageBtn" type="submit">
              <ArrowUpwardIcon style={{ fontSize: "17px" }} />
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

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
