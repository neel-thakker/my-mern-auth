import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
