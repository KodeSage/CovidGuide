/** @format */

import React, { useState, useCallback } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthStylesContainer } from "./Auth.styles";
import CountryJson from "../../utilis/CountryJson";
import { registerUser } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
const Signup_Auth = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);
	const [userData, setUserData] = useState({
		username: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		userCountry: "",
	});

	const handleFormSubmission = async (e) => {
		e.preventDefault();
		// e.stopPropagation();
		const data = userData;
		await registerUser(data, navigate);
	};
	return (
		<AuthStylesContainer>
			<div className="container">
				<h2>COVID GUIDE</h2>

				<form onSubmit={handleFormSubmission}>
					<div className="form_container">
						<div className="form_container__inputs">
							<div className="form_container_header">
								<h2>Signup on Covid Guide</h2>
								<p>
									Signup on Covidguide Account to access endless information and
									statistics of covid19
								</p>
							</div>
							<h4>UserName</h4>
							<div className="input_box">
								<input
									type="text"
									placeholder="UserName"
									value={userData.username}
									onChange={(e) =>
										setUserData({
											...userData,
											username: e.target.value,
										})
									}
									required
								/>
							</div>
							<h4>First Name</h4>
							<div className="input_box">
								<input
									type="text"
									placeholder="First Name"
									value={userData.firstname}
									onChange={(e) =>
										setUserData({
											...userData,
											firstname: e.target.value,
										})
									}
									required
								/>
							</div>
							<h4>Last Name</h4>
							<div className="input_box">
								<input
									type="text"
									placeholder="LastName"
									value={userData.lastname}
									onChange={(e) =>
										setUserData({
											...userData,
											lastname: e.target.value,
										})
									}
									required
								/>
							</div>
							<h4>Country</h4>
							<div className="select-country">
								<select
									required
									onChange={(e) =>
										setUserData({
											...userData,
											userCountry: e.target.value,
										})
									}>
									<option value="">Select Country</option>
									{CountryJson.map((options) => (
										<option key={options.code} value={options.name}>
											{options.name}
										</option>
									))}
								</select>
							</div>
							<h4>Email</h4>
							<div className="input_box">
								<input
									type="email"
									placeholder="Email"
									value={userData.email}
									onChange={(e) =>
										setUserData({
											...userData,
											email: e.target.value,
										})
									}
									required
								/>
							</div>
							<h4>Password</h4>
							<div className="input_box input_password">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									value={userData.password}
									onChange={(e) =>
										setUserData({
											...userData,
											password: e.target.value,
										})
									}
									maxLength={32}
									required
								/>
								<div onClick={togglePassword}>
									{showPassword ? (
										<AiOutlineEye size={17} className="svg" />
									) : (
										<AiOutlineEyeInvisible size={17} className="" />
									)}
								</div>
							</div>
							{/* <h3>Forget password?</h3> */}

							<button type="submit" className="button">
								Sign Up
							</button>
							<p className="p-account">
								Dont have an account?
								<Link to="/signin">
									<span> Signin here</span>
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</AuthStylesContainer>
	);
};

export default Signup_Auth;
