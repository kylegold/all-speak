import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../../components/SignUpForm";
import Welcome from "../../components/Welcome";
import Background from "../../assets/images/adrien-converse-3dUpL1h97CQ-unsplash.jpg";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
<<<<<<< HEAD
import Login from "../../components/LoginLogo";
=======
>>>>>>> 9947b1eae8dff8dfab31ea98b7043ee59292549a

const SignUp = () => {
	return (
		<>
			<div
				style={{
					position:"absolute",
					width: "100vw",
					height: "120%",
					backgroundImage: `url(${Background})`,
					backgroundSize: "cover"
				}}
			>
				<Container id="container">
					<Row>
						<Col>
							<Card className="text-center" id="card">
								<Card.Body>
<<<<<<< HEAD
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
                  					<Login />
=======
									<Link to="/">
										<img
											style={{
												width: "50%",
												minWidth: "200px",
												display: "block",
												margin: "0px auto 20px auto"
											}}
											src={Logo}
											alt="allSpeak"
										/>
									</Link>
									<Welcome />
>>>>>>> 9947b1eae8dff8dfab31ea98b7043ee59292549a
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
