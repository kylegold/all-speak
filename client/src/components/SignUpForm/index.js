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

	// SUBMIT;
	// =============:
	const handleSubmit = event => {
		event.preventDefault();
		setValidated(true);
		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			setSubmitting(true);
			axios
				.post("/api/register", formData)
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
									<Form.Label>First name</Form.Label>
									<Form.Control
										name="firstName"
										required
										onChange={handleChange}
										// value={formData.firstName}
										type="text"
										placeholder="First name"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom02">
									<Form.Label>Last name</Form.Label>
									<Form.Control
										name="lastName"
										required
										onChange={handleChange}
										// value={formData.lastName}
										type="text"
										placeholder="Last name"
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group
									as={Col}
									md="4"
									controlId="validationCustomUsername"
								>
									<Form.Label>Username</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend">
												@
											</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											name="username"
											required
											onChange={handleChange}
											// value={formData.username}
											type="text"
											placeholder="Username"
											aria-describedby="inputGroupPrepend"
										/>
										<Form.Control.Feedback type="invalid">
											Please choose a username.
										</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} md="6" controlId="validationCustom03">
									<Form.Label>City</Form.Label>
									<Form.Control
										name="city"
										required
										onChange={handleChange}
										// value={formData.city}
										type="text"
										placeholder="City"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="validationCustom04">
									<Form.Label>State</Form.Label>
									<Form.Control
										name="state"
										required
										onChange={handleChange}
										// value={formData.state}
										type="text"
										placeholder="State"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid state.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="validationCustom05">
									<Form.Label>Zip</Form.Label>
									<Form.Control
										name="zip"
										required
										onChange={handleChange}
										// value={formData.zip}
										type="text"
										placeholder="Zip"
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid zip.
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Form.Group>
								<Form.Check
									required
									label="Agree to terms and conditions"
									feedback="You must agree before submitting."
								/>
							</Form.Group>
							<Button type="submit">Submit form</Button>
							{submitting && <div>Working...</div>}
						</Form>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default SignUpForm;
