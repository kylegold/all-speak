import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../../components/SignUpForm";
import Welcome from "../../components/Welcome";
import Logo from "../../assets//logo/png/all_speak_v2_Logo_Black.png";
import {
	BG1,
	BG2,
	BG3,
	BG4,
	BG5,
	BG6,
	BG7,
	BG8,
	BG9,
	BG10,
	BG11,
	BG12,
	BG13,
	BG14,
	BG15,
	BG16,
	BG17,
	BG18,
	BG19,
	BG20,
	BG21,
	BG22,
	BG23,
	BG24,
	BG25,
	BG26,
	BG27,
	BG28,
	BG29,
	BG30
} from "../../assets/bkg_imgs";

// Animation Dependencies;
// =============:
import {
	bounce,
	bounceInDown,
	fadeInDown,
	fadeInUp,
	shake
} from "react-animations";
import { StyleSheet, css } from "aphrodite";

// Animation Styles;
// =============:
const styles = StyleSheet.create({
	bounceIn: {
		animationName: bounceInDown,
		animationDuration: "0.8s"
	},

	fadeIn: {
		animationName: fadeInDown,
		animationDuration: "1.4s"
	},

	warning: {
		animationName: shake,
		animationDuration: "1s"
	}
});

const SignUp = () => {
	const backgroundImages = [
		BG1,
		BG2,
		BG3,
		BG4,
		BG5,
		BG6,
		BG7,
		BG8,
		BG9,
		BG10,
		BG11,
		BG12,
		BG13,
		BG14,
		BG15,
		BG16,
		BG17,
		BG18,
		BG19,
		BG20,
		BG21,
		BG22,
		BG23,
		BG24,
		BG25,
		BG26,
		BG27,
		BG28,
		BG29,
		BG30
	];
	const background =
		backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

	return (
		<>
			<div
				id="signUpContainer"
				style={{
					position: "absolute",
					width: "100vw",
					height: "100vh",
					backgroundImage: `url(${background})`,
					backgroundSize: "cover"
				}}
			>
				<Container id="container">
					<Row className={css(styles.bounceIn)}>
						<Col>
							<Card className="text-center" id="card">
								<Card.Body>
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
