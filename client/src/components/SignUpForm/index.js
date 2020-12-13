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

// Animation Dependencies;
// =============:
import {
	fadeInLeft,
	fadeInRight,
	fadeInUp,
	headShake,
	tada,
	pulse
} from "react-animations";
import { StyleSheet, css } from "aphrodite";

// Animation Styles;
// =============:
const styles = StyleSheet.create({
	slideLeft_1: {
		animationDelay: "0.7s",
		"animation-fill-mode": "both",
		animationName: fadeInLeft,
		animationDuration: "0.7s"
	},

	slideRight_2: {
		animationDelay: "1.5s",
		"animation-fill-mode": "both",
		animationName: fadeInRight,
		animationDuration: "0.7s"
	},

	slideLeft_3: {
		animationDelay: "2s",
		"animation-fill-mode": "both",
		animationName: fadeInLeft,
		animationDuration: "0.7s"
	},

	slideUp: {
		animationDelay: "3s",
		"animation-fill-mode": "both",
		animationName: fadeInUp,
		animationDuration: "0.7s"
	},

	complete: {
		animationName: tada,
		animationDuration: "2s"
	},

	warning: {
		borderColor: "red",
		animationName: headShake,
		animationDuration: "1s"
	},

	success: {
		borderColor: "green",
		animationName: pulse,
		animationDuration: "0.5s"
	}
});

// Validation Schema;
// =============:
{
	/* // sO mANY dRILLZ - DRILL; */
}
{
	/* // =============: */
}
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
				localStorage.setItem("username", JSON.stringify(values.username));
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
							<Card style={{ border: "none" }}>
								<Card.Body>
									{/* FORMIK */}

									<Form onSubmit={handleSubmit}>
										<Form.Row className={css(styles.slideLeft_1)}>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.firstName}
													name="firstName"
													placeholder="First name"
													type="text"
													className={`${
														touched.firstName && errors.firstName
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.firstName && errors.firstName === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													{/* // LOOKS GOOD! - DRILL; */}
													{/* // =============: */}
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
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.lastName}
													name="lastName"
													placeholder="Last name"
													type="text"
													className={`${
														touched.lastName && errors.lastName
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.lastName && errors.lastName === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												{/* // NICE - DRILL; */}
												{/* // =============: */}
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
														<InputGroup.Text
															id="inputGroupPrepend"
															style={{
																border: "1px solid black",
																backgroundColor: "black",
																color: "white"
															}}
														>
															@
														</InputGroup.Text>
													</InputGroup.Prepend>
													<Form.Control
														style={{ border: "1px solid black" }}
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.username}
														name="username"
														placeholder="Username"
														type="text"
														aria-describedby={errors.email}
														className={`${
															touched.username && errors.username
																? `is-invalid ${css(styles.warning)}`
																: ""
														} ${
															touched.username && errors.username === undefined
																? `is-valid ${css(styles.success)}`
																: ""
														}`}
													/>
													<Form.Control.Feedback>
														{/* // Brilliant - DRILL; */}
														{/* // =============: */}
														Brilliant!
													</Form.Control.Feedback>
													<Form.Control.Feedback type="invalid">
														{errors.username}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
										</Form.Row>
										<Form.Row
											className={css(styles.slideRight_2)}
											style={{ marginTop: "15px" }}
										>
											<Form.Group
												as={Col}
												md="4"
												controlId="validationCustom01"
											>
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
													name="email"
													placeholder="Email"
													type="email"
													className={`${
														touched.email && errors.email
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.email && errors.email === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													{/* // EXCELLENT - DRILL; */}
													{/* // =============: */}
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
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.password}
													name="password"
													placeholder="Password"
													type="password"
													className={`${
														touched.password && errors.password
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.password && errors.password === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												{/* // CLEVER - DRILL; */}
												{/* // =============: */}
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
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.confirmPassword}
													name="confirmPassword"
													placeholder="Confirm Password"
													type="password"
													className={`${
														touched.confirmPassword && errors.confirmPassword
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.confirmPassword &&
														errors.confirmPassword === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												<Form.Control.Feedback>
													{/* Signup; - DRILL */}
													{/* =============: */}
													Brilliant!
												</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.confirmPassword}
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Form.Row
											className={css(styles.slideLeft_3)}
											style={{ marginTop: "15px" }}
										>
											<Form.Group
												as={Col}
												md="6"
												controlId="validationCustom03"
											>
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.city}
													name="city"
													placeholder="City"
													type="text"
													className={`${
														touched.city && errors.city
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.city && errors.city === undefined
															? `is-valid ${css(styles.success)}`
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
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.state}
													name="state"
													placeholder="State"
													type="text"
													className={`${
														touched.state && errors.state
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.state && errors.state === undefined
															? `is-valid ${css(styles.success)}`
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
												<Form.Control
													style={{ border: "1px solid black" }}
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.zip}
													name="zip"
													placeholder="Zip"
													type="text"
													className={`${
														touched.zip && errors.zip
															? `is-invalid ${css(styles.warning)}`
															: ""
													} ${
														touched.zip && errors.zip === undefined
															? `is-valid ${css(styles.success)}`
															: ""
													}`}
												/>
												<Form.Control.Feedback>1.</Form.Control.Feedback>
												<Form.Control.Feedback type="invalid">
													{errors.zip}
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>
										<Button
											className={
												touched && Object.keys(errors).length === 0
													? css(styles.complete)
													: css(styles.slideUp)
											}
											variant="dark"
											type="submit"
											style={{ marginTop: "15px" }}
										>
											{touched && Object.keys(errors).length === 0
												? "allSpeak<"
												: // Signup; -  DRILL;
												  // =============:
												  "Sign Up"}
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
