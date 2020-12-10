import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Welcome from "../../components/Welcome";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import Background from "../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <Container id="container">
        <Row>
          <Col>
            <Card className="text-center" id="card">
              <Card.Body>
                <img
                  style={{
                    width: "50%",
                    display: "block",
                    margin: "0px auto 20px auto",
                  }}
                  src={Logo}
                  alt="allSpeak"
                />
                <Welcome />
                <p>
                  Talk to people around the world in a chat
                  <br />
                  room that automatically translates into your spoken language.
                </p>
                <Button variant="outline-dark" id="login">
                  log in
                </Button>{" "}
                <Button variant="dark" id="signup">
                  sign up
                </Button>
                <LoginForm></LoginForm>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
