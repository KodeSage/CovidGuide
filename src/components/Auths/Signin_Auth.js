/** @format */

import React, { useState, useCallback } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthStylesContainer } from "./Auth.styles";
import { loginUser } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Signin_Auth = () =>
{
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [ showPassword ] );
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	} );
	const handleFormSubmission = async (e) => {
		e.preventDefault();
		// e.stopPropagation();
		const data = userData;
		await loginUser(data, navigate, dispatch);
	};
	return (
		<AuthStylesContainer>
			<div className="container">
				<h2>COVID GUIDE</h2>

				<form onSubmit={handleFormSubmission}>
					<div className="form_container">
						<div className="form_container__inputs">
							<div className="form_container_header">
								<h2>Login to Covid Guide</h2>
								<p>
									Login to your Covidguide Account to access endless information
									and statistics of covid19
								</p>
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
									required
									maxLength={32}
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
								Log in
							</button>
							{/* <p className="continue">Continue </p>
							<button type="button" className="google">
								<img src={google} alt="google_image" />
								Signin with Google
							</button> */}
							<p className="p-account">
								Dont have an account?
								<Link to="/signup">
									<span> Signup here</span>
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</AuthStylesContainer>
	);
};

export default Signin_Auth;
