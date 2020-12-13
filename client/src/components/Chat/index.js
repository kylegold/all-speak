import React from "react";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Sidebar from "../Sidebar"
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg"
import "./style.css";

const Chat = () => {
  return (
    <>
    <div>
    <Sidebar />
    </div>
    {/* Main chat section */}
    <div className="chat">
      <div className="chat__header">
        <img style={{width:"100px", marginBottom:"27px"}} src={Logo} alt="allSpeak" />
        <div className="chat__headerInfo">
          {/* Avatars for all users in the chat */}
          <div id="avatars">
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          <div class="userAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;</div>
          </div>
          {/* Display the name of the room */}
          <h2>Room name</h2>
        </div>

        <div className="chat__headerRight">
          {/* Settings icon */}
          <IconButton style={{color:"black"}}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body"> 
        {/* Message received by the user */}
        <div class="senderMessage">
          {/* Avatar */}
          <div class="senderAvatar" style={{borderRadius: "25px", border: "1px solid black", backgroundColor: "grey", width: "40px", height:"40px"}}>&nbsp;
          </div>
          {/* Username and message */}
          <p className="chat__message">
            <span className="chat__name">Jordan</span>
            This is an incoming message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>
        {/* Message sent by the user */}
        <div class="receiverMessage">
          {/* Username and message */}
            <p className="chat__message chat__receiver">
              <span className="chat__name__receiver">Andrew</span>
              This is an outgoing message
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
            </p>
        </div>
      </div>

      <div className="chat__footer">
        {/* Input for the user's message */}
        <div id="userMessageContainer">
          <form style={{ width: "100%" }}>
            <input
              id="userMessage"
              placeholder="Type message"
              type="text"
              style={{ width: "90%" }}
            />
            {/* Send button */}
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
