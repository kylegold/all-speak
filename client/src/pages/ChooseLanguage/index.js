import React from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import ChooseLanguageCar from "../../components/ChooseLanguageCar";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import { BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29, BG30 } from "../../assets/bkg_imgs"


const ChooseLanguage = () => {
  const backgroundImages = [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11, BG12, BG13, BG14, BG15, BG16, BG17, BG18, BG19, BG20, BG21, BG22, BG23, BG24, BG25, BG26, BG27, BG28, BG29,BG30]
  const background = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <>
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
                  <img
                    style={{
                      width: "50%",
                      minWidth: "200px",
                      display: "block",
                      margin: "0px auto 20px auto",
                    }}
                    src={Logo}
                    alt="allSpeak"
                  />
                  <ChooseLanguageCar />
                  <div style={{ width: "100%" }}>
                    <Form>
                      <Form.Row className="align-items-center">
                        <Col
                          xs="auto"
                          className="my-1"
                          style={{
                            alignItems: "center",
                            margin: "10px auto 0 auto",
                          }}
                        >
                          <Form.Label
                            className="mr-sm-2"
                            htmlFor="inlineFormCustomSelect"
                            srOnly
                          >
                            Preference
                          </Form.Label>
                          <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                          >
                            <option value="0">Choose your language...</option>
                            <option value="1">English</option>
                            <option value="2">Spanish</option>
                            <option value="3">Italian</option>
                          </Form.Control>
                        </Col>
                        {/* <Row 
                                    xs="auto" 
                                    className="my-1"
                                    style={{ width: "50%", margin: "0 auto" }}
                                  >
                                    <Form.Check
                                      type="checkbox"
                                      id="customControlAutosizing"
                                      label="Remember Me?"
                                      custom
                                    />
                                  </Row> */}
                      </Form.Row>
                      <Form.Row
                        xs="auto"
                        className="my-1"
                        style={{ width: "100%" }}
                      >
                        <Col style={{ margin: "10px auto 0 auto" }}>
                          <Button type="submit" variant="dark">
                            Submit
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                  {/* <Button variant="outline-dark" id="button">log in</Button> {' '}
                          <Button variant="dark" id="button">sign up</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1" style={{ margin: "0 auto" }}>
            <Form.Label
              htmlFor="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </Form.Label>
            <Form.Control
              as="select"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row xs="auto" className="my-1">
          <Button type="submit" style={{ margin: "0 auto" }}>Submit</Button>
        </Form.Row>
      </Form> */}
    </>
  );
};

export default ChooseLanguage;
