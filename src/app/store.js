/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reduxSlices/authSlices";
import dashboardReducer from "../reduxSlices/dashboardSlices";

export const store = configureStore({
	reducer: {
		userdetails: authReducer,
		dashboardslices: dashboardReducer,
	},
});
