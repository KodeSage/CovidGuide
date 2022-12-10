/** @format */
import React, { useState, lazy } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Signin = lazy(() => import("./pages/signin"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./components/404PageComponent/NotFound"));

function App() {
	const [isOpen, setOpen] = useState(false);
	const toogle = () => {
		setOpen(!isOpen);
	};

	return (
		<Routes>
			<Route
				path="/"
				index
				element={<LandingPage isOpen={isOpen} toogle={toogle} />}
			/>
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />

			{/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
