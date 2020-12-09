import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./style.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
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
        <InsertEmoticonIcon />
        <form>
          <input 
            placeholder="Type message"
            type="text"
          />
          <button type="submit">Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;
