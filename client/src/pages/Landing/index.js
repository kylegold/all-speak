import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Welcome from '../../components/Welcome';
import Logo from '../../assets/png/all_speak_v2_Logo_Black.png';

const Landing = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Welcome /> <br />
                        <img style={{ width: "40%", display: "block", margin: "30px auto" }} src={Logo} alt="allSpeak" />
                        <Button>login</Button>
                        <Button>signup</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;