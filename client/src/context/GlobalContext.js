import React, { useReducer, createContext, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
	switch (action.type) {
		case "GET_MESSAGE":
			return {
				...state,
				message: action.message
			};
		case "LOGIN":
			return {
				...state,
				username: action.username,
				email: action.email,
				apiToken: action.apiToken,
				lang: ""
			};
		case "LOGOUT":
			console.log(action);
			return {
				...state,
				email: "",
				apiToken: ""
			};
		case "SELECT_CHAT":
			return {
				...state,
				chatId: action.chatId
			};
		default:
			return state;
	}
};

const GlobalProvider = props => {
	const [state, dispatch] = useReducer(reducer, {
		username: "",
		email: "",
		lang: "",
		apiToken: ""
	});

	return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
	return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
