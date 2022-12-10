/** @format */

import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { autoLoginUser } from "../services/authServices";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
	const userid = JSON.parse(localStorage.getItem("userID"));
	const dispatch = useDispatch();

	useEffect(() => {
		const isUserLoggedIn = async () => {
			if (userid) {
				await autoLoginUser(userid, dispatch);
			}
        };
        isUserLoggedIn();
	}, []);

	return userid ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
