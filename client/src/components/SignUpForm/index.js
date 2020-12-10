// Dependencies;
// =============:
import React, { useReducer, useState } from "react";
import axios from "axios";

// Style;
// =============:
import {
	Button,
	Form,
	InputGroup,
	Col,
	Card,
	Container,
	Row
} from "react-bootstrap";
import "./style.css";

// import { useGlobalContext } from "../../context/GlobalContext";
// import { set } from "mongoose";

// Reducer;
// =============:
const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	};
};

// Export;
// =============:
function SignUpForm() {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	const [validated, setValidated] = useState(false);

	// CONFIRM PW;
	// =============:
	const confirmPW = event => {
		event.preventDefault();
		event.target.classList.toggle(
			"is-valid",
			formData.confirmPassword === formData.password
		);
		event.target.classList.toggle(
			"is-invalid",
			formData.confirmPassword !== formData.password
		);
	};

	// SUBMIT;
	// =============:
	const handleSubmit = event => {
		event.preventDefault();
		setValidated(true);
		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			setSubmitting(true);
			axios
				.post("/auth/signup", formData)
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});

			setTimeout(() => {
				setSubmitting(false);
			}, 3000);
			console.log(formData);
		}
	};

	// ON-CHANGE;
	// =============:
	const handleChange = event => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		});
	};

	return (
		<Container>
			<Row>
				{submitting && (
					<div>
						You are submitting the following:
						<ul>
							{Object.entries(formData).map(([name, value]) => (
								<li key={name}>
									<strong>{name}</strong>: {value.toString()}
								</li>
							))}
						</ul>
					</div>
				)}
				<Card>
					<Card.Body>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Form.Row>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<Form.Label id="signUpLabel">First name</Form.Label>
									<Form.Control
										required
										name="firstName"
										placeholder="First name"
										onChange={handleChange}
										type="text"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom02">
									<Form.Label id="signUpLabel">Last name</Form.Label>
									<Form.Control
										required
										name="lastName"
										placeholder="Last name"
										onChange={handleChange}
										type="text"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group
									as={Col}
									md="4"
									controlId="validationCustomUsername"
								>
									<Form.Label id="signUpLabel">Username</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend">
												@
											</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											required
											name="username"
											placeholder="Username"
											onChange={handleChange}
											type="text"
											aria-describedby="inputGroupPrepend"
										/>
										<Form.Control.Feedback type="invalid">
											Please choose a username.
										</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<Form.Label id="signUpLabel">Email</Form.Label>
									<Form.Control
										required
										name="email"
										placeholder="Email"
										onChange={handleChange}
										type="email"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<Form.Label id="signUpLabel">Password</Form.Label>
									<Form.Control
										required
										name="password"
										placeholder="Password"
										onChange={handleChange}
										type="password"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										required
										name="confirmPassword"
										placeholder="Confirm Password"
										onChange={confirmPW}
										type="password"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} md="6" controlId="validationCustom03">
									<Form.Label id="signUpLabel">City</Form.Label>
									<Form.Control
										required
										name="city"
										placeholder="City"
										onChange={handleChange}
										type="text"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="validationCustom04">
									<Form.Label id="signUpLabel">State</Form.Label>
									<Form.Control
										required
										name="state"
										placeholder="State"
										onChange={handleChange}
										type="text"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid state.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="validationCustom05">
									<Form.Label id="signUpLabel">Zip</Form.Label>
									<Form.Control
										required
										name="zip"
										placeholder="Zip"
										onChange={handleChange}
										type="text"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid zip.
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Button variant="dark" type="submit">Sign Up</Button>
							{submitting && <div>Working...</div>}
						</Form>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default SignUpForm;
