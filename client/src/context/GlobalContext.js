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
			console.log(action, action.apiToken);
			return {
				...state,
				username: action.username,
				email: action.email,
        apiToken: action.apiToken,
        lang: "",
        _id: action._id
			};
		case "LOGOUT":
			console.log(action);
			return {
				...state,
				email: "",
				apiToken: ""
			};
		default:
			return state;
	}
};

const GlobalProvider = props => {
	const [state, dispatch] = useReducer(reducer, {
		username: "",
		email: "",
		apiToken: "",
    lang: "",
    _id: ""
	});

	return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
	return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
