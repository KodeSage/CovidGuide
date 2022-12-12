/** @format */

import React, { useState, useEffect } from "react";
import DashboardLayouts from "../layouts/Dashboardlayouts/DashboardLayouts";
import DashboardNav from "../layouts/Dashboardlayouts/DashboardNav";
import IntroCovidCard from "../components/CovidCards/IntroCovidCard";
import CovidModal from "../components/CovidCards/CovidModal";
import CovidCard from "../components/CovidCards/";
import { useSelector, useDispatch } from "react-redux";
import {
	HasCough,
	HasCold,
	HasDiarrhea,
	HasSorethroat,
	HasBodyaches,
	HasHeadache,
	HasFever,
	HasDifficulty_breathing,
	HasFatigue,
	HasTraveled,
	HasHistory_travel,
	HasDirect_contact,
	selectDashboardNav,
} from "../reduxSlices/dashboardSlices";
import coughimage from "../Images/covidimages/c2.png";
import coldimage from "../Images/covidimages/coldd.png";
import diarrheaimage from "../Images/covidimages/diarrhea.png";
import sorethroatimage from "../Images/covidimages/sorethroat.png";
import bodyachesimage from "../Images/covidimages/bodyaches.png";
import headacheimage from "../Images/covidimages/headache.png";
import feverimage from "../Images/covidimages/fever.png";
import difficultybreathingimage from "../Images/covidimages/difficultybreathing.png";
import fatigueimage from "../Images/covidimages/fatigue.jpg";
import traveledimage from "../Images/covidimages/traveled.png";
import historytravelimage from "../Images/covidimages/historytravel.png";
import directcontactimage from "../Images/covidimages/directcontact.png";

const Test = () => {
	const [show, setShow] = useState(true);
	const dispatch = useDispatch();
	const { page, covidcases } = useSelector( selectDashboardNav );

	const asArray = Object.entries( covidcases );
	const ghad = asArray.map(([key, value]) => {
			return value;
	} );
	const [resultData, setResultDataData] = useState({
		resultcase: "",
		notes: "",
	});

	const yes = ( value ) => value === "Yes";
	const no = ( value ) => value === "No";
	const filterYes = ghad.filter( yes );
	const filterNo = ghad.filter( no );
	const CaseStudy = () =>
	{
		if ( ( filterYes.length >= 10 ) && ( filterNo.length <= 2 ) )
		{
			setResultDataData( {
				resultcase: "SEVERE",
				notes: "Do not panic,isolate yourself from friends and family, Call 08099936312,SMS 07080631500 or WHATSAPP: 07043402122",
			} );
		} else if ( ( filterYes.length <= 9 && filterYes.length >= 6 ) || ( filterNo >= 3 && filterNo <= 6 ) )
		{
			setResultDataData( {
				resultcase: "HIGH",
				notes: "Please see a doctor immediately.Do not panic, isolate yourself from friends and family.",
			} );
		}
		else if ( ( filterYes.length <= 5 && filterYes.length >= 3 ) || ( filterNo >= 7 && filterNo <= 9 ) )
		{
			setResultDataData( {
				resultcase: "MEDIUM",
				notes: "Drink water regularly and observe personal good hygiene. Pay attention to your health and redo test after two days."
			} );
		} else if ((filterYes.length <= 2) || (filterNo >= 10))
		{
			setResultDataData({
				resultcase: "LOW",
				notes: "You may be stressed,get some rest.",
			});
		}
	}
	useEffect(() => {
		CaseStudy();
	}, [page, filterYes, filterNo, resultData]);

	return (
		<DashboardLayouts>
			<DashboardNav title="Self Test" />
			<div className="contents_height">
				<div className="covid_contents">
					{page === 0 && (
						<CovidCard
							symptoms="Do you have cough?"
							image={coughimage}
							yes={() => dispatch(HasCough("Yes"))}
							no={() => dispatch(HasCough("No"))}
						/>
					)}
					{page === 1 && (
						<CovidCard
							symptoms="Do you have a cold?"
							image={coldimage}
							yes={() => dispatch(HasCold("Yes"))}
							no={() => dispatch(HasCold("No"))}
						/>
					)}
					{page === 2 && (
						<CovidCard
							symptoms="Are you having Diarrhea?"
							image={diarrheaimage}
							yes={() => dispatch(HasDiarrhea("Yes"))}
							no={() => dispatch(HasDiarrhea("No"))}
						/>
					)}
					{page === 3 && (
						<CovidCard
							symptoms="Are you having sorethroat?"
							image={sorethroatimage}
							yes={() => dispatch(HasSorethroat("Yes"))}
							no={() => dispatch(HasSorethroat("No"))}
						/>
					)}
					{page === 4 && (
						<CovidCard
							symptoms="Are you having bodyaches?"
							image={bodyachesimage}
							yes={() => dispatch(HasBodyaches("Yes"))}
							no={() => dispatch(HasBodyaches("No"))}
						/>
					)}
					{page === 5 && (
						<CovidCard
							symptoms="Are you having a headache?"
							image={headacheimage}
							yes={() => dispatch(HasHeadache("Yes"))}
							no={() => dispatch(HasHeadache("No"))}
						/>
					)}
					{page === 6 && (
						<CovidCard
							symptoms="Do you have fever(Temperature 37.8°Cand above)?"
							image={feverimage}
							yes={() => dispatch(HasFever("Yes"))}
							no={() => dispatch(HasFever("No"))}
						/>
					)}
					{page === 7 && (
						<CovidCard
							symptoms="Are you having difficulty breathing?"
							image={difficultybreathingimage}
							yes={() => dispatch(HasDifficulty_breathing("Yes"))}
							no={() => dispatch(HasDifficulty_breathing("No"))}
						/>
					)}
					{page === 8 && (
						<CovidCard
							symptoms="Are you experiencing fatigue?"
							image={fatigueimage}
							yes={() => dispatch(HasFatigue("Yes"))}
							no={() => dispatch(HasFatigue("No"))}
						/>
					)}
					{page === 9 && (
						<CovidCard
							symptoms="Have you traveled recently during the past 14 days?"
							image={traveledimage}
							yes={() => dispatch(HasTraveled("Yes"))}
							no={() => dispatch(HasTraveled("No"))}
						/>
					)}
					{page === 10 && (
						<CovidCard
							symptoms="Do you have a history of traveling to an area infected with COVID-19 ?"
							image={historytravelimage}
							yes={() => dispatch(HasHistory_travel("Yes"))}
							no={() => dispatch(HasHistory_travel("No"))}
						/>
					)}
					{page === 11 && (
						<CovidCard
							symptoms="Do you have direct contact with or are you taking care of a positive COVID-19 PATIENT?"
							image={directcontactimage}
							yes={() => dispatch(HasDirect_contact("Yes"))}
							no={() => dispatch(HasDirect_contact("No"))}
						/>
					)}
					{page === 12 && (
						<CovidModal
							resultcase={resultData.resultcase}
							notes={resultData.notes}
							covidcases={covidcases}
						/>
					)}
				</div>
				{show && <IntroCovidCard setShow={setShow} />}
			</div>
		</DashboardLayouts>
	);
};

export default Test;
