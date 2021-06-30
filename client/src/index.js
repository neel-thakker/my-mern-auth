import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { combineReducers } from "redux";
import authReducer from "./reducers/authReducers";
import errorReducer from "./reducers/errorReducers";

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
