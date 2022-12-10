/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reduxSlices/authSlices";

export const store = configureStore({
	reducer: {
		userdetails: authReducer,
	},
});
