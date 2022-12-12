/** @format */

import React from "react";
import "./DasboardSidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { FaNotesMedical } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbVirus } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import {
	ResponsiveSidebar,
	selectDashboardNav,
} from "../../reduxSlices/dashboardSlices";

const DashboardSidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { pathname } = location;
	const dispatch = useDispatch();

	const { responsive_sidebar } = useSelector(selectDashboardNav);
	const LogoutUserAccount = async () => {
		await logoutUser(navigate, dispatch);
	};
	return (
		<div className={`${responsive_sidebar ? "toogle" : "sidebar"}`}>
			<div className="sidebar_header">
				<div className="sidebar__logo">
					<span>
						<TbVirus />
					</span>
					<h1>COVIDGUIDE</h1>
				</div>
				<div
					onClick={() => dispatch(ResponsiveSidebar(false))}
					className="close_icon">
					<AiOutlineClose />
				</div>
			</div>

			<div className="sidebar__menu">
				<ul>
					<Link to="/dashboard">
						<li
							className={`${pathname === "/dashboard" && "active"}`}
							onClick={() => dispatch(ResponsiveSidebar(false))}>
							<span>
								<BiHomeAlt />
							</span>
							<p>Home</p>
						</li>
					</Link>
					<Link to="/test">
						<li
							className={`${pathname === "/test" && "active"}`}
							onClick={() => dispatch(ResponsiveSidebar(false))}>
							<span>
								<FaNotesMedical />
							</span>
							<p>Test</p>
						</li>
					</Link>
					<Link to="/statistics">
						<li
							className={`${pathname === "/statistics" && "active"}`}
							onClick={() => dispatch(ResponsiveSidebar(false))}>
							<span>
								<IoIosStats />
							</span>
							<p>Statistics</p>
						</li>
					</Link>
					<Link to="/profile">
						<li
							className={`${pathname === "/profile" && "active"}`}
							onClick={() => dispatch(ResponsiveSidebar(false))}>
							<span>
								{/* <CgProfile /> */ }
							<MdOutlineManageAccounts />
								{/* <IoIosStats /> */}
							</span>
							<p>Profile</p>
						</li>
					</Link>
				</ul>
			</div>
			<div className="sidebar__logout" onClick={LogoutUserAccount}>
				<span>
					<BiLogOut />
				</span>
				<h4>Logout</h4>
			</div>
		</div>
	);
};

export default DashboardSidebar;
