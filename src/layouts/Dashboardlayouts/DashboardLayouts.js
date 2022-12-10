/** @format */

import React from "react";
import DashboardSidebar from "../DashboardSidebar";
import "../DashboardSidebar/DasboardSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
	ResponsiveSidebar,
	selectDashboardNav,
} from "../../reduxSlices/dashboardSlices";

const DashboardLayouts = ( { children } ) =>
{
	const { responsive_sidebar } = useSelector(selectDashboardNav);
	return (
		<div className="flex">
			<DashboardSidebar />
			<div className={`${responsive_sidebar ? "res_contents" : "main_contents "}`}>
				{children}
			</div>
		</div>
	);
};
export default DashboardLayouts;