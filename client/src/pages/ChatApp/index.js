import React from "react";
import Chat from "../../components/Chat/index.js";
import { Container } from "react-bootstrap";
// import Sidebar from "../../components/Sidebar";
import "./style.css"
import { BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29, BG30 } from "../../assets/bkg_imgs"


const ChatApp = () => {
  const backgroundImages = [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29,BG30]
  const background = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover"
    }}
    >
      <Container id="container">
        <Chat/>
      </Container>
    </div> 
  )
}

export default ChatApp;