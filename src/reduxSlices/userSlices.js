/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	covidresults: [],
};

export const userSlices = createSlice({
	name: "dashboardSlice",
	initialState,
	reducers: {
        upDateResults: ( state, action ) =>
        {
            // state.covidresults = action.payload;
			state.covidresults.push(action.payload);
        },
        getDataResults: ( state, action ) =>
        {
            state.covidresults = action.payload;
        }
	},
});

export const selectUserResults = (state) => state.userslices;
export const { upDateResults, getDataResults } = userSlices.actions;
export default userSlices.reducer;
