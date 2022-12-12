/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { TbVirus } from "react-icons/tb";
import "./CovidCards.css";
import { useDispatch, useSelector } from "react-redux";
import answerpng from "../../Images/covidimages/answer.png";
import { addResultsToDB } from "../../services/userServices";
import { selectUser } from "../../reduxSlices/authSlices";
import { selectUserResults } from "../../reduxSlices/userSlices";

const CovidModal = ({ resultcase, notes, covidcases }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentuserID } = useSelector(selectUser);
	// const { covidresults } = useSelector(selectUserResults);

	const SubmitData = async () => {
		await addResultsToDB(
			currentuserID,
			covidcases,
			resultcase,
			dispatch,
			navigate
		);
	};
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
					<button type="button" onClick={SubmitData}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default CovidModal;
