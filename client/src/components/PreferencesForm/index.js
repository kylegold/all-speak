import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AvatarCropper from "../AvatarCropper/index.jsx";
import ChangeUsername from "../ChangeUsername";
import ChangeLanguage from "../ChangeLanguage";
import "./style.css";

// import { Avatar } from "@material-ui/core";

const PreferencesForm = () => {
	return (
		<>
			<h1>Preferences</h1>
			<Row>
				<Col className="m-auto">
					{/* avatar cropping module */}
					<AvatarCropper className="m-a" />
				</Col>
			</Row>
			<Row>
				<Col>
					<ChangeLanguage carousel={false} />
				</Col>
			</Row>

			<Row>
				<Col>
					<ChangeUsername />
				</Col>
			</Row>
			<Row>
				<Col>
					<Link to="/chatroom">
						<Button variant="dark" type="submit" className="mt-2">
							Submit
						</Button>
					</Link>
				</Col>
			</Row>
		</>
	);
};

export default PreferencesForm;
