import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Background from "../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg";
import PreferencesForm from "../../components/PreferencesForm";

const Preferences = () => {
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
                <PreferencesForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preferences;
