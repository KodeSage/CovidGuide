/** @format */
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import ThemedSuspense from "./components/ThemedSuspense/ThemedSuspense";
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<ToastContainer />
			<Suspense fallback={ <ThemedSuspense /> }>
				<Router>
					<App />
				</Router>
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
