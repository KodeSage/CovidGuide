/** @format */

import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import "./Profile.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, AuthenticateUser } from "../../reduxSlices/authSlices";

const Profiles = () =>
{
    const auth = getAuth();
    const dispatch = useDispatch();
    const { firstname, username, lastname, email, userCountry } =
        useSelector( selectUser );
    
    	const [userData, setUserData] = useState({
				firstnames: firstname,
				lastnames: lastname,
			});

    // const UpdateProfile = async (e) =>
    // {
    //     e.preventDefault();
    //     try
    //     {
    //         const user = auth.currentUser;
    //         const { firstnames, lastnames } = userData;
    //         await updateProfile(user, {
	// 						firstname: firstnames,
	// 						lastname: lastnames,
    //         } );
    //         toast.success("User Profile Updated Successfully")
    //     }
    //     catch (error)
    //     {
    //     toast.error(error.message);
    //     }
    
    // }
    
	return (
		<div>
			<form>
				<div className="form_container">
					<div className="form_container__inputs">
						<h4>UserName</h4>
						<div className="input_box">
							<input
								type="text"
								placeholder="Country"
								value={username}
								disabled
							/>
						</div>
						<h4>Email</h4>
						<div className="input_box">
							<input type="email" placeholder="Email" value={email} disabled />
						</div>
						<h4>FirstName</h4>
						<div className="input_box">
							<input
								type="text"
								placeholder="FirstName"
								value={firstname}
								// onChange={(e) =>
								// 	setUserData({
								// 		...userData,
								// 		firstnames: e.target.value,
								// 	})
								// }
								disabled
							/>
						</div>
						<h4>LastName</h4>
						<div className="input_box">
							<input
								type="text"
								placeholder="LastName"
								value={lastname}
								// onChange={(e) =>
								// 	setUserData({
								// 		...userData,
								// 		lastnames: e.target.value,
								// 	})
								// }
								disabled
							/>
						</div>
						<h4>Country</h4>
						<div className="input_box">
							<input
								type="text"
								placeholder="Country"
								value={userCountry}
								disabled
							/>
						</div>

						{/* <button type="submit" className="button">
							Update Profile
						</button> */}
					</div>
				</div>
			</form>
		</div>
	);
};

export default Profiles;
