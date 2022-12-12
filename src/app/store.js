/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reduxSlices/authSlices";
import dashboardReducer from "../reduxSlices/dashboardSlices";
import userReducer from "../reduxSlices/userSlices";
export const store = configureStore({
	reducer: {
		userdetails: authReducer,
		dashboardslices: dashboardReducer,
		userslices: userReducer,
	},
});
