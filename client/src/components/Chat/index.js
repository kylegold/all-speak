import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import MoreVertIcon from "@material-ui/icons/MoreVert";
<<<<<<< HEAD
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Sidebar from "../Sidebar";
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
=======
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Sidebar from "../Sidebar"
import Logo from "../../assets/logo/svg/all_speak_v2_Logo - Black.svg"
>>>>>>> 31c454bac44932a6f51352b6de4c2e41c810de94
import "./style.css";
import { Formik } from "formik";
import axios from "axios";

// Style;
// =============:
import {
  // Button,
  Form,
  // InputGroup,
  // Col,
  // Card,
  // Container,
  // Row,
} from "react-bootstrap";

const Chat = () => {
  return (
<<<<<<< HEAD
    <Formik>
      {(formik) => {
        const {
          values,
          errors,
          touched,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit,
        } = formik;
        return (
          <div className="chat">
            <div className="chat__header">
              <img
                style={{ width: "100px", marginBottom: "27px" }}
                src={Logo}
                alt="allSpeak"
              />
              <div className="chat__headerInfo">
                {/* Avatars for all users in the chat */}
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

                {/* Display the name of the room */}
                <h2>Room name</h2>
              </div>

              <div className="chat__headerRight">
                {/* Settings icon */}
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
              <p className="chat__message">
                <span className="chat__name">Jordan</span>
                This is an incoming message
                <span className="chat__timestamp">
                  {new Date().toUTCString()}
                </span>
              </p>

              <p className="chat__message chat__receiver">
                <span className="chat__name">Andrew</span>
                This is an outgoing message
                <span className="chat__timestamp">
                  {new Date().toUTCString()}
                </span>
              </p>
            </div>

            <div className="chat__footer">
              <InsertEmoticonIcon style={{ margin: "0 10px" }} />
              <div id="userMessageContainer">
                <form style={{ width: "100%" }}>
                  <Form.Group>
                    <Form.Control
                      id="userMessage"
                      placeholder="Type message"
                      type="text"
                      style={{ width: "90%" }}
                    ></Form.Control>
                    <Button
                      onClick={() => {
                        // axios.post();
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
        );
      }}
    </Formik>
  );
};
=======
    <>
      <div className="app__body">
        <div>
        <Sidebar />
        </div>
        {/* Main chat section */}
        <div className="chat">
          <div className="chat__header">
            <img style={{width:"100px", marginBottom:"27px"}} src={Logo} alt="allSpeak" id="logoSide" />
           
            <div id="avatars">
              <AvatarGroup max={4}>
                <Avatar alt="Booty Butt" src="/static/images/avatar/1.jpg" />
                <Avatar
                  alt="Kyle the Ballsack Cat"
                  src="/static/images/avatar/2.jpg"
                />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
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
      </div>
    </>
  )
}
>>>>>>> 31c454bac44932a6f51352b6de4c2e41c810de94

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