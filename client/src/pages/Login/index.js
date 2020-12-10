import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <LoginForm></LoginForm>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
