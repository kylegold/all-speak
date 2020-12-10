import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Button>login</Button>
            <Button>signup</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
