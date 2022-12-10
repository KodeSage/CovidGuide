/** @format */

import { createSlice } from "@reduxjs/toolkit";

let userID;
if (typeof window !== "undefined") {
	userID =
		localStorage.getItem("userID") !== null
			? JSON.parse(localStorage.getItem("userID") || "{}")
			: null;
}
const initialState = {
    currentuserID: userID,
	username: "",
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	userCountry: "",
};

export const authSlices = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
        AuthenticateUser: ( state, action ) =>
        {  
            localStorage.setItem("userID", JSON.stringify(action.payload.userID));
            state.currentuserID = action.payload.userID;
            state.username = action.payload.username;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.userCountry = action.payload.userCountry;
        },
        LogoutUser: ( state ) =>
        {
            localStorage.removeItem( "userID" );
            state.currentuserID = null;
            state.username = "";
            state.firstname = "";
            state.lastname = "";
            state.email = "";
            state.password = "";
            state.userCountry = "";
            
        }	
	},
});

export const selectUser = ( state ) => state.userdetails;


export const { AuthenticateUser, LogoutUser } = authSlices.actions;

export default authSlices.reducer;