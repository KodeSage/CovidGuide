/** @format */

import React from "react";
import { TbVirus } from "react-icons/tb";
import "./CovidCards.css";

const IntroCovidCard = ({ setShow }) => {
	return (
		<div className="modal_container">
			<div className="card_modal">
				<div className="card_header">
					<TbVirus />
					<h2>COVID-19 SELF TEST</h2>
				</div>
				<div className="card_body">
					<p>
						This is a COVID-19 self assessment tool that was calibrated based on
						WHO guidelines. It is not a diagnostic tool.
					</p>
				</div>
				<div className="card_button">
					<button onClick={() => setShow(false)}>Start Test</button>
				</div>
			</div>
		</div>
	);
};

export default IntroCovidCard;
