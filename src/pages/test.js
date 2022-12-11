/** @format */

import React, {useState} from "react";
import DashboardLayouts from "../layouts/Dashboardlayouts/DashboardLayouts";
import DashboardNav from "../layouts/Dashboardlayouts/DashboardNav";
import IntroCovidCard from "../components/CovidCards/IntroCovidCard";

const Test = () =>
{
	const [show, setShow] = useState(true);
	return (
		<>
			<DashboardLayouts>
				<DashboardNav title="Self Test" />
				<div className="contents_height">
					<div className="covid_contents">
						<p>ASDFGDS</p>
						<p>ASDFGDS</p>
						<p>ASDFGDS</p>
					</div>
				</div>
			</DashboardLayouts>

			{show && <IntroCovidCard setShow={setShow} />}
		</>
	);
};

export default Test;
