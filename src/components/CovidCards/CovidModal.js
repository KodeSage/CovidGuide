/** @format */

import React from "react";
import { TbVirus } from "react-icons/tb";
import "./CovidCards.css";
import {useDispatch} from "react-redux";
import { finalResult } from "../../reduxSlices/dashboardSlices";
import answerpng from "../../Images/covidimages/answer.png";

const CovidModal = ({ resultcase, notes, covidcases }) => {
	const dispatch = useDispatch();
	return (
		<div className="modal_container">
			<div className="card_modal">
				<div className="card_header images">
					<img src={answerpng} alt />
				</div>
				<div className="card_body">
					<h5>
						RESULT:<span>Your risk of having COVID-19 is</span>
					</h5>
					<div>
						{resultcase === "SEVERE" ? (
							<h2 className="SEVERE">{resultcase}</h2>
						) : resultcase === "HIGH" ? (
							<h2 className="HIGH">{resultcase}</h2>
						) : resultcase === "MEDIUM" ? (
							<h2 className="MEDIUM">{resultcase}</h2>
						) : (
							<h2 className="LOW">{resultcase}</h2>
						)}

						<p>{notes}</p>
					</div>
				</div>
				<div className="card_button">
					<button type="button">Submit</button>
				</div>
			</div>
		</div>
	);
};
export default CovidModal;
