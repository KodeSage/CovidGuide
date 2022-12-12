/** @format */

import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { autoLoginUser } from "../services/authServices";
import { getTransactionsFromDB } from "../services/userServices";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
	const userid = JSON.parse(localStorage.getItem("userID"));
	const dispatch = useDispatch();

	useEffect(() => {
		const isUserLoggedIn = async () => {
			if (userid) {
				await autoLoginUser(userid, dispatch);
				await getTransactionsFromDB(userid, dispatch);
			}
		};
		isUserLoggedIn();
	}, [userid]);

	return userid ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
