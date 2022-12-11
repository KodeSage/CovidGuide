/** @format */

import React from "react";
import DashboardLayouts from "../layouts/Dashboardlayouts/DashboardLayouts";
import DashboardNav from "../layouts/Dashboardlayouts/DashboardNav";
import Profiles from "../components/Profile";

const Profile = () => {
	return (
		<DashboardLayouts>
			<DashboardNav title="Profile" />
			<div className="contents_height">
				<Profiles />
			</div>
		</DashboardLayouts>
	);
};

export default Profile;
