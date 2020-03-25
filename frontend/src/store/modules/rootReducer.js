import { combineReducers } from 'redux';

import auth from './auth/reducer';
import incidents from './incidents/reducer';

export default combineReducers({
	auth,
	incidents
});
