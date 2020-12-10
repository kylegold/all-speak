import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Welcome from '../../components/Welcome';
import Logo from '../../assets//logo/png/all_speak_v2_Logo_Black.png';
import Background from '../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg'

const Landing = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>

            <Container style={{ position: "absolute", top: "50%", left: " 50%", transform: "translate(-50%, -50%)" }}>
                <Row>
                    <Col>
                        <Card className="text-center" style={{ padding: "30px", width: "70%", position: "absolute", top: "50%", left: " 50%", transform: "translate(-50%, -50%)", borderRadius: "25px" }}>
                            <Card.Body>
                                <img style={{ width: "50%", display: "block", margin: "0px auto 20px auto" }} src={Logo} alt="allSpeak" />
                                <Welcome />
                                <p>Talk to people around the world in a chat<br />room that automatically translates into your spoken language.</p>
                                <Button variant="outline-dark" style={{ width: "120px", margin: "15px 20px 0px 0px" }}> log in</Button> {' '}
                                <Button variant="dark" style={{ width: "120px", margin: "15px 0px 0px 20px" }}>sign up</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Landing;