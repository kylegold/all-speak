// Dependencies;
// =============:
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import ChatApp from "./pages/ChatApp/index.js";

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
					<Route exact path="/login" component={ChatApp} />
					<Route exact path="/chatroom" component={ChatApp} />
					<Route exact path="/chooselanguage" component={ChooseLanguage} />
					<Route exact path="/preferences" component={Preferences} />
				</Router>
			) : (
				<Router>
					<Route exact path="/" component={Landing} />
					<Route path="/landing" component={Landing} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</Router>
			)}
		</div>
	);
}

export default App;

// ======== JORDAN'S CODE TO INTEGRATE ========

// CREATE / IMPORT useState && AXIOS .GET TO PULL NEW MESSAGES AND SYNC'D MESSAGES && useEffect HOOK FOR BINDING AND SUBSCRIBING TO PUSHER CHANNEL "messages". THIS RUNS A PIECE OF CODE WHEN THE APP LOADS. THE EVENT IS THEN BINDED AND SUBSCRIBES TO THE PUSHER CHANNEL. THIS ALL NEEDS TO BE NESTED WITHIN THE function App():

	// const [messages, setMessages] = useState([]);

	// useEffect(() => {
	// 	axios.get("/messages/sync").then(response => {
	// 		setMessages(response.data)
	// 	})
	// }, [])

	// useEffect(() => {
  //   const pusher = new Pusher('b238ba50a5658ab9e0fe', {
  //     cluster: 'us2'
  //   });

  //   const channel = pusher.subscribe('messages');
  //   channel.bind('inserted', function(newMessage) {
  //     setMessages([...messages, newMessage])
	// 	});
	// 	// we need a cleanup function so a new listener isn't created every single time a message is sent. the objective is to only have one subscriber when messages change.
	// 	return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
	// 	}
	// 	// messages needs to be added as dependency bc we're depending on it with the spread operator above
	// }, [messages])

	// console.log(messages);

	//  // Prop drilling - messages will need to be added to <Chat> as so:
	// <Chat messages={messages}>

// =======================================

// IN MY FILES, I CREATED AN AXIOS.JS PAGE AND EXPORTED THIS AS A VARIABLE TITLED "INSTANCE":

	// const instance = axios.create({
	// 	baseURL: "http://localhost:4001"
	// })

// =======================================




	
