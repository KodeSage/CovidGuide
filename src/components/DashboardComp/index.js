/** @format */

import React from "react";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "react-headless-accordion";
import "./DashboardComp.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../reduxSlices/authSlices";
import { selectUserResults } from "../../reduxSlices/userSlices";

export const Chevron = ({ className = "" }) => (
	<svg
		className={className}
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
			clipRule="evenodd"></path>
	</svg>
);
const DashboardComp = () => {
	function toDateTime(secs) {
		var t = new Date(1970, 0, 1); // Epoch
		t.setSeconds(secs);
		return t;
	}
	const { firstname, lastname } = useSelector(selectUser);
	const { covidresults } = useSelector(selectUserResults);
	function rendertransactions() {
		if (covidresults.length === 0) {
			return <h1>NO RESULTS TO SHOW</h1>;
		}
		return (
			covidresults &&
			covidresults.map((result, index) => (
				<AccordionItem className="bg-[#405189]" key={index}>
					{({ open }) => (
						<>
							<AccordionHeader className="w-full flex item-center justify-between px-4 py-3 text-black/70 bg-[#7e87a5] transition-all duration-400">
								<div>
									{result.resultcase === "SEVERE" ? (
										<h2 className="SEVERE">{result.resultcase}</h2>
									) : result.resultcase === "HIGH" ? (
										<h2 className="HIGH">{result.resultcase}</h2>
									) : result.resultcase === "MEDIUM" ? (
										<h2 className="MEDIUM">{result.resultcase}</h2>
									) : (
										<h2 className="LOW">{result.resultcase}</h2>
									)}
								</div>
								<Chevron
									className={`h-6 w-6 transition duration-300 ${
										open ? "rotate-90" : ""
									}`}
								/>
							</AccordionHeader>
							<AccordionBody>
								<div className="p-5 font-light">
									<p>
										BODYACHES
										<span>: {result.resultsdata.bodyaches}</span>
									</p>
									<p>
										COLD
										<span>: {result.resultsdata.cold}</span>
									</p>
									<p>
										COUGH
										<span>: {result.resultsdata.cough}</span>
									</p>
									<p>
										DIARRHEA
										<span>: {result.resultsdata.diarrhea}</span>
									</p>
									<p>
										DIFFICULTY BREATHING
										<span>: {result.resultsdata.difficulty_breathing}</span>
									</p>
									<p>
										DIRECT CONTACT
										<span>: {result.resultsdata.direct_contact}</span>
									</p>
									<p>
										FATIGUE
										<span>: {result.resultsdata.fatigue}</span>
									</p>
									<p>
										FEVER
										<span>: {result.resultsdata.fever}</span>
									</p>
									<p>
										HEADACHE
										<span>: {result.resultsdata.headache}</span>
									</p>
									<p>
										TRAVEL HISTORY
										<span>: {result.resultsdata.history_travel}</span>
									</p>
									<p>
										SORETHROAT
										<span>: {result.resultsdata.sorethroat}</span>
									</p>
									<p>
										TRAVELED
										<span>: {result.resultsdata.traveled}</span>
									</p>
								</div>
							</AccordionBody>
						</>
					)}
				</AccordionItem>
			))
		);
	}
	return (
		<div className="dashboard_main">
			<h4>
				Welcome Back ,{firstname} {lastname}
			</h4>
			<div className="dashboard__container">
				<div className="dashboard__container__card">
					<div className="dashboard__container__card__text">
						<h3>TOTAL TEST RESULTS</h3>
						<p>{covidresults.length}</p>
					</div>
				</div>
			</div>
			<div className="dashboard__container">
				<div className="dashboard__container__card">
					<h3>ALL RESULTS</h3>
					<Accordion className="w-full">{rendertransactions()}</Accordion>
				</div>
			</div>
		</div>
	);
};
export default DashboardComp;
