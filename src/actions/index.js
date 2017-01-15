import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
	CHANGE_LOGIN_EMAIL, 
	CHANGE_LOGIN_PASSWORD, 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGIN_USER_LOADING,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	REGISTER_USER_LOADING
} from './types'


export const changeLoginEmail = (email) => {
	return {
		type: CHANGE_LOGIN_EMAIL,
		payload: email	
	};
};

export const changeLoginPassword = (password) => {
	return {
		type: CHANGE_LOGIN_PASSWORD,
		payload: password
	};
};

export const loginUser = (userInfo) => {
	const { email, password } = userInfo;

	return (dispatch) => {
		dispatch({
			type: LOGIN_USER_LOADING
		});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(response => {
				console.log(response);

				dispatch({
					type: LOGIN_USER_SUCCESS
				});

				Actions.main();
			}).catch(error => {
				console.log(error);
				
				dispatch({
					type: LOGIN_USER_ERROR,
					payload: error
				});
			});
	};
};

export const registerUser = (userInfo) => {
	const { email, password } = userInfo;

	return (dispatch) => {
		dispatch({
			type: REGISTER_USER_LOADING
		});

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response => {
				console.log(response);

				dispatch({
					type: REGISTER_USER_SUCCESS
				});

				Actions.main();
			}).catch(error => {
				console.log(error);
				
				dispatch({
					type: REGISTER_USER_ERROR,
					payload: error
				});
			});
	};
};