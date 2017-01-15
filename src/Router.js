import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key='login' component={LoginForm} title='Login' initial />
			<Scene key='main' component={Main} title='Main' />
		</Router>
	);
};

export default RouterComponent;