import React from "react"; 
import "./CovidCards.css";

const CovidCard = ({ image, symptoms, yes, no }) => {
	return (
		<div className="covid_card">
			<div className="covid_card_image">
				<img src={image} alt />
			</div>
			<div className="covid_card_symptoms">
				<p>{symptoms}</p>
			</div>
			<div className="covid_cardbuttons">
				<button type="button" onClick={yes}>
					YES
				</button>
				<button type="button" onClick={no}>
					NO
				</button>
			</div>
		</div>
	);
};

export default CovidCard;