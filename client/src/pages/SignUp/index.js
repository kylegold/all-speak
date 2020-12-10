import React from "react";
import {Link} from "react-router-dom"
import { Card, Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../../components/SignUpForm";
import Background from "../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import Welcome from "../../components/Welcome";

const SignUp = () => {

	return (
		<>
			<div
				style={{
					width: "100vw",
					height: "100vh",
					backgroundImage: `url(${Background})`,
					backgroundSize: "cover"
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
											minWidth: "200px",
											display: "block",
											margin: "0px auto 20px auto"
										}}
										src={Logo}
										alt="allSpeak"
									/></Link>									
                  <Welcome />
									<SignUpForm />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default SignUp;
