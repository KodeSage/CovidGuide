/** @format */
import React, { useState, lazy } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Signin = lazy(() => import("./pages/signin"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy( () => import( "./components/404PageComponent/NotFound" ) );
const Dashboard = lazy( () => import( "./pages/dashboard" ) );
const Test = lazy( () => import( "./pages/test" ) );
const Statistics = lazy( () => import( "./pages/statistics" ) );
const Profile = lazy( () => import( "./pages/profile" ) );
const PrivateRoute = lazy( () => import( "./layouts/PrivateRoute" ) );

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
			<Route path="/dashboard" element={<PrivateRoute />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
			<Route path="/test" element={<PrivateRoute />}>
				<Route path="/test" element={<Test />} />
			</Route>
			<Route path="/statistics" element={<PrivateRoute />}>
				<Route path="/statistics" element={<Statistics />} />
			</Route>
			<Route path="/profile" element={<PrivateRoute />}>
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
