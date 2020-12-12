import React from "react";
import {Link} from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginLogo from "../../components/LoginLogo";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import LoginForm from "../../components/LoginForm";
import { BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29, BG30 } from "../../assets/bkg_imgs"

const Login = () => {
  const backgroundImages = [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29,BG30]
	const background = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <Container id="container">
        <Row>
          <Col>
            <Card className="text-center" id="card">
              <Card.Body>
              <Link to="/"><img
                  style={{
                    width: "50%",
                    display: "block",
                    margin: "0px auto 20px auto",
                  }}
                  src={Logo}
                  alt="allSpeak"
                /></Link>
                <LoginLogo />
                <LoginForm />

                <br></br>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
