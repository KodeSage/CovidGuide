/** @format */
import { toast } from "react-toastify";
import { store } from "../app/store";
import {
	updateDoc,
	doc,
	collection,
	addDoc,
	setDoc,
	getDocs,
	query,
	where,
	orderBy,
	deleteDoc,
	serverTimestamp,
	getDoc,
	arrayUnion,
} from "firebase/firestore";
import { getApp } from "firebase/app";
import { db } from "../firebaseconfig";
import { finalResult } from "../reduxSlices/dashboardSlices";
import { upDateResults, getDataResults } from "../reduxSlices/userSlices";

export const addResultsToDB = async (
	userID,
	covidcases,
	resultcase,
	dispatch,
	navigate
) => {
	const time = new Date();
	const reSultDataForm = {
		...covidcases,
		timestamp: time,
	};
	const covidresults = [
		{
			resultsdata: reSultDataForm,
			resultcase: resultcase,
		},
	];
	try {
		await setDoc(
			doc(db, "testresults", userID),
			{
				covidresults: arrayUnion(...covidresults),
			},
			{ merge: true }
		);
		toast.success("Results Saved Successfully");
		dispatch(
			upDateResults({
				resultsdata: reSultDataForm,
				resultcase: resultcase,
			})
		);
		navigate("/dashboard");
		dispatch(finalResult());
	} catch (error) {
		toast.error(error.message);
	}
};

export  const getTransactionsFromDB = async ( userID, dispatch ) =>
{
	try {
		let transactions = [];
		const docRef = doc(db, "testresults", userID);
		const fetchedDoc = await getDoc(docRef);
		transactions = [...fetchedDoc.data().covidresults];
		console.log("Transactions", transactions);
		dispatch(getDataResults(transactions));
	} catch (error) {
		toast.error(error.message);
	}
	
}
