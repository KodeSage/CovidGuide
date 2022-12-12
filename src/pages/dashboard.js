import React from 'react';
import DashboardLayouts from '../layouts/Dashboardlayouts/DashboardLayouts';
import DashboardNav from "../layouts/Dashboardlayouts/DashboardNav";

const Dashboard = () =>
{
  return (
		<DashboardLayouts>
			<DashboardNav title="Home" />
			<div className="contents_height">
				<div className="video-responsive">
					<iframe
						width="853"
						height="480"
						src={`https://www.youtube.com/embed/Za-3B2Bx1SM`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded youtube"
					/>
				</div>
			</div>
		</DashboardLayouts>
	);
};

export default Dashboard;
