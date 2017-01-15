import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

class App extends Component {
	componentDidMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyAbDDbyoI1ilkfoavUKWSSNt2mc_atZfyg",
			authDomain: "react-native-autenticacao.firebaseapp.com",
			databaseURL: "https://react-native-autenticacao.firebaseio.com",
			storageBucket: "react-native-autenticacao.appspot.com",
			messagingSenderId: "2814223217"
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Router />
				</View>
			</Provider>
		);
	}
};

export default App;