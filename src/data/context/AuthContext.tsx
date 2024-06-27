import { router } from 'next/router';
import { createContext, useState, useEffect } from 'react';
import firebase from '@/firebase/config';
import Cookies from 'js-cookie';

import User from '@/model/User';

interface AuthContextProps {
	user?: User;
	login?: (email: string, password: string) => Promise<void>;
	register?: (email: string, password: string) => Promise<void>;
	loginGoogle: () => Promise<void>;
	logOut: () => Promise<void>;
	loading?: boolean;
}

const AuthContext = createContext<AuthContextProps>();

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
	const token = await firebaseUser.getIdToken();
	return {
		uid: firebaseUser.uid,
		name: firebaseUser.displayName,
		email: firebaseUser.email,
		token: token,
		provider: firebaseUser.providerData[0].providerId,
		imageUrl: firebaseUser.photoURL
	};
}

function manageCookie(logged: boolean) {
	if (logged) {
		Cookies.set('admin-template-auth', logged, { expires: 7 });
	} else {
		Cookies.remove('admin-template-auth');
	}
}

export function AuthProvider(props) {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User>(null);

	async function setSession(firebaseUser) {
		if (firebaseUser?.email) {
			const user = await normalizedUser(firebaseUser);
			setUser(user);
			manageCookie(true);
			setLoading(false);
			return user.email;
		} else {
			setUser(null);
			manageCookie(false);
			setLoading(false);
			return false;
		}
	}

	async function register(email, password) {
		try {
			setLoading(true);
			const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);

			await setSession(resp.user);
			router.push('/');
		} finally {
			setLoading(false);
		}
	}

	async function login(email, password) {
		try {
			setLoading(true);
			const resp = await firebase.auth().signInWithEmailAndPassword(email, password);

			await setSession(resp.user);
			router.push('/');
		} finally {
			setLoading(false);
		}
	}

	async function loginGoogle() {
		try {
			setLoading(true);
			const resp = await firebase.auth().signInWithPopup(
				new firebase.auth.GoogleAuthProvider()
			);

			setSession(resp.user);
			router.push('/');
		} finally {
			setLoading(false);
		}
	}

	async function logOut() {
		try {
			setLoading(true);
			await firebase.auth().signOut();
			await setSession(null);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (Cookies.get('admin-template-auth')) {
			const cancel = firebase.auth().onIdTokenChanged(setSession);
			return () => cancel();
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<AuthContext.Provider value={
			{
				user,
				register, 
				login, 
				loginGoogle,
				logOut,
				loading
			}
		}>
			{ props.children }
		</AuthContext.Provider>
	);
}

export default AuthContext;