// Dependencies;
// =============:
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
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

// Validation Schema;
// =============:
const SignupSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	confirmPassword: Yup.string()
		.required("Required")
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	city: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	state: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	zip: Yup.string()
		.min(2, "Too Short!")
		.max(16, "Too Long!")
		.required("Required")
});

function SignUpForm() {
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				city: "",
				state: "",
				zip: ""
			}}
			validationSchema={SignupSchema}
			onSubmit={values => {
				axios
					.post("/auth/signup", values)
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error);
					});
				console.log(values);
			}}
		>
			{formik => {
				const {
					values,
					errors,
					touched,
					isValid,
					handleBlur,
					handleChange,
					handleSubmit
				} = formik;
				return (
					<Container>
						<Row>
							<Card style={{border:"none"}}>
								<Card.Body >
									{/* FORMIK */}

									<Form onSubmit={handleSubmit}>
										<Form.Row>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												{/* <Form.Label id="signUpLabel">First name</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.firstName}
													name="firstName"
													placeholder="First name"
													type="text"
													className={`${
														touched.firstName && errors.firstName
															? "is-invalid"
															: ""
													} ${
														touched.firstName && errors.firstName === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													Looks good!
												</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.firstName}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom02"
											>
												{/* <Form.Label id="signUpLabel">Last name</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.lastName}
													name="lastName"
													placeholder="Last name"
													type="text"
													className={`${
														touched.lastName && errors.lastName
															? "is-invalid"
															: ""
													} ${
														touched.lastName && errors.lastName === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>Nice!</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.lastName}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustomUsername"
											>
												{/* <Form.Label id="signUpLabel">Username</Form.Label> */}
												<InputGroup>
													<InputGroup.Prepend>
														<InputGroup.Text id="inputGroupPrepend" 	
														style={{
															border:"1px solid black",
															backgroundColor: "black",
															color: "white"
															}}>
															@
														</InputGroup.Text>
													</InputGroup.Prepend>
													<Form.Control
														style={{border:"1px solid black"}}
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.username}
														name="username"
														placeholder="Username"
														type="text"
														aria-describedby={errors.email}
														className={`${
															touched.username && errors.username
																? "is-invalid"
																: ""
														} ${
															touched.username && errors.username === undefined
																? "is-valid"
																: ""
														}`}
													/>
													<Form.Control.Feedback>
														Brilliant!
													</Form.Control.Feedback>
													<Form.Control.Feedback type="invalid">
														{errors.username}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
										</Form.Row>
										<Form.Row style={{marginTop: "15px"}}>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												{/* <Form.Label id="signUpLabel">Email</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
													name="email"
													placeholder="Email"
													type="email"
													className={`${
														touched.email && errors.email ? "is-invalid" : ""
													} ${
														touched.email && errors.email === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													Excellent!
												</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.email}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												{/* <Form.Label id="signUpLabel">Password</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.password}
													name="password"
													placeholder="Password"
													type="password"
													className={`${
														touched.password && errors.password
															? "is-invalid"
															: ""
													} ${
														touched.password && errors.password === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>Clever!</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.password}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												{/* <Form.Label>Confirm Password</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.confirmPassword}
													name="confirmPassword"
													placeholder="Confirm Password"
													type="password"
													className={`${
														touched.confirmPassword && errors.confirmPassword
															? "is-invalid"
															: ""
													} ${
														touched.confirmPassword &&
														errors.confirmPassword === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													Brilliant!
												</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.confirmPassword}
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Form.Row style={{marginTop: "15px"}}>
											<Form.Group
												as={Col}
												md="6"
												controlId="validationCustom03"
											>
												{/* <Form.Label id="signUpLabel">City</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.city}
													name="city"
													placeholder="City"
													type="text"
													className={`${
														touched.city && errors.city ? "is-invalid" : ""
													} ${
														touched.city && errors.city === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>3...</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.city}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="3"
												controlId="validationCustom04"
											>
												{/* <Form.Label id="signUpLabel">State</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.state}
													name="state"
													placeholder="State"
													type="text"
													className={`${
														touched.state && errors.state ? "is-invalid" : ""
													} ${
														touched.state && errors.state === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>2..</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.state}
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												as={Col}
												md="3"
												controlId="validationCustom05"
											>
												{/* <Form.Label id="signUpLabel">Zip</Form.Label> */}
												<Form.Control
													style={{border:"1px solid black"}}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.zip}
													name="zip"
													placeholder="Zip"
													type="text"
													className={`${
														touched.zip && errors.zip ? "is-invalid" : ""
													} ${
														touched.zip && errors.zip === undefined
															? "is-valid"
															: ""
													}`}
												/>
												<Form.Control.Feedback>1.</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.zip}
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Button variant="dark" type="submit" style={{marginTop: "15px"}}>
											{touched && Object.keys(errors).length === 0
												? "allSpeak<"
												: "Sign Up"}
										</Button>
									</Form>
								</Card.Body>
							</Card>
						</Row>
					</Container>
				);
			}}
		</Formik>
	);
}
export default SignUpForm;
