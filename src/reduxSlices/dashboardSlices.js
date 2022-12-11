/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	responsive_sidebar: false,
	page: 0,
	covidcases: {
		cough: "",
		cold: "",
		diarrhea: "",
		sorethroat: "",
		bodyaches: "",
		headache: "",
		fever: "",
		difficulty_breathing: "",
		fatigue: "",
		traveled: "",
		history_travel: "",
		direct_contact: "",
	},
};

export const dashboardSlices = createSlice({
	name: "dashboardSlice",
	initialState,
	reducers: {
		ResponsiveSidebar: (state, action) => {
			state.responsive_sidebar = action.payload;
		},
		HasCough: (state, action) => {
			state.page += 1;
			state.covidcases.cough = action.payload;
		},
		HasCold: (state, action) => {
			state.page += 1;
			state.covidcases.cold = action.payload;
		},
		HasDiarrhea: (state, action) => {
			state.page += 1;
			state.covidcases.diarrhea = action.payload;
		},
		HasSorethroat: (state, action) => {
			state.page += 1;
			state.covidcases.sorethroat = action.payload;
		},
		HasBodyaches: (state, action) => {
			state.page += 1;
			state.covidcases.bodyaches = action.payload;
		},
		HasHeadache: (state, action) => {
			state.page += 1;
			state.covidcases.headache = action.payload;
		},
		HasFever: (state, action) => {
			state.page += 1;
			state.covidcases.fever = action.payload;
		},
		HasDifficulty_breathing: (state, action) => {
			state.page += 1;
			state.covidcases.difficulty_breathing = action.payload;
		},
		HasFatigue: (state, action) => {
			state.page += 1;
			state.covidcases.fatigue = action.payload;
		},
		HasTraveled: (state, action) => {
			state.page += 1;
			state.covidcases.traveled = action.payload;
		},
		HasHistory_travel: (state, action) => {
			state.page += 1;
			state.covidcases.history_travel = action.payload;
		},
		HasDirect_contact: (state, action) => {
			state.page += 1;
			state.covidcases.direct_contact = action.payload;
		},
	},
});

export const selectDashboardNav = (state) => state.dashboardslices;

export const {
	ResponsiveSidebar,
	HasCough,
	HasCold,
	HasDiarrhea,
	HasSorethroat,
	HasBodyaches,
	HasHeadache,
	HasFever,
	HasDifficulty_breathing,
	HasFatigue,
	HasTraveled,
	HasHistory_travel,
	HasDirect_contact,
} = dashboardSlices.actions;

export default dashboardSlices.reducer;
