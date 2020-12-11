// Dependencies;
// =============:
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useGlobalContext } from "./context/GlobalContext";
import axios from "axios";

// Pages;
// =============:
import Login from "./pages/Login/index.js";
import SignUp from "./pages/SignUp/index.js";
import Landing from "./pages/Landing/index.js";
import ChooseLanguage from "./pages/ChooseLanguage/index.js";
import Preferences from "./pages/Preferences/index.js";

// Components;
// =============:
import ChatApp from "./components/ChatApp/index.js";

// Style;
// =============:
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    checkLogin();
    // loadMessage();
  }, [state.apiToken]);

	const checkLogin = () => {
		// get the user from local storage
		const user = JSON.parse(localStorage.getItem("user"));
		// is there a user?
		if (user) {
			// put that user in the state
			dispatch({
				type: "LOGIN",
				email: user.email,
				apiToken: user.token
			});
		}
	};

  // const loadMessage = () => {
  //   axios
  //     .get("/api/welcome", {
  //       headers: {
  //         Authorization: `Bearer ${state.apiToken}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       const { message } = data;
  //       dispatch({ type: "GET_MESSAGE", message });
  //     });
  // };

	const logout = () => {
		// remove the user from local storage
		localStorage.removeItem("user");
		// remove the user from the state
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="App">
			{/* <h1>Let's build AllSpeak</h1> */}

			{state.apiToken ? (
				<Router>
					<Route exact path="/" component={ChatApp} />
					<Route exact path="/chatroom" component={ChatApp} />
					<Route exact path="/chooselanguage" component={ChooseLanguage} />
					<Route exact path="/preferences" component={Preferences} />
				</Router>
			) : (
				<Router>
					<Route exact path="/" component={Landing} />
					<Route exact path="/chatroom" component={ChatApp} />
					<Route path="/landing" component={Landing} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</Router>
			)}
		</div>
	);
}

export default App;
