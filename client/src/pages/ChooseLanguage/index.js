// Dependencies;
// =============:
import React from "react";
import ChangeLanguage from "../../components/ChangeLanguage";
import { Link } from "react-router-dom";

// Style;
// =============:
import { Container, Row, Col, Button, Card } from "react-bootstrap";
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

const ChooseLanguage = () => {
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
				style={{
					width: "100vw",
					height: "100vh",
					backgroundImage: `url(${background})`,
					backgroundSize: "cover"
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
											margin: "0px auto 20px auto"
										}}
										src={Logo}
										alt="allSpeak"
									/>
									<div style={{ width: "100%" }}>
										<ChangeLanguage carousel={true} />
									</div>
									<Link to="/">
										{" "}
										<Button type="submit" variant="dark" id="button">
											---&gt;
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default ChooseLanguage;
