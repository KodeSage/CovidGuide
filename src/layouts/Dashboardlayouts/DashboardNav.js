/** @format */

import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	ResponsiveSidebar,
	selectDashboardNav,
} from "../../reduxSlices/dashboardSlices";
import { selectUser } from "../../reduxSlices/authSlices";
import { CgProfile } from 'react-icons/cg'
import "../DashboardSidebar/DasboardSidebar.css";

const DashboardNav = ({title}) => {
    const { responsive_sidebar } = useSelector( selectDashboardNav );
    const { username, firstname, lastname } = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<div className="dashboard_nav">
			<div onClick={() => dispatch(ResponsiveSidebar(!responsive_sidebar))} className="title_toggle">
				<AiOutlineMenu color="black" />
				<h2>{title}</h2>
			</div>
			<div className="profile_pic">
				<CgProfile />
				<div>
					<p>
						{username}({firstname})
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardNav;
