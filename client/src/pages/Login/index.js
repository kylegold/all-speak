import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginLogo from "../../components/LoginLogo";
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
