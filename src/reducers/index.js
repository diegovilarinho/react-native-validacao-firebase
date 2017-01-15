import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer // Ex: state.auth.password
});