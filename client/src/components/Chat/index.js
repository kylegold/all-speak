import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
// import MicIcon from "@material-ui/icons/Mic";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./style.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          {/* <p>Last seen at...</p> */}
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
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
        <InsertEmoticonIcon style={{margin:"0 10px"}} />
        <div id="userMessageContainer">
        <form style={{width: "100%"}}>
          <input
            id="userMessage"
            placeholder="Type message"
            type="text"
            style={{width: "90%"}}
          />
          <button id="sendMessageBtn" type="submit"><ArrowUpwardIcon style={{fontSize: "17px"}} /></button>
        </form>
        </div>
      </div>
    </div>
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