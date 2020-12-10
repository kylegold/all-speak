// Dependencies;
// =============:
import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Style;
// =============:
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// Web Vitals;
// =============:
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
