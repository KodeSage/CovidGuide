/** @format */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	responsive_sidebar: false,
};

export const dashboardSlices = createSlice( {
    name: "dashboardSlice",
    initialState,
    reducers: {
        ResponsiveSidebar: ( state, action ) =>
        {
            state.responsive_sidebar = action.payload;
        },
    },
} );

export const selectDashboardNav = ( state ) => state.dashboardslices;

export const { ResponsiveSidebar } = dashboardSlices.actions;

export default dashboardSlices.reducer;