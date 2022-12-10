/**
 * /* eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

/** @format */
import { toast } from "react-toastify";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { AuthenticateUser, LogoutUser } from "../reduxSlices/authSlices";

import {
	doc,
	getDocs,
	setDoc,
	getFirestore,
	collection,
	query,
	where,
} from "firebase/firestore";
import { db } from "../firebaseconfig";

const userCol = collection(db, "users");

async function checkUserExists(username) {
	try {
		const queryuser = query(userCol, where("username", "==", username));
		const querySnapshot = await getDocs(queryuser);
		if (querySnapshot.empty) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
}

export async function registerUser(data, navigate) {
	try {
		const auth = getAuth();
		const { username, firstname, lastname, email, password, userCountry } =
			data;
		const userExists = await checkUserExists(username);
		if (userExists) {
			toast.error("Username already exists");
		}
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;

		const userData = {
			uid: user.uid,
			username: username,
			firstname: firstname,
			lastname: lastname,
			email: email,
			userCountry: userCountry,
		};
		await setDoc(doc(db, "users", user.uid), userData);
		toast.success("User Created Successfully");
		navigate("/signin");
	} catch (error) {
		toast.error(error.message);
		navigate("/signup");
	}
}

async function getUserFromDb(uid) {
	try {
		let users = [];
		const queryuser = query(userCol, where("uid", "==", uid));
		const querySnapshot = await getDocs(queryuser);
		if (querySnapshot.empty) {
			toast.error("Sorry did not find Any User");
		}
		querySnapshot.forEach((d) => {
			users.push({
				uid: d.data().uid,
				username: d.data().username,
				firstname: d.data().firstname,
				lastname: d.data().lastname,
				email: d.data().email,
				userCountry: d.data().userCountry,
			});
		});
		return users[0];
	} catch (error) {
		toast.error(error.message);
	}
}

export async function loginUser(data, navigate, dispatch) {
	try {
		const auth = getAuth();
		const { email, password, username } = data;
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = await getUserFromDb(userCredential.user.uid);
		dispatch(
			AuthenticateUser({
				userID: user.uid,
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				password: user.password,
				userCountry: user.userCountry,
			})
		);

		toast.success("User Logged In Successfully");
		navigate("/dashboard");
	} catch (error) {
		toast.error(error.message);
	}
}

export async function autoLoginUser(uid, dispatch) {
	// const dispatch = useDispatch();
	try {
		const user = await getUserFromDb(uid);
		dispatch(
			AuthenticateUser({
				userID: user.uid,
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				password: user.password,
				userCountry: user.userCountry,
			})
		);
	} catch (error) {
		toast.error(error);
	}
}
export async function logoutUser(navigate, dispatch) {
	const auth = getAuth();
	try {
		await signOut(auth);
		dispatch(LogoutUser());
		toast.success("User Logged Out Successfully");
		navigate("/signin");
	} catch (error) {
		toast.error(error);
	}
}
